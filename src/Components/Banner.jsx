import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.section
      id="banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4
                 bg-gradient-to-b from-blue-100 via-white to-white
                 dark:from-blue-900 dark:via-black dark:to-black
                 transition-colors duration-500"
    >
      <header className="w-full max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          ¡Hola! Soy{" "}
          <span className="text-cyan-600 dark:text-cyan-400">Lucas Viollaz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-6"
        >
          Desarrollador Freelancer enfocado en crear experiencias digitales modernas,
          rápidas y atractivas.
        </motion.p>
      </header>

      <motion.a
        href="#proyectos"
        aria-label="Ir a la sección de proyectos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="bg-cyan-500 dark:bg-cyan-600 text-black dark:text-white font-semibold px-6 py-3 rounded-full transition duration-300"
      >
        Ver Proyectos
      </motion.a>

      <motion.svg
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-12 h-12 text-cyan-400 dark:text-cyan-400 mx-auto absolute bottom-24 hidden md:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </motion.svg>
    </motion.section>
  );
}