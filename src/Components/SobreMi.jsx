import { motion } from "framer-motion";
import { Quote } from "lucide-react"; // Asegurate de tener lucide-react instalado

export default function SobreMi() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 py-10 px-6 rounded-2xl shadow-xl max-w-3xl mx-auto flex flex-col items-center"
    >
      <Quote className="w-10 h-10 text-indigo-500 mb-4" />

      <img
        src="/YO.jpg" // Reemplazá esto con tu imagen real (por ejemplo en public/)
        alt="Mi foto"
        className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 shadow-md mb-4"
      />

      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        Sobre mí
      </h2>

      <p className="text-center text-lg text-gray-600 dark:text-gray-300 italic max-w-xl">
        "Me considero una persona entusiasta que disfruta enfrentar nuevos desafíos. Cada día me esfuerzo por aprender y mejorar mis habilidades
        para aportar siempre lo mejor. Trabajo de manera responsable y me adapto con facilidad tanto al trabajo en equipo como al desarrollo individual."
      </p>
    </motion.section>
  );
}