import { motion } from "framer-motion";
import { ExternalLink, Lock, Eye, Wrench, Smartphone, DollarSign, TrendingUp } from "lucide-react";

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
    imgSrc: "/escher.png",
    url: "https://eschercyt.com.ar/",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "SEO", "Responsive"],
    category: "Web Development",
    status: "live",
    featured: false
  },
  {
    title: "FinanceTracker - App Móvil de Gastos",
    description: "Aplicación móvil nativa para gestión de finanzas personales con estadísticas en tiempo real y sincronización en la nube.",
    imgSrc: "/Gastos-App2.png", // Cambia por la ruta de tu imagen
    url: "#", // URL de la app si está publicada
    technologies: ["React Native", "Expo", "Firebase", "RealmDB", "Chart Kit", "AsyncStorage", "Context API"],
    category: "Mobile App",
    status: "live", // Cambia a "live" si ya está publicada
    featured: true, // Marcar como destacado
    // Campos adicionales específicos para esta app
    metrics: {
      downloads: "Beta Testing",
      rating: "4.8",
      features: ["Control de gastos", "Presupuestos", "Gráficos interactivos", "Exportación de datos"]
    }
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

// Badge mejorado con más opciones
const StatusBadge = ({ status }) => {
  const config = {
    live: { icon: <Eye size={12} />, text: "En Línea", color: "text-green-400", bg: "bg-green-500/20" },
    development: { icon: <Wrench size={12} />, text: "En Desarrollo", color: "text-yellow-400", bg: "bg-yellow-500/20" },
    demo: { icon: <Lock size={12} />, text: "Demo Privado", color: "text-blue-400", bg: "bg-blue-500/20" },
    beta: { icon: <Smartphone size={12} />, text: "Beta Testing", color: "text-purple-400", bg: "bg-purple-500/20" }
  };

  const s = config[status] || config.development;

  return (
    <div className={`absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full backdrop-blur-sm ${s.bg} border border-white/10`}>
      <span className={s.color}>{s.icon}</span>
      <span className="text-white text-xs">{s.text}</span>
    </div>
  );
};

// Componente de métricas para proyectos destacados
const ProjectMetrics = ({ metrics }) => {
  if (!metrics) return null;
  
  return (
    <div className="mt-2 pt-2 border-t border-white/10">
      <div className="flex items-center gap-3 text-xs">
        {metrics.downloads && (
          <span className="text-green-400 flex items-center gap-1">
            <TrendingUp size={10} />
            {metrics.downloads}
          </span>
        )}
        {metrics.rating && (
          <span className="text-yellow-400">
            ⭐ {metrics.rating}
          </span>
        )}
      </div>
      {metrics.features && (
        <div className="flex flex-wrap gap-1 mt-2">
          {metrics.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="text-[10px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
              {feature}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

// Card optimizada con soporte para métricas
const ProjectCard = ({ proyecto, isMobile }) => {
  const isFinanceApp = proyecto.title === "FinanceTracker - App Móvil de Gastos";
  
  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, y: 30 }}
      whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group bg-gray-900/80 rounded-xl overflow-hidden border transition-all duration-200 flex flex-col ${
        proyecto.featured 
          ? "border-cyan-400/40 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20" 
          : "border-white/10 hover:border-cyan-400/40"
      }`}
    >
      <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-800">
        <img
          src={proyecto.imgSrc}
          alt={proyecto.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge destacado */}
        {proyecto.featured && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <DollarSign size={10} />
            Destacado
          </div>
        )}

        <StatusBadge status={proyecto.status} />

        {proyecto.url !== "#" && (
          <a
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 p-1.5 bg-black/60 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-bold group-hover:text-cyan-400 transition-colors flex-1">
            {proyecto.title}
          </h3>
          {isFinanceApp && <DollarSign size={16} className="text-green-400 flex-shrink-0" />}
        </div>

        <p className="text-gray-400 text-sm mb-3 flex-1">
          {proyecto.description}
        </p>

        {/* Categoría */}
        <span className="text-xs text-cyan-400 mb-2">
          {proyecto.category}
        </span>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-1 mb-3">
          {proyecto.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs text-gray-300 bg-white/5 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {proyecto.technologies.length > 3 && (
            <span className="text-xs text-gray-500">
              +{proyecto.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Métricas específicas (solo para FinanceTracker) */}
        <ProjectMetrics metrics={proyecto.metrics} />

     {/* Botón CTA */}
{proyecto.url !== "#" ? (
  <a
    href={proyecto.url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-center py-2 rounded-lg text-sm mt-3 transition-all bg-cyan-600 text-white hover:bg-cyan-500 hover:scale-105 block"
  >
    Ver Proyecto
  </a>
) : (
  <button
    disabled
    className="text-center py-2 rounded-lg text-sm mt-3 transition-all bg-white/5 text-gray-400 cursor-not-allowed block w-full"
    onClick={(e) => {
      e.preventDefault();
      if (proyecto.status === "beta") {
        alert("🚀 Próximamente disponible en las tiendas de aplicaciones");
      } else {
        alert("🔧 Proyecto en desarrollo");
      }
    }}
  >
    {proyecto.status === "beta" ? "Beta Testing" : "En Desarrollo"}
  </button>
)}
      </div>
    </motion.div>
  );
};

export default function Proyectos({ isMobile }) {
  // Separar proyectos destacados al inicio si quieres
  const featuredProjects = proyectos.filter(p => p.featured);
  const otherProjects = proyectos.filter(p => !p.featured);
  
  return (
    <section id="proyectos" className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">
            Proyectos <span className="text-cyan-400">Destacados</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Una selección de mis trabajos
          </p>
        </div>

        {/* Proyectos Destacados (opcional, para mostrar primero los importantes) */}
        {featuredProjects.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <DollarSign className="text-cyan-400" />
              Proyectos Destacados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((p) => (
                <ProjectCard key={p.title} proyecto={p} isMobile={isMobile} />
              ))}
            </div>
          </div>
        )}

        {/* Todos los proyectos */}
        {otherProjects.length > 0 && (
          <div>
            {featuredProjects.length > 0 && (
              <h3 className="text-xl font-semibold text-white mb-4">
                Otros Proyectos
              </h3>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <ProjectCard key={p.title} proyecto={p} isMobile={isMobile} />
              ))}
            </div>
          </div>
        )}

        {/* CTA OPTIMIZADO */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mt-10"
        >
          <div className="bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl p-6 border border-cyan-500/20">
            <h3 className="text-lg font-bold text-white mb-2">
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Trabajemos juntos en tu próximo proyecto.
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all hover:scale-105"
            >
              <span>Iniciar Proyecto</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}