import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Servicios from "./Components/Servicios";
import Proyectos from "./Components/Proyectos";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";
import { useState, useEffect, useCallback, useMemo  } from "react";
import Estudios from "./Components/Estudios";
import SobreMi from "./Components/SobreMi";
import { motion } from "framer-motion";
import './App.css';

// Debounce helper
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Componente SEPARADO para partículas - totalmente independiente
const StaticParticles = ({ isMobile }) => {
  const particles = useMemo(() => {
    const particleCount = isMobile ? 15 : 25;
    return Array.from({ length: particleCount }, (_, i) => {
      const size = 2 + Math.random() * 4;
      const color = Math.random() > 0.7 ? 'bg-blue-400' : 
                   Math.random() > 0.5 ? 'bg-purple-400' : 'bg-cyan-400';
      
      return {
        id: i,
        size: size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: 0.4 + Math.random() * 0.4,
        delay: Math.random() * 6,
        duration: 5 + Math.random() * 5,
        color: color,
      };
    });
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} particle-static`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: [0, -20, -10, 0],
            x: [0, 5, -3, 0],
            scale: [1, 1.2, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

// Componente SEPARADO para el scanner
const StaticScanner = () => (
  <motion.div
    className="fixed inset-0 pointer-events-none overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
      initial={{ y: -100 }}
      animate={{ y: '100vh' }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 5,
      }}
    />
  </motion.div>
);


// Fondo tecnológico SIMPLIFICADO
const BackgroundEffects = ({ isMobile }) => {
  return (
    <>
      {/* Fondo base */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 pointer-events-none" />
      
      {/* Grid estático */}
      <div className="fixed inset-0 bg-grid-custom pointer-events-none" />
      
      {/* Gradientes estáticos */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Componentes INDEPENDIENTES */}
      <StaticParticles isMobile={isMobile} />
      <StaticScanner />
      
      {/* Líneas de conexión */}
      <div className="fixed inset-0 pointer-events-none opacity-8">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(6,182,212,0.05)_50%,transparent_100%)] pulse-slow-animation" />
      </div>
    </>
  );
};


export default function App() {
    const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");
  const [isMobile, setIsMobile] = useState(false);

  // Solo detectar móvil una vez
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent));
    };
    checkMobile();
  }, []);

  // Scroll handler SIMPLIFICADO
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    
    const sections = ['banner', 'servicios', 'proyectos', 'estudios', 'sobre-mi', 'contacto'];
    const scrollPosition = window.scrollY + 100;

    let current = 'banner';
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + height - 50) {
          current = section;
          break;
        }
      }
    }
    
    setActiveSection(current);
  }, []);

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 16);
    window.addEventListener("scroll", debouncedScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [handleScroll]);

  return (
    <div className="text-white scroll-smooth selection:bg-cyan-500 selection:text-black min-h-screen overflow-hidden">
      {/* Fondo tecnológico COMPLETO */}
      <BackgroundEffects />
      
      {/* Contenido principal */}
      <div className="relative z-10">
        <Navbar scrolled={scrolled} activeSection={activeSection} />
        <main className="">
          
          {/* BANNER - con gradiente específico */}
          <div className="relative">
            <Banner />
          </div>
          
          {/* SECCIONES PRINCIPALES - con transparencia para mostrar el fondo */}
          <div className="relative bg-gradient-to-b from-blue-800/10 via-pink-800/20 to-cyan-900/10">
            <Servicios />
            <Proyectos />
            <Estudios />
            <SobreMi />
            <Contacto />
          </div>
          
      
          
        </main>
        
        {/* FOOTER */}
        <div className="relative">
          <Footer />
        </div>
      </div>
    </div>
  );
}