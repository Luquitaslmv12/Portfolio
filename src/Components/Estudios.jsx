import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, ExternalLink, ChevronDown, BookOpen, GraduationCap } from "lucide-react";

const estudios = [
  {
    title: "Técnico Superior en Programación",
    description: "Carrera de grado en la Universidad Tecnológica Nacional",
    extra: "Primeros pasos en la programación, aprobando todas las materias en tiempo y forma. Práctica final en grupo aprobada con una nota final de 8",
    imgSrc: "/TITULO.jpeg",
    year: "2018",
    type: "universidad",
    duration: "3 años",
    skills: ["Programación", "Algoritmos", "Bases de Datos", "Ingeniería de Software"]
  },
  {
    title: "Curso REACT JS",
    description: "Curso didáctico a distancia en la plataforma CODERHOUSE",
    extra: "Uso de Visual Studio Code, React + Vite como framework, Firebase como Base de Datos No relacional. Uso de librerías externas como Bootstrap, React Router, entre otras.",
    imgSrc: "/REACT.png",
    year: "2024",
    type: "curso",
    duration: "4 meses",
    skills: ["React", "Firebase", "Vite", "Tailwind", "React Router"]
  },
  {
    title: "Certificación SAP ABAP",
    description: "Curso de introducción y aplicación real de sistemas",
    extra: "Curso dictado por parte de DL Consultores",
    imgSrc: "/ABAP.jpg",
    year: "2024",
    type: "certificación",
    duration: "3 meses",
    skills: ["SAP ABAP", "Sistemas ERP", "Programación Empresarial"]
  },
  {
    title: "Jornadas Informáticas",
    description: "Participación en la 4ta jornada binacional de Informática y Comunicaciones",
    extra: "Organizada por la comisión técnica mixta de Salto Grande",
    imgSrc: "/JOBIC.jpg",
    year: "2015",
    type: "evento",
    duration: "2 días",
    skills: ["Networking", "Tendencias TI", "Innovación Tecnológica"]
  },
  {
    title: "Aprendizaje Continuo",
    description: "Autodidacta en tecnologías modernas y desarrollo profesional",
    extra: "React, Firebase, Tailwind, Next.js, testing, Python, Unity 3D, patrones de diseño. Manteniéndome actualizado con las últimas tendencias del desarrollo web y mobile.",
    imgSrc: "/PLATAFORMAS.png",
    year: "Desde 2021",
    type: "autodidacta",
    duration: "Continuo",
    skills: ["React/Next.js", "Firebase", "Tailwind", "Python", "Unity", "Patrones de Diseño"]
  },
];

export default function Estudios() {
  const [expanded, setExpanded] = useState(null);
  const [modalImg, setModalImg] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "universidad":
        return <GraduationCap className="w-5 h-5" />;
      case "curso":
        return <BookOpen className="w-5 h-5" />;
      case "certificación":
        return <Award className="w-5 h-5" />;
      case "evento":
        return <Calendar className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "universidad":
        return "border-blue-400 text-blue-400";
      case "curso":
        return "border-green-400 text-green-400";
      case "certificación":
        return "border-purple-400 text-purple-400";
      case "evento":
        return "border-orange-400 text-orange-400";
      default:
        return "border-gray-400 text-gray-400";
    }
  };

  const getGradientColor = (type) => {
    switch (type) {
      case "universidad":
        return "group-hover:shadow-blue-500/20";
      case "curso":
        return "group-hover:shadow-green-500/20";
      case "certificación":
        return "group-hover:shadow-purple-500/20";
      case "evento":
        return "group-hover:shadow-orange-500/20";
      default:
        return "group-hover:shadow-cyan-500/20";
    }
  };

  return (
    <section id="estudios" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4"
          >
            <Award className="w-4 h-4" />
            Mi Formación
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Estudios & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certificaciones</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mi trayectoria educativa y compromiso con el aprendizaje continuo
          </p>
        </motion.div>

        {/* Estudios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {estudios.map((estudio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 ${getGradientColor(estudio.type)} hover:shadow-2xl hover:scale-105`}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={estudio.imgSrc}
                  alt={estudio.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Type Badge */}
                <div className={`absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm border ${getTypeColor(estudio.type)} text-xs font-medium`}>
                  {getTypeIcon(estudio.type)}
                  <span className="capitalize">{estudio.type}</span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 text-white text-xs">
                  <Calendar className="w-3 h-3" />
                  {estudio.year}
                </div>

                {/* View Image Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setModalImg(estudio.imgSrc)}
                  className="absolute bottom-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                  title="Ver certificado"
                >
                  <ExternalLink size={16} />
                </motion.button>
              </div>

              {/* Content - CONTENIDO SIEMPRE VISIBLE */}
              <div className="p-6 relative z-10 bg-gray-900/80">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {estudio.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {estudio.description}
                </p>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-cyan-400 mb-4">
                  <span>⏱️ {estudio.duration}</span>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {estudio.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {estudio.skills.length > 3 && (
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                      +{estudio.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-cyan-200 text-sm leading-relaxed mb-3">
                        {estudio.extra}
                      </p>
                      
                      {/* Full Skills List */}
                      <div className="flex flex-wrap gap-1">
                        {estudio.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expand Button */}
                <motion.button
                  onClick={() => toggleExpand(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 mt-4 rounded-xl bg-white/5 border border-white/10 text-cyan-400 hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                >
                  <span>{expanded === index ? "Ver menos" : "Ver detalles"}</span>
                  <motion.span
                    animate={{ rotate: expanded === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de imagen mejorado */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImg(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "tween", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImg}
                alt="Certificado ampliado"
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-4 -right-4 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                onClick={() => setModalImg(null)}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}