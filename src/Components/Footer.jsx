import { SiGithub, SiLinkedin, SiGmail, SiFacebook, SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import { CodeXml, Heart, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/Luquitaslmv12?tab=repositories",
      Icon: SiGithub,
      label: "GitHub",
      color: "bg-gray-700/80 hover:bg-gray-600 border-gray-600/30",
      iconColor: "#ffffff",
    },
    {
      href: "https://www.linkedin.com/in/lucas-mariano-viollaz/",
      Icon: SiLinkedin,
      label: "LinkedIn",
      color: "bg-blue-700/80 hover:bg-blue-600 border-blue-600/30",
      iconColor: "#ffffff",
    },
    {
      href: "mailto:lucaslmv12@gmail.com",
      Icon: SiGmail,
      label: "Correo electrónico",
      color: "bg-red-600/80 hover:bg-red-500 border-red-500/30",
      iconColor: "#ffffff",
    },
    {
      href: "https://www.facebook.com/lucas.viollaz",
      Icon: SiFacebook,
      label: "Facebook",
      color: "bg-blue-600/80 hover:bg-blue-500 border-blue-500/30", 
      iconColor: "#ffffff",
    },
    {
      href: "https://wa.me/5493447432091", 
      Icon: SiWhatsapp,
      label: "WhatsApp",
      color: "bg-green-600/80 hover:bg-green-500 border-green-500/30",
      iconColor: "#ffffff",
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
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-t from-gray-900 to-black border-t border-cyan-500/20 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo - Responsive */}
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl sm:blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-xl sm:blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Contenido Principal - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Brand Section - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut" 
                }}
                className="text-cyan-400"
              >
                <CodeXml className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Lucas Viollaz
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              Creando experiencias digitales excepcionales con código limpio, 
              diseño innovador y soluciones tecnológicas.
            </p>
            
            {/* Info de Contacto - Responsive */}
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span>lucaslmv12@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span>Entre Ríos, Argentina</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Conectemos - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Conectemos</h4>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              ¿Listo para empezar tu próximo proyecto? 
              Hablemos y hagámoslo realidad juntos.
            </p>
            
            {/* Botón CTA - Responsive */}
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg sm:rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Iniciar Proyecto</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Línea Separadora */}
        <div className="border-t border-gray-800/50 my-6 sm:my-8" />

        {/* Bottom Section - Responsive */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Copyright - Responsive */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm text-center sm:text-left"
          >
            <span>© {new Date().getFullYear()} LMV Studio.</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart className="w-3 h-3 text-red-500 animate-pulse" /> por Lucas Viollaz
            </span>
            <span className="hidden sm:inline">Todos los derechos reservados.</span>
          </motion.div>

          {/* Social Links - Completamente Responsive y con Hover Mejorado */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
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
                  scale: 1.15, 
                  y: -3,
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border backdrop-blur-sm transition-all duration-300 ${color} group relative flex items-center justify-center`}
                style={{ 
                  minWidth: '40px',
                  minHeight: '40px'
                }}
              >
                <Icon 
                  size={18} 
                  color={iconColor} 
                  className="sm:w-5 sm:h-5 transition-transform group-hover:scale-110"
                />
                
                {/* Tooltip - Solo en desktop */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block">
                  {label}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Badge de Tecnologías - Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800/30"
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            Desarrollado con React, Vite, Tailwind CSS y Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}