import { CodeXml, LayoutDashboard, Cloud, Shield, Monitor, Smartphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TiltedCard from "../Snippets/TiltedCard";

const servicios = [
  {
    icon: <CodeXml className="w-8 h-8" />,
    title: "Desarrollo Frontend",
    description: "Construyo interfaces limpias, rápidas y accesibles usando React, Tailwind y más.",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Performance"],
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.1,
    cardColor: "bg-gradient-to-br from-cyan-900/20 to-blue-900/20",
    bgImage: "/images/frontend-bg.jpg" // Opcional: imagen de fondo para el efecto 3D
  },
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Diseños intuitivos y atractivos que mejoran la experiencia del usuario.",
    features: ["Figma/Adobe XD", "Prototipado", "Design System", "User Research"],
    gradient: "from-violet-500 to-purple-600",
    delay: 0.2,
    cardColor: "bg-gradient-to-br from-purple-900/20 to-violet-900/20",
    bgImage: "/images/design-bg.jpg"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Backend y APIs",
    description: "Implemento APIs robustas y escalables con Node.js, Express y bases de datos.",
    features: ["Node.js/Express", "REST/GraphQL", "MongoDB/PostgreSQL", "Autenticación"],
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.3,
    cardColor: "bg-gradient-to-br from-blue-900/20 to-cyan-900/20",
    bgImage: "/images/backend-bg.jpg"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Seguridad Web",
    description: "Aplicación de mejores prácticas para proteger tus aplicaciones y datos.",
    features: ["JWT/OAuth", "Encriptación", "OWASP", "Auditoría"],
    gradient: "from-green-500 to-emerald-500",
    delay: 0.4,
    cardColor: "bg-gradient-to-br from-emerald-900/20 to-green-900/20",
    bgImage: "/images/security-bg.jpg"
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Apps de Escritorio",
    description: "Desarrollo aplicaciones de escritorio para gestión y productividad.",
    features: ["Electron", "Windows/macOS", "Auto-updates", "Native APIs"],
    gradient: "from-yellow-500 to-amber-500",
    delay: 0.5,
    cardColor: "bg-gradient-to-br from-amber-900/20 to-yellow-900/20",
    bgImage: "/images/desktop-bg.jpg"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Apps Móviles Android",
    description: "Creo aplicaciones móviles nativas y multiplataforma para Android.",
    features: ["React Native", "Android Native", "Firebase", "Play Store"],
    gradient: "from-pink-500 to-rose-500",
    delay: 0.6,
    cardColor: "bg-gradient-to-br from-rose-900/20 to-pink-900/20",
    bgImage: "/images/mobile-bg.jpg"
  },
];

// Componente wrapper para usar TiltedCard con servicios
const ServiceCard = ({ servicio, isMobile }) => {
  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, y: 20 }}
      whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group ${servicio.cardColor} rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-200 flex flex-col`}
    >
      {/* ICON */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${servicio.gradient} flex items-center justify-center text-white mb-4`}>
        {servicio.icon}
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-bold text-white mb-2">
        {servicio.title}
      </h3>

      {/* DESC */}
      <p className="text-gray-400 text-sm mb-4 flex-1">
        {servicio.description}
      </p>

      {/* FEATURES (SIN motion) */}
      <ul className="space-y-1 mb-4">
        {servicio.features.map((f) => (
          <li key={f} className="text-xs text-gray-300 flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${servicio.gradient}`} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="text-cyan-400 text-sm flex items-center gap-2 mt-auto">
        <span>Más info</span>
        <ArrowRight size={14} />
      </div>
    </motion.div>
  );
};

export default function Servicios({ isMobile }) {
  return (
    <section id="servicios" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER SIMPLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">
            Mis <span className="text-cyan-400">Servicios</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Soluciones tecnológicas para tu negocio
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <ServiceCard key={s.title} servicio={s} isMobile={isMobile} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <div className="bg-cyan-500/5 rounded-xl p-6 border border-cyan-500/20">
            <h3 className="text-lg font-bold text-white mb-2">
              ¿Proyecto en mente?
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Hablemos y lo hacemos realidad
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition"
            >
              Contactar
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}