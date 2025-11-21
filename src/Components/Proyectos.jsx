import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Lock, Wrench } from "lucide-react";

const proyectos = [
  {
    title: "Responsive Landing Page - SPA",
    description: "Una app web moderna con React y Tailwind CSS.",
    imgSrc: "/minera.jpg",
    url: "https://www.mineradellitoral.com.ar",
    technologies: ["React", "Tailwind CSS", "Vite", "SPA"],
    category: "Web Development",
    status: "live",
    featured: false
  },
  {
    title: "Store de Productos Deportivos",
    description: "Plataforma de compras de productos deportivos con React y Firebase.",
    imgSrc: "/ACEPADELSTORE.png",
    url: "https://e-commerceacepadel.netlify.app/",
    technologies: ["React", "Firebase", "E-commerce", "Auth"],
    category: "E-commerce",
    status: "live",
    featured: false
  },
  {
    title: "Gestión de Flota de Camiones",
    description: "Aplicación de gestión con autenticación hecha con React + Vite y Firebase.",
    imgSrc: "/gestion-flota.png",
    url: "#",
    technologies: ["React", "Firebase", "Dashboard", "Auth System"],
    category: "Business App",
    status: "demo",
    featured: false
  },
  {
    title: "App de Gestión de Inventario",
    description: "Aplicación de gestión de inventario en Android Studio.",
    imgSrc: "/Android.png",
    url: "#",
    technologies: ["Android Studio", "Java", "SQLite", "Mobile"],
    category: "Mobile App",
    status: "development",
    featured: false
  },
];

export default function Proyectos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "live":
        return <Eye className="w-3 h-3 text-green-400" />;
      case "development":
        return <Wrench className="w-3 h-3 text-yellow-400" />;
      case "demo":
        return <Lock className="w-3 h-3 text-blue-400" />;
      default:
        return <Eye className="w-3 h-3 text-gray-400" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "live":
        return "En Línea";
      case "development":
        return "En Desarrollo";
      case "demo":
        return "Demo Privado";
      default:
        return "En Proceso";
    }
  };

  return (
    <section id="proyectos" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-3"
          >
            Mi Trabajo
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Destacados</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Una selección de mis trabajos más recientes y desafiantes
          </p>
        </motion.div>

        {/* Projects Grid - Tamaño corregido */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
        >
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-300 h-full flex flex-col"
            >
              {/* Project Image Container - Tamaño fijo */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proyecto.imgSrc}
                  alt={proyecto.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay - Solo en hover y más sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge - Siempre visible */}
                <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/20">
                  {getStatusIcon(proyecto.status)}
                  <span className="text-white text-xs font-medium">
                    {getStatusText(proyecto.status)}
                  </span>
                </div>

                {/* Action Buttons - Aparecen en hover */}
                <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {proyecto.url && proyecto.url !== "#" && (
                    <motion.a
                      href={proyecto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-white hover:bg-white/30 transition-all"
                      title="Ver proyecto"
                    >
                      <ExternalLink size={14} />
                    </motion.a>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-white hover:bg-white/30 transition-all"
                    title="Código fuente"
                  >
                    <Github size={14} />
                  </motion.button>
                </div>

                {/* Category Badge - Siempre visible */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 rounded-full bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-medium">
                    {proyecto.category}
                  </span>
                </div>
              </div>

              {/* Project Content - Contenido siempre visible */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {proyecto.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-3 leading-relaxed flex-1">
                  {proyecto.description}
                </p>

                {/* Technologies - Más compacto */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {proyecto.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href={proyecto.url}
                  target={proyecto.url !== "#" ? "_blank" : undefined}
                  rel={proyecto.url !== "#" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: proyecto.url !== "#" ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium transition-all text-sm ${
                    proyecto.url !== "#" 
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25" 
                      : "bg-white/5 border border-white/10 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {proyecto.url !== "#" ? (
                    <>
                      <ExternalLink size={14} />
                      <span>Ver Proyecto</span>
                    </>
                  ) : (
                    <>
                      <Lock size={14} />
                      <span>Próximamente</span>
                    </>
                  )}
                </motion.a>
              </div>

              {/* Efecto de borde sutil en hover - SIN OCULTAR CONTENIDO */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/30 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Más compacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
            <h3 className="text-xl font-bold text-white mb-3">
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-gray-400 mb-4 text-sm max-w-md mx-auto">
              Trabajemos juntos en tu próximo proyecto. Cuéntame tus ideas y hagámoslas realidad.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm"
            >
              <span>Iniciar Proyecto</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}