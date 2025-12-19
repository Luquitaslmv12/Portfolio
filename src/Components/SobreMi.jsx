import { motion } from "framer-motion";
import { Quote, Sparkles, Target, Heart, Code2, Users, Lightbulb } from "lucide-react";

export default function SobreMi() {

  const skills = [
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Enfocado en Resultados",
      color: "text-cyan-400"
    },
  
    {
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Desarrollo Continuo",
      color: "text-blue-400"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Trabajo en Equipo",
      color: "text-green-400"
    },
    {
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Soluciones Innovadoras",
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-3 sm:px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl max-w-4xl w-full border border-cyan-500/20 relative overflow-hidden"
      >
        {/* Elementos decorativos de fondo - Responsive */}
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-blue-500/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          {/* Columna de la imagen - Responsive */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-shrink-0 order-2 lg:order-1 flex flex-col items-center"
          >
            <div className="relative">
              <img
                src="/Yo2.png"
                alt="Lucas Viollaz"
                className="w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl sm:rounded-2xl object-cover border-3 sm:border-4 border-cyan-500 shadow-lg sm:shadow-xl md:shadow-2xl shadow-cyan-500/20"
              />
              <motion.div
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-cyan-500 text-white p-1.5 sm:p-2 rounded-full shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </motion.div>
            </div>
            
            {/* Info adicional debajo de la foto - Responsive */}
            <div className="mt-4 sm:mt-6 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">Lucas Viollaz</h3>
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
                <span className="bg-cyan-500/20 px-2 py-1 sm:px-3 sm:py-1 rounded-full whitespace-nowrap">Full Stack Developer</span>
                <span className="bg-blue-500/20 px-2 py-1 sm:px-3 sm:py-1 rounded-full whitespace-nowrap">Problem Solver</span>
              </div>
            </div>
          </motion.div>

          {/* Columna del contenido - Responsive */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-4 sm:mb-6"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400 mx-auto lg:mx-0 mb-2 sm:mb-3 md:mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 sm:mb-6">
                Sobre Mí
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 text-justify lg:text-left"
            >
              "Me considero una persona entusiasta que disfruta enfrentar nuevos
              desafíos. Cada día me esfuerzo por aprender y mejorar mis habilidades
              para aportar siempre lo mejor. Trabajo de manera responsable y me adapto
              con facilidad tanto al trabajo en equipo como al desarrollo individual."
            </motion.p>

            {/* Habilidades/Features destacadas - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`${skill.color} transition-transform group-hover:scale-110`}>
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base whitespace-nowrap">{skill.text}</span>
                </motion.div>
              ))}
            </motion.div>

          
          </div>
        </div>

        {/* Elemento decorativo adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500/10 rounded-full blur-sm"
        />
      </motion.div>
    </section>
  );
}