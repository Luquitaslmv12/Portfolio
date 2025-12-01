import { motion } from "framer-motion";
import { Code2, Sparkles, ArrowDown, Mouse, Download } from "lucide-react";

export default function Banner() {
  const scrollToProjects = () => {
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-lucas-viollaz.pdf';
    link.download = 'Lucas-Viollaz-CV.pdf';
    link.click();
  };

  // Texto animado tipo máquina de escribir
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section
      id="banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Elementos decorativos de fondo - Responsive */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
      
      {/* Partículas flotantes - Responsive */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full blur-sm opacity-40 sm:opacity-60"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        className="absolute top-1/3 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-blue-400 rounded-full blur-sm opacity-30 sm:opacity-40"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        className="absolute bottom-1/4 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full blur-sm opacity-25 sm:opacity-50"
      />

      {/* Gradientes de fondo - Responsive */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        {/* Badge de bienvenida - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8"
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
          <span className="text-xs sm:text-sm text-gray-300">Bienvenido a mi portfolio</span>
        </motion.div>

        {/* Título principal - Responsive */}
        <motion.div className="mb-6 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 px-2"
          >
            Lucas{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ 
                backgroundSize: "200% 100%" 
              }}
            >
              Viollaz2
            </motion.span>
          </motion.h1>

          {/* Subtítulo animado - Responsive */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center px-2"
          >
            <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-cyan-400" />
              <motion.span
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="whitespace-nowrap"
              >
                Full Stack
              </motion.span>
              <motion.span
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-cyan-400 font-semibold whitespace-nowrap"
              >
                Developer
              </motion.span>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2"
            >
              Creo <span className="text-cyan-400 font-semibold">experiencias digitales</span>{" "}
              innovadoras con código limpio, diseño moderno y{" "}
              <span className="text-blue-400 font-semibold">tecnologías de vanguardia</span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Botones de acción - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-2"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm md:text-base w-full xs:w-auto justify-center"
          >
            <span>Explorar Proyectos</span>
            <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-y-0.5 transition-transform" />
          </motion.button>

          <motion.button
            onClick={downloadCV}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="group px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-white/15 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm md:text-base w-full xs:w-auto justify-center"
          >
            <Download className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span>Descargar CV</span>
          </motion.button>

          
        </motion.div>

        {/* Stats o tecnologías destacadas - Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="grid grid-cols-2 xs:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto px-2"
        >
          {[
            { number: "2+", label: "Años Exp" },
            { number: "15+", label: "Proyectos" },
            { number: "100%", label: "Dedicación" },
            { number: "Ágil", label: "Comunicación" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="text-center p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-colors"
            >
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator mejorado - Responsive */}
      <motion.div
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 cursor-pointer group"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
        >
          <Mouse className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          className="text-gray-400 text-xs sm:text-sm group-hover:text-cyan-300 transition-colors hidden xs:block"
        >
          Scroll para explorar
        </motion.div>
      </motion.div>
    </motion.section>
  );
}