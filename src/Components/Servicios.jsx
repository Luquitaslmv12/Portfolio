import { CodeXml, LayoutDashboard, Cloud, Shield, Monitor, Smartphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const servicios = [
  {
    icon: <CodeXml className="w-8 h-8" />,
    title: "Desarrollo Frontend",
    description: "Construyo interfaces limpias, rápidas y accesibles usando React, Tailwind y más.",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Performance"],
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.1
  },
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Diseños intuitivos y atractivos que mejoran la experiencia del usuario.",
    features: ["Figma/Adobe XD", "Prototipado", "Design System", "User Research"],
    gradient: "from-violet-500 to-purple-600",
    delay: 0.2
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Backend y APIs",
    description: "Implemento APIs robustas y escalables con Node.js, Express y bases de datos.",
    features: ["Node.js/Express", "REST/GraphQL", "MongoDB/PostgreSQL", "Autenticación"],
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.3
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Seguridad Web",
    description: "Aplicación de mejores prácticas para proteger tus aplicaciones y datos.",
    features: ["JWT/OAuth", "Encriptación", "OWASP", "Auditoría"],
    gradient: "from-green-500 to-emerald-500",
    delay: 0.4
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Apps de Escritorio",
    description: "Desarrollo aplicaciones de escritorio para gestión y productividad.",
    features: ["Electron", "Windows/macOS", "Auto-updates", "Native APIs"],
    gradient: "from-yellow-500 to-amber-500",
    delay: 0.5
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Apps Móviles Android",
    description: "Creo aplicaciones móviles nativas y multiplataforma para Android.",
    features: ["React Native", "Android Native", "Firebase", "Play Store"],
    gradient: "from-pink-500 to-rose-500",
    delay: 0.6
  },
];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
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
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${servicio.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${servicio.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-[1px] rounded-3xl bg-gray-900" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${servicio.gradient} flex items-center justify-center text-white mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300`}
                >
                  {servicio.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                  {servicio.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {servicio.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {servicio.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
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
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: servicio.delay + 0.3 }}
                  className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors"
                >
                  <span className="text-sm font-medium">Saber más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
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