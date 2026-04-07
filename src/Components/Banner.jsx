import { motion } from "framer-motion";
import { Code2, Sparkles, ArrowDown, Mouse, Download } from "lucide-react";
import LightPillar from "../Snippets/LightPillar";

export default function Banner({ isMobile }) {
  const scrollToProjects = () => {
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Lucas-Viollaz.pdf";
    link.download = "Lucas-Viollaz-CV.pdf";
    link.click();
  };

  // Animaciones SOLO desktop
  const floatingAnimation = isMobile
    ? {}
    : {
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        },
      };

  return (
    <section
      id="banner"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🔥 LIGHT PILLAR SOLO DESKTOP */}
      <div className="absolute inset-0 w-full h-full">
  {isMobile ? (
    // 🔥 FALLBACK MOBILE (ultra liviano)
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/3 left-1/2 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
    </div>
  ) : (
    // 💻 DESKTOP → WebGL
    <LightPillar
      topColor="#0c08f5"
      bottomColor="#d43eda"
      intensity={1.0}
      glowAmount={0.001}
      pillarWidth={5}
      pillarHeight={0.3}
      pillarRotation={90}
      staticMode={false}
      rotationSpeed={0.20}
      noiseIntensity={0.3}
      mixBlendMode="normal"
      pauseWhenNotVisible={true}
      mobileOptimized={false}
    />
  )}
</div>

      

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-gray-100">Bienvenido a mi portfolio</span>
        </div>

        {/* Título */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
          Lucas{" "}
          <span className="text-cyan-400">
            Viollaz
          </span>
        </h1>

        {/* Subtítulo */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-xl sm:text-2xl text-gray-100 mb-3">
            <Code2 className="w-6 h-6 text-cyan-400" />
            <span>Full Stack</span>
            <span className="text-cyan-400 font-semibold">Developer</span>
          </div>

          <p className="text-sm sm:text-lg text-gray-100 max-w-xl mx-auto">
            Creo <span className="text-blue-400 font-semibold">experiencias digitales</span>{" "}
            modernas y eficientes
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 bg-cyan-600 text-white rounded-xl"
          >
            Explorar Proyectos
          </button>

          <button
            onClick={downloadCV}
            className="px-6 py-3 border border-white/20 rounded-xl"
          >
            Descargar CV
          </button>
        </div>
      </div>

      {/* Scroll indicator SOLO desktop */}
      {!isMobile && (
        <motion.div
          onClick={scrollToProjects}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Mouse className="w-5 h-5 text-cyan-400" />
        </motion.div>
      )}
    </section>
  );
}