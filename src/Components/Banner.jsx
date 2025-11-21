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
    // Aquí puedes agregar la lógica para descargar tu CV
    const link = document.createElement('a');
    link.href = '/cv-lucas-viollaz.pdf'; // Asegúrate de tener tu CV en public/
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
    y: [0, -20, 0],
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-blue-900/20 to-purple-900/10"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Partículas flotantes */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full blur-sm opacity-60"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full blur-sm opacity-40"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full blur-sm opacity-50"
      />

      {/* Gradientes de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge de bienvenida */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-gray-300">Bienvenido a mi portfolio</span>
        </motion.div>

        {/* Título principal */}
        <motion.div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
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
              Viollaz
            </motion.span>
          </motion.h1>

          {/* Subtítulo animado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3 text-2xl md:text-3xl text-gray-300 mb-4">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <motion.span
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                Full Stack
              </motion.span>
              <motion.span
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-cyan-400 font-semibold"
              >
                Developer
              </motion.span>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Creo <span className="text-cyan-400 font-semibold">experiencias digitales</span>{" "}
              innovadoras con código limpio, diseño moderno y{" "}
              <span className="text-blue-400 font-semibold">tecnologías de vanguardia</span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-3"
          >
            <span>Explorar Proyectos</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={downloadCV}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
          >
            <Download className="w-5 h-5" />
            <span>Descargar CV</span>
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-cyan-400 font-semibold rounded-2xl hover:text-cyan-300 transition-colors duration-300 underline underline-offset-4"
          >
            Contactar Ahora
          </motion.button>
        </motion.div>

        {/* Stats o tecnologías destacadas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { number: "2+", label: "Años Exp" },
            { number: "50+", label: "Proyectos" },
            { number: "100%", label: "Dedicación" },
            { number: "24/7", label: "Disponible" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-colors"
            >
              <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator mejorado */}
      <motion.div
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
        >
          <Mouse size={24} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          className="text-gray-400 text-sm group-hover:text-cyan-300 transition-colors"
        >
          Scroll para explorar
        </motion.div>
      </motion.div>
    </motion.section>
  );
}