import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Lock, Wrench } from "lucide-react";
import { useState, useMemo } from "react";

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
    title: "CRM/ERP Gestión Automotriz Integral",
    description: "Sistema completo para concesionarias con gestión multi-nivel, control de taller, inventario inteligente y reportes analytics en tiempo real.",
    imgSrc: "/CRM.png",
    url: "#",
    technologies: ["React", "Firebase", "Node.js", "Material-UI", "Chart.js", "JWT Auth", "Roles", "Inventory"],
    category: "Enterprise Software", 
    status: "live",
    featured: true
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
    title: "Landing Page Corporativa - Empresa Textil",
    description: "Sitio web corporativo moderno con diseño orientado a conversión, optimizado para SEO y experiencia de usuario.",
    imgSrc: "/escher.png", // o el nombre de tu imagen
    url: "https://eschercyt.com.ar/",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "SEO", "Responsive"],
    category: "Web Development",
    status: "live",
    featured: false
},
  /* {
    title: "Store de Productos Deportivos",
    description: "Plataforma de compras de productos deportivos con React y Firebase.",
    imgSrc: "/ACEPADELSTORE.png",
    url: "https://e-commerceacepadel.netlify.app/",
    technologies: ["React", "Firebase", "E-commerce", "Auth"],
    category: "E-commerce",
    status: "live",
    featured: false
  }, */
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

// Memoizar componentes para evitar re-renders
const StatusBadge = ({ status }) => {
  const statusConfig = useMemo(() => {
    switch (status) {
      case "live":
        return { icon: <Eye className="w-3 h-3" />, text: "En Línea", color: "text-green-400" };
      case "development":
        return { icon: <Wrench className="w-3 h-3" />, text: "En Desarrollo", color: "text-yellow-400" };
      case "demo":
        return { icon: <Lock className="w-3 h-3" />, text: "Demo Privado", color: "text-blue-400" };
      default:
        return { icon: <Eye className="w-3 h-3" />, text: "En Proceso", color: "text-gray-400" };
    }
  }, [status]);

  return (
    <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/20">
      <span className={statusConfig.color}>{statusConfig.icon}</span>
      <span className="text-white text-xs font-medium">{statusConfig.text}</span>
    </div>
  );
};

const ProjectCard = ({ proyecto, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -3 }}
      className="group relative bg-gray-900/80 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-200 h-full flex flex-col"
    >
      {/* Image Container responsive */}
      <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-800">
        <img
          src={proyecto.imgSrc}
          alt={proyecto.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            imageLoaded ? 'group-hover:scale-102' : 'scale-100'
          }`}
        />
        
        <StatusBadge status={proyecto.status} />

        {/* Action Buttons - responsive sizing */}
        {proyecto.url && proyecto.url !== "#" && (
          <motion.a
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1 sm:p-1.5 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white/30"
            title="Ver proyecto"
            whileHover={{ scale: 1.1 }}
          >
            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </motion.a>
        )}

        {/* Category Badge responsive */}
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-medium whitespace-nowrap">
            {proyecto.category}
          </span>
        </div>
      </div>

      {/* Content responsive */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2 mb-1 sm:mb-2">
          {proyecto.title}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed flex-1 line-clamp-3">
          {proyecto.description}
        </p>

        {/* Technologies responsive */}
        <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
          {proyecto.technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
          {proyecto.technologies.length > 3 && (
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
              +{proyecto.technologies.length - 3}
            </span>
          )}
        </div>

        {/* CTA Button responsive */}
        <motion.a
          href={proyecto.url}
          target={proyecto.url !== "#" ? "_blank" : undefined}
          rel={proyecto.url !== "#" ? "noopener noreferrer" : undefined}
          whileHover={{ scale: proyecto.url !== "#" ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center gap-1 sm:gap-2 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg sm:rounded-xl font-medium transition-all text-xs sm:text-sm ${
            proyecto.url !== "#" 
              ? "bg-cyan-600 text-white hover:bg-cyan-500" 
              : "bg-white/5 border border-white/10 text-gray-400 cursor-not-allowed"
          }`}
        >
          {proyecto.url !== "#" ? (
            <>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Ver Proyecto</span>
            </>
          ) : (
            <>
              <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Solicitar Demo</span>
            </>
          )}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Simplificar fondos decorativos */}
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:80px_80px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-2 sm:mb-3"
          >
            Mi Trabajo
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Proyectos <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Destacados</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-400 max-w-xl mx-auto px-4">
            Una selección de mis trabajos más recientes y desafiantes
          </p>
        </motion.div>

        {/* Projects Grid - TOTALMENTE RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {proyectos.map((proyecto, index) => (
            <ProjectCard 
              key={proyecto.title} 
              proyecto={proyecto} 
              index={index} 
            />
          ))}
        </div>

        {/* CTA Section responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="bg-cyan-500/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-cyan-500/20">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 max-w-md mx-auto">
              Trabajemos juntos en tu próximo proyecto.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-cyan-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-cyan-500 transition-all duration-200 text-xs sm:text-sm"
            >
              <span>Iniciar Proyecto</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}