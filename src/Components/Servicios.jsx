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
const ServiceCardWithTilt = ({ servicio, index }) => {
  // Contenido overlay personalizado para el TiltedCard
  const overlayContent = (
    <div className={`relative ${servicio.cardColor} backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden w-full h-full`}>
      {/* Borde animado */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${servicio.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
        <div className="absolute inset-[1px] rounded-3xl bg-gray-900" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${servicio.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
        >
          {servicio.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-4">
          {servicio.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
          {servicio.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {servicio.features.map((feature, featureIndex) => (
            <motion.li
              key={featureIndex}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: servicio.delay + featureIndex * 0.1 }}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${servicio.gradient}`} />
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* CTA Arrow */}
       {/*  <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: servicio.delay + 0.3 }}
          className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors mt-auto"
        >
          <span className="text-sm font-medium">Saber más</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.div> */}
      </div>
    </div>
  );

  return (
    <div className="w-full h-full min-h-[500px]">
      <TiltedCard
/*         imageSrc={servicio.bgImage || "/images/default-service-bg.jpg"} // Imagen de fondo para el efecto 3D
        altText={`Fondo para ${servicio.title}`} */
        captionText={servicio.title} // Tooltip mostrará el título del servicio
        containerHeight="100%"
        containerWidth="100%"
        imageHeight="500px" // Ajusta según necesites
        imageWidth="100%"
        scaleOnHover={1.03} // Efecto más sutil
        rotateAmplitude={6} // Rotación más suave
        showMobileWarning={false} // Desactiva el warning
        showTooltip={false}
        overlayContent={overlayContent}
        displayOverlayContent={true}
      />
    </div>
  );
};

// Versión alternativa sin efecto 3D para mobile (opcional)
const ServiceCardSimple = ({ servicio, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ 
      y: -10,
      scale: 1.02,
      transition: { type: "tween", stiffness: 300, damping: 20 }
    }}
    className={`group relative ${servicio.cardColor} backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 cursor-pointer overflow-hidden h-full min-h-[500px] flex flex-col`}
  >
    {/* Borde animado */}
    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${servicio.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
      <div className="absolute inset-[1px] rounded-3xl bg-gray-900" />
    </div>

    <div className="relative z-10 flex flex-col h-full">
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${servicio.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
      >
        {servicio.icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-4">
        {servicio.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
        {servicio.description}
      </p>

      {/* Features List */}
      <ul className="space-y-2 mb-6">
        {servicio.features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: servicio.delay + featureIndex * 0.1 }}
            className="flex items-center gap-2 text-sm text-gray-300"
          >
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${servicio.gradient}`} />
            {feature}
          </motion.li>
        ))}
      </ul>

      {/* CTA Arrow */}
     {/*  <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: servicio.delay + 0.3 }}
        className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors mt-auto"
      >
        <span className="text-sm font-medium">Saber más</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.div> */}
    </div>
  </motion.div>
);

export default function Servicios() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4"
          >
            Lo que ofrezco
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Mis <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas completas para llevar tus ideas al siguiente nivel
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicios.map((servicio, index) => (
            <div key={index} className="h-full">
              {/* Usa TiltedCard solo en desktop, versión simple en mobile */}
              <div className="hidden md:block h-full">
                <ServiceCardWithTilt servicio={servicio} index={index} />
              </div>
              <div className="md:hidden h-full">
                <ServiceCardSimple servicio={servicio} index={index} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Cada proyecto es único. Hablemos sobre tus necesidades específicas y creemos una solución personalizada juntos.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <span>Consultar Proyecto Personalizado</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}