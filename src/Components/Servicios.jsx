import { CodeXml, LayoutDashboard, Cloud, Shield, Monitor, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

const servicios = [
  {
    icon: <CodeXml size={40} className="text-cyan-400" />,
    title: "Desarrollo Frontend",
    description: "Construyo interfaces limpias, rápidas y accesibles usando React, Tailwind y más.",
  },
  {
    icon: <LayoutDashboard size={40} className="text-violet-500" />,
    title: "UI/UX Design",
    description: "Diseños intuitivos y atractivos que mejoran la experiencia del usuario.",
  },
  {
    icon: <Cloud size={40} className="text-blue-500" />,
    title: "Backend y APIs",
    description: "Implemento APIs robustas y escalables con Node.js, Express y bases de datos.",
  },
  {
    icon: <Shield size={40} className="text-lime-400" />,
    title: "Seguridad Web",
    description: "Aplicación de mejores prácticas para proteger tus aplicaciones y datos.",
  },
  {
    icon: <Monitor size={40} className="text-yellow-400" />,
    title: "Apps de Escritorio",
    description: "Desarrollo aplicaciones de escritorio para gestión y productividad, con tecnologías como Electron.",
  },
  {
    icon: <Smartphone size={40} className="text-pink-500" />,
    title: "Apps Móviles Android",
    description: "Creo aplicaciones móviles nativas y multiplataforma para Android con alto rendimiento y buen diseño.",
  },

]

export default function Servicios() {
  return (
    <section
      id="servicios"
    >
      <h3 className="text-3xl font-bold text-white mb-12 text-center">
        Servicios
      </h3>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 px-4">
        {servicios.map(({ icon, title, description }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center shadow-lg cursor-default
              hover:shadow-cyan-500/70 hover:scale-105 transition-transform duration-300 w-[280px]"
          >
            <div className="mb-4 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.7)] transition-shadow duration-300">
              {icon}
            </div>
            <h4 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-cyan-400">
              {title}
            </h4>
            <p className="text-gray-400 text-sm">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}