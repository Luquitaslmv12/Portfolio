import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const LightPillar = ({
  topColor = '#5227FF',
  bottomColor = '#FF9FFC',
  intensity = 1.0,
  rotationSpeed = 0.3,
  interactive = false,
  staticMode = false,
  className = '',
  glowAmount = 0.005,
  pillarWidth = 3.0,
  pillarHeight = 0.4,
  noiseIntensity = 0.5,
  mixBlendMode = 'screen',
  pillarRotation = 0,
  pauseWhenNotVisible = true,
  mobileOptimized = true // NUEVA PROPIEDAD para móviles
}) => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const geometryRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const timeRef = useRef(0);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  const isVisibleRef = useRef(true);
  const observerRef = useRef(null);
  const lastTimeRef = useRef(0);
  const shouldAnimateRef = useRef(true);
  const animationIdRef = useRef(0);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      return window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    setIsMobile(checkMobile());
    
    const handleResize = () => {
      setIsMobile(checkMobile());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check WebGL support
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebGLSupported(false);
      console.warn('WebGL is not supported in this browser');
    }
  }, []);

  // Intersection Observer
  useEffect(() => {
    if (!pauseWhenNotVisible || !containerRef.current || !('IntersectionObserver' in window)) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          isVisibleRef.current = entry.isIntersecting;
          shouldAnimateRef.current = entry.isIntersecting;
          
          if (!entry.isIntersecting && rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
          }
          
          if (entry.isIntersecting && !rafRef.current && rendererRef.current) {
            lastTimeRef.current = performance.now();
            if (staticMode && isMobile) {
  rendererRef.current.render(sceneRef.current, cameraRef.current);
  return;
}
startAnimation();
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '200px'
      }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [pauseWhenNotVisible]);

  // Función para iniciar animación con FPS adaptativo
  const startAnimation = () => {
    if (rafRef.current || !rendererRef.current || !shouldAnimateRef.current) return;

    const targetFPS = isMobile ? 40 : 60; // FPS más bajo en móviles
    const frameTime = 1000 / targetFPS;
    let frameCount = 0;

    const animate = (currentTime) => {
      if (!materialRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) {
        return;
      }
      if (!staticMode) {
  timeRef.current += (frameTime / 1000) * rotationSpeed;
  materialRef.current.uniforms.uTime.value = timeRef.current;
}

      const deltaTime = currentTime - lastTimeRef.current;

      if (deltaTime >= frameTime) {
        if (shouldAnimateRef.current) {
          timeRef.current += (frameTime / 1000) * rotationSpeed;
          materialRef.current.uniforms.uTime.value = timeRef.current;
          
          // En móviles, renderizar cada 2 frames para más performance
          if (!isMobile || frameCount % 2 === 0) {
            rendererRef.current.render(sceneRef.current, cameraRef.current);
          }
          frameCount++;
        }
        lastTimeRef.current = currentTime - (deltaTime % frameTime);
      }

      if (shouldAnimateRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!containerRef.current || !webGLSupported) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    cameraRef.current = camera;

    let renderer;
    try {
      const isLowEndDevice = isMobile || 
        (/Android|iPhone|iPad/i.test(navigator.userAgent) && 
         /CPU|Intel|AMD/.test(navigator.userAgent));

      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: isLowEndDevice ? 'low-power' : 'high-performance',
        precision: 'mediump', // Medium precision para móviles
        stencil: false,
        depth: false
      });
    } catch (error) {
      console.error('Failed to create WebGL renderer:', error);
      setWebGLSupported(false);
      return;
    }

    // Pixel ratio reducido en móviles
    const pixelRatio = isMobile ? 
      Math.min(window.devicePixelRatio, 1) : 
      Math.min(window.devicePixelRatio, 1.5);
    
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Convert hex colors to RGB
    const parseColor = hex => {
      const color = new THREE.Color(hex);
      return new THREE.Vector3(color.r, color.g, color.b);
    };

    // Shader ADAPTATIVO para móviles
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform bool uInteractive;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uPillarRotation;
      uniform bool uIsMobile;
      varying vec2 vUv;

      const float PI = 3.141592653589793;
      const float EPSILON = 0.001;
      const float E = 2.718281828459045;

      mat2 rot(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c);
      }

      // Noise optimizado para móviles
      float noise(vec2 coord) {
        return fract(sin(dot(coord, vec2(12.9898, 78.233))) * 43758.5453);
      }

      // Deformación simplificada para móviles
      vec3 applyWaveDeformation(vec3 pos, float timeOffset) {
        if (uIsMobile) {
          // Versión móvil: solo 2 iteraciones
          float frequency = 1.2;
          float amplitude = 0.8;
          
          for(float i = 0.0; i < 2.0; i++) {
            pos.xz *= rot(0.3);
            vec3 oscillation = cos(pos.zxy * frequency - timeOffset * (i + 1.0) * 0.3);
            pos += oscillation * amplitude;
            frequency *= 1.5;
            amplitude *= 0.5;
          }
        } else {
          // Versión desktop: 4 iteraciones
          float frequency = 1.0;
          float amplitude = 1.0;
          
          for(float i = 0.0; i < 4.0; i++) {
            pos.xz *= rot(0.4);
            vec3 oscillation = cos(pos.zxy * frequency - timeOffset * i * 2.0);
            pos += oscillation * amplitude;
            frequency *= 2.0;
            amplitude *= 0.5;
          }
        }
        return pos;
      }

      float blendMax(float a, float b, float k) {
        float h = max(k - abs(a - b), 0.0);
        return max(a, b) + h * h * 0.25 / k;
      }

      void main() {
        vec2 fragCoord = vUv * uResolution;
        vec2 uv = (fragCoord * 2.0 - uResolution) / uResolution.y;
        
        float rotAngle = uPillarRotation * PI / 180.0;
        uv *= rot(rotAngle);

        vec3 origin = vec3(0.0, 0.0, uIsMobile ? -6.0 : -10.0);
        vec3 direction = normalize(vec3(uv, 1.0));

        float maxDepth = uIsMobile ? 35.0 : 50.0;
        float depth = 0.1;

        mat2 rotX = rot(uTime * (uIsMobile ? 0.2 : 0.3));
        if(uInteractive && length(uMouse) > 0.0) {
          rotX = rot(uMouse.x * PI * 2.0);
        }

        vec3 color = vec3(0.0);
        
        // ITERACIONES REDUCIDAS EN MÓVILES
        float maxIterations = uIsMobile ? 50.0 : 100.0;
        
        for(float i = 0.0; i < maxIterations; i++) {
          vec3 pos = origin + direction * depth;
          pos.xz *= rotX;

          // Aplicar escalado vertical
          vec3 deformed = pos;
          deformed.y *= uPillarHeight;
          
          // Aplicar deformación
          deformed = applyWaveDeformation(deformed + vec3(0.0, uTime * 0.5, 0.0), uTime);
          
          // Campo de distancia optimizado
          vec2 cosinePair = cos(deformed.xz * (uIsMobile ? 0.8 : 1.0));
          float fieldDistance = length(cosinePair) - 0.2;
          
          // Restricción radial
          float radialBound = length(pos.xz) - uPillarWidth;
          fieldDistance = blendMax(radialBound, fieldDistance, 1.0);
          fieldDistance = abs(fieldDistance) * 0.15 + 0.01;

          // Gradiente
          vec3 gradient = mix(uBottomColor, uTopColor, smoothstep(12.0, -12.0, pos.y));
          
          // Cálculo más simple en móviles
          if (uIsMobile) {
            color += gradient * (0.7 / fieldDistance);
          } else {
            color += gradient * pow(1.0 / fieldDistance, 1.0);
          }

          if(fieldDistance < EPSILON || depth > maxDepth) break;
          depth += fieldDistance * (uIsMobile ? 1.2 : 1.0);
        }

        // Normalización
        float widthNormalization = uPillarWidth / 3.0;
        color = tanh(color * uGlowAmount / widthNormalization);
        
        // Ruido reducido en móviles
        float rnd = noise(gl_FragCoord.xy * (uIsMobile ? 0.3 : 1.0));
        color -= rnd * (uIsMobile ? 0.02 : 0.066) * uNoiseIntensity;
        
        gl_FragColor = vec4(color * uIntensity, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: mouseRef.current },
        uTopColor: { value: parseColor(topColor) },
        uBottomColor: { value: parseColor(bottomColor) },
        uIntensity: { value: intensity },
        uInteractive: { value: interactive },
        uGlowAmount: { value: glowAmount },
        uPillarWidth: { value: pillarWidth },
        uPillarHeight: { value: pillarHeight },
        uNoiseIntensity: { value: noiseIntensity },
        uPillarRotation: { value: pillarRotation },
        uIsMobile: { value: isMobile && mobileOptimized }
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      precision: isMobile ? 'mediump' : 'lowp'
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    geometryRef.current = geometry;
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse interaction
    let mouseMoveTimeout = null;
    const handleMouseMove = event => {
      if (!interactive) return;

      if (mouseMoveTimeout) return;

      mouseMoveTimeout = setTimeout(() => {
        const rect = container.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        mouseRef.current.set(x, y);
        mouseMoveTimeout = null;
      }, isMobile ? 32 : 16); // Más throttle en móvil
    };

    if (interactive) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Pausar cuando el tab no está visible
    const handleVisibilityChange = () => {
      if (document.hidden && rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        shouldAnimateRef.current = false;
      } else if (!document.hidden && isVisibleRef.current && !rafRef.current && rendererRef.current) {
        shouldAnimateRef.current = true;
        lastTimeRef.current = performance.now();
        startAnimation();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Iniciar animación
    if (isVisibleRef.current) {
      lastTimeRef.current = performance.now();
      startAnimation();
    }

    // Handle resize optimizado
    let resizeTimeout = null;
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      resizeTimeout = setTimeout(() => {
        if (!rendererRef.current || !materialRef.current || !containerRef.current) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;
        rendererRef.current.setSize(newWidth, newHeight);
        materialRef.current.uniforms.uResolution.value.set(newWidth, newHeight);
      }, isMobile ? 300 : 150); // Más debounce en móvil
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (interactive) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      if (rendererRef.current) {
        try {
          rendererRef.current.dispose();
          if (container.contains(rendererRef.current.domElement)) {
            container.removeChild(rendererRef.current.domElement);
          }
        } catch (error) {
          console.warn('Cleanup error:', error);
        }
      }
      
      if (materialRef.current) {
        materialRef.current.dispose();
      }
      
      if (geometryRef.current) {
        geometryRef.current.dispose();
      }

      rendererRef.current = null;
      materialRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      geometryRef.current = null;
      rafRef.current = null;
      isVisibleRef.current = true;
      shouldAnimateRef.current = true;
    };
  }, [
    topColor,
    bottomColor,
    intensity,
    rotationSpeed,
    interactive,
    glowAmount,
    pillarWidth,
    pillarHeight,
    noiseIntensity,
    pillarRotation,
    webGLSupported,
    pauseWhenNotVisible,
    isMobile,
    mobileOptimized
  ]);

  if (!webGLSupported) {
    return (
      <div
        className={`w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black/10 text-gray-500 text-sm ${className}`}
        style={{ mixBlendMode }}
      >
        WebGL not supported
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full absolute top-0 left-0 ${className}`}
      style={{ 
        mixBlendMode,
        ...(isMobile && {
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        })
      }}
    />
  );
};

export default LightPillar;