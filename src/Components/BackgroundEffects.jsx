import { motion } from "framer-motion";
import { useMemo } from "react";

// Hook para detectar reduced motion
const useReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// PARTICULAS OPTIMIZADAS
const StaticParticles = ({ isMobile, reducedMotion }) => {
  const particles = useMemo(() => {
    if (isMobile || reducedMotion) return [];

    const particleCount = 20; // reducido (antes 25)

    return Array.from({ length: particleCount }, (_, i) => {
      return {
        id: i,
        size: 2 + Math.random() * 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: 0.3 + Math.random() * 0.3,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 4,
      };
    });
  }, [isMobile, reducedMotion]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

// SCANNER OPTIMIZADO
const StaticScanner = ({ isMobile, reducedMotion }) => {
  if (isMobile || reducedMotion) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        animate={{ y: ["-10vh", "110vh"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 6,
        }}
      />
    </motion.div>
  );
};

// BACKGROUND FINAL
const BackgroundEffects = ({ isMobile }) => {
  const reducedMotion = useReducedMotion();

  return (
    <>
      {/* Fondo base (liviano) */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 pointer-events-none" />

      {/* Grid (OK en mobile) */}
      <div className="fixed inset-0 bg-grid-custom pointer-events-none opacity-40" />

      {/* Gradientes (SIN blur en mobile) */}
      {!isMobile && !reducedMotion && (
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl translate-x-1/3 translate-y-1/3" />
        </div>
      )}

      {/* Partículas */}
      <StaticParticles isMobile={isMobile} reducedMotion={reducedMotion} />

      {/* Scanner */}
      <StaticScanner isMobile={isMobile} reducedMotion={reducedMotion} />

      {/* Línea suave (solo desktop) */}
      {!isMobile && !reducedMotion && (
        <div className="fixed inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(6,182,212,0.08)_50%,transparent_100%)] animate-pulse" />
        </div>
      )}
    </>
  );
};

export default BackgroundEffects;