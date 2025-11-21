import { motion } from "framer-motion";
import { Quote, Sparkles, Target, Heart } from "lucide-react";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-8 rounded-3xl shadow-2xl max-w-4xl w-full border border-cyan-500/20 relative overflow-hidden"
      >
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          {/* Columna de la imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <img
                src="/YO.jpg"
                alt="Lucas Viollaz"
                className="w-48 h-48 rounded-2xl object-cover border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20"
              />
              <motion.div
                className="absolute -top-2 -right-2 bg-cyan-500 text-white p-2 rounded-full shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Sparkles size={20} />
              </motion.div>
            </div>
            
            {/* Info adicional debajo de la foto */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Lucas Viollaz</h3>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-300">
                <span className="bg-cyan-500/20 px-3 py-1 rounded-full">Developer</span>
                <span className="bg-blue-500/20 px-3 py-1 rounded-full">Problem Solver</span>
              </div>
            </div>
          </motion.div>

          {/* Columna del contenido */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <Quote className="w-12 h-12 text-cyan-400 mx-auto lg:mx-0 mb-4" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Sobre Mí
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed mb-8"
            >
              "Me considero una persona entusiasta que disfruta enfrentar nuevos
              desafíos. Cada día me esfuerzo por aprender y mejorar mis habilidades
              para aportar siempre lo mejor. Trabajo de manera responsable y me adapto
              con facilidad tanto al trabajo en equipo como al desarrollo individual."
            </motion.p>

            {/* Habilidades/Features destacadas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <Target className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300">Enfocado en Resultados</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <Heart className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300">Apasionado por el Código</span>
              </div>
            </motion.div>

            {/* CTA adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8"
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <span>Hablemos de tu proyecto</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}