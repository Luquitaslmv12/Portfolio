import { SiGithub, SiLinkedin, SiGmail, SiFacebook, SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import { CodeXml, Heart, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/Luquitaslmv12?tab=repositories",
      Icon: SiGithub,
      label: "GitHub",
      color: "hover:bg-gray-700 border-gray-700/20",
      iconColor: "#c6d2e4",
    },
    {
      href: "https://www.linkedin.com/in/lucas-mariano-viollaz/",
      Icon: SiLinkedin,
      label: "LinkedIn",
      color: "hover:bg-blue-600 border-blue-600/20",
      iconColor: "#0A66C2",
    },
    {
      href: "mailto:lucaslmv12@gmail.com",
      Icon: SiGmail,
      label: "Correo electrónico",
      color: "hover:bg-red-500 border-red-500/20",
      iconColor: "#D44638",
    },
    {
      href: "https://www.facebook.com/lucas.viollaz",
      Icon: SiFacebook,
      label: "Facebook",
      color: "hover:bg-blue-500 border-blue-500/20", 
      iconColor: "#3034ec",
    },
    {
      href: "https://wa.me/5493447432091", 
      Icon: SiWhatsapp,
      label: "WhatsApp",
      color: "hover:bg-green-500 border-green-500/20",
      iconColor: "#25D366",
    },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#banner" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-t from-black to-gray-900 border-t border-cyan-500/20 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contenido Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut" 
                }}
                className="text-cyan-400"
              >
                <CodeXml size={32} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Lucas Viollaz
                </h3>
                <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Creando experiencias digitales excepcionales con código limpio, 
              diseño innovador y soluciones tecnológicas que marcan la diferencia.
            </p>
            
            {/* Info de Contacto */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-cyan-400" />
                <span>lucaslmv12@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-cyan-400" />
                <span>Entre Ríos, Argentina</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Conectemos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Conectemos</h4>
            <p className="text-gray-400 mb-6">
              ¿Listo para empezar tu próximo proyecto? 
              Hablemos y hagámoslo realidad juntos.
            </p>
            
            {/* Botón CTA */}
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Mail size={18} />
              Iniciar Proyecto
            </motion.a>
          </motion.div>
        </div>

        {/* Línea Separadora */}
        <div className="border-t border-gray-800/50 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>© {new Date().getFullYear()} LMV Studio.</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart size={14} className="text-red-500 animate-pulse" /> por Lucas Viollaz
            </span>
            <span>Todos los derechos reservados.</span>
          </motion.div>

          {/* Social Links Mejorados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex space-x-4"
          >
            {socialLinks.map(({ href, Icon, label, color, iconColor }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                title={label}
                aria-label={label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index + 0.6 }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-xl border backdrop-blur-sm transition-all duration-300 ${color} group relative`}
              >
                <Icon 
                  size={22} 
                  color={iconColor} 
                  className="transition-transform group-hover:scale-110"
                />
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {label}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Badge de Tecnologías */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 pt-6 border-t border-gray-800/30"
        >
          <p className="text-gray-500 text-sm">
            Desarrollado con React, Vite, Tailwind CSS y Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}