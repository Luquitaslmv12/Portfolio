import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const estudios = [
  {
    title: "Desarrollo Web Full Stack",
    description: "Curso intensivo en JavaScript, React, Node.js y bases de datos.",
    extra: "Incluye proyectos reales, Git, REST APIs, MongoDB y despliegue en la nube.",
    imgSrc: "/fullstack.jpg",
    year: "2023",
  },
  {
    title: "Ingeniería en Sistemas",
    description: "Carrera universitaria con enfoque en arquitectura de software.",
    extra: "Materias como Estructuras de Datos, Redes, Seguridad Informática y más.",
    imgSrc: "https://via.placeholder.com/400x300?text=Ingeniería",
    year: "2021",
  },
  {
    title: "Certificación UX/UI Design",
    description: "Diseño de interfaces centradas en el usuario.",
    extra: "Herramientas: Figma, Adobe XD, pruebas de usabilidad, wireframes.",
    imgSrc: "/uxui.jpg",
    year: "2020",
  },
  {
    title: "Autodidacta",
    description: "Aprendizaje continuo en tecnologías web modernas.",
    extra: "React, Firebase, Tailwind, Next.js, testing, patrones de diseño.",
    imgSrc: "https://via.placeholder.com/400x300?text=Autodidacta",
    year: "Desde 2018",
  },
]

export default function Estudios() {
  const [expanded, setExpanded] = useState(null)
  const [modalImg, setModalImg] = useState(null)

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index)
  }

  return (
    <section id="estudios" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-16">Certificados & Estudios</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {estudios.map(({ title, description, imgSrc, year, extra }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/30 transition-shadow duration-300"
            >
              <div
                className="overflow-hidden cursor-zoom-in"
                onClick={() => setModalImg(imgSrc)}
              >
                <img
                  src={imgSrc}
                  alt={title}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h4 className="text-2xl font-semibold text-white mb-1 transition duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_6px_cyan]">
                  {title}
                </h4>
                <p className="text-sm text-gray-400 mb-2">{year}</p>
                <p className="text-gray-300 text-base">{description}</p>

                {expanded === i && (
                  <p className="text-sm text-cyan-200 mt-2">{extra}</p>
                )}

                <button
                  onClick={() => toggleExpand(i)}
                  className="self-start mt-4 flex items-center gap-1 text-sm text-cyan-400 transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_cyan] focus:outline-none"
                >
                  {expanded === i ? "Ver menos" : "Ver más"}
                  <motion.span
                    animate={{ rotate: expanded === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    ▼
                  </motion.span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de imagen */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImg(null)}
          >
            <motion.img
              src={modalImg}
              alt="Certificado ampliado"
              className="max-w-3xl w-full max-h-[80vh] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-8 text-white text-3xl font-bold"
              onClick={() => setModalImg(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}