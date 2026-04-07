import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, ExternalLink, ChevronDown, X, ZoomIn } from "lucide-react";

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

export default function Estudios({ isMobile }) {
  const [expanded, setExpanded] = useState(null);
  const [modalImg, setModalImg] = useState(null);
  const [isZooming, setIsZooming] = useState(false);

  // Variantes de animación para el modal
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } }
  };

  const modalVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      y: 50
    },
    visible: { 
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.3
      }
    },
    exit: { 
      scale: 0.8,
      opacity: 0,
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  // Variantes para el zoom de la imagen dentro del modal
  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        delay: 0.1,
        type: "spring",
        damping: 20,
        stiffness: 400
      }
    }
  };

  // Efecto hover para el botón de zoom en la tarjeta
  const buttonVariants = {
    rest: { scale: 1, backgroundColor: "rgba(0,0,0,0.6)" },
    hover: { 
      scale: 1.1, 
      backgroundColor: "rgba(0,150,255,0.8)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="estudios" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER SIMPLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">
            Estudios <span className="text-cyan-400">y Certificaciones</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Formación y aprendizaje continuo
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {estudios.map((e, i) => (
            <motion.div
              key={i}
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900/80 rounded-xl overflow-hidden border border-white/10 flex flex-col hover:border-cyan-400/50 transition-all duration-300"
            >
              {/* IMG con efecto hover */}
              <div className="relative h-40 bg-gray-800 group overflow-hidden">
                <motion.img
                  src={e.imgSrc}
                  alt={e.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Overlay oscuro en hover */}
                <motion.div 
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <motion.button
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setModalImg(e.imgSrc)}
                    className="p-2 bg-black/60 rounded-full text-white hover: cursor-pointer"
                  >
                    <ZoomIn size={20} />
                  </motion.button>
                </motion.div>

                {/* Badge de año flotante */}
                <motion.div 
                  className="absolute top-2 left-2 bg-black/70 text-cyan-400 text-xs px-2 py-1 rounded backdrop-blur-sm"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {e.year}
                </motion.div>
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col">
                <h3 className="text-white font-bold mb-2">
                  {e.title}
                </h3>

                <p className="text-gray-400 text-sm mb-2">
                  {e.description}
                </p>

                <span className="text-xs text-cyan-400 mb-2">
                  {e.duration}
                </span>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {e.skills.slice(0, 3).map((s, idx) => (
                    <motion.span 
                      key={s} 
                      className="text-xs text-gray-300 bg-white/5 px-2 py-1 rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>

                {/* EXPAND */}
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="text-cyan-400 text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 hover: cursor-pointer"
                >
                  {expanded === i ? "Ocultar" : "Ver más"}
                  <motion.div
                    animate={{ rotate: expanded === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={14} />
                  </motion.div>
                </button>

                {/* EXTRA */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={isMobile ? false : { opacity: 0, height: 0 }}
                      animate={isMobile ? {} : { opacity: 1, height: "auto" }}
                      exit={isMobile ? {} : { opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <motion.p 
                        className="text-gray-300 text-sm mt-2"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {e.extra}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL CON EFECTOS AVANZADOS */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            key="modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setModalImg(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar con efecto */}
              <motion.button
                className="hover: cursor-pointer absolute -top-11 right-0 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                onClick={() => setModalImg(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              {/* Imagen con zoom al entrar */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="relative overflow-hidden rounded-xl shadow-2xl"
              >
                <motion.img
                  src={modalImg}
                  alt="Vista ampliada"
                  className="w-full h-auto max-h-[85vh] object-contain"
                  initial={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Efecto de brillo en la imagen */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Indicador de click para cerrar */}
              <motion.p
                className="text-center text-gray-400 text-sm mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Click fuera de la imagen para cerrar
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}