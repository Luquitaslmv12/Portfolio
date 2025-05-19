import { SiGithub, SiLinkedin, SiGmail, SiFacebook, SiWhatsapp } from "react-icons/si"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/Luquitaslmv12?tab=repositories",
      Icon: SiGithub,
      label: "GitHub",
      color: "#c6d2e4", 
    },
    {
      href: "https://www.linkedin.com/in/lucas-mariano-viollaz/",
      Icon: SiLinkedin,
      label: "LinkedIn",
      color: "#0A66C2", 
    },
    {
      href: "mailto:lucaslmv12@gmail.com",
      Icon: SiGmail,
      label: "Correo electrónico",
      color: "#D44638",
    },
    {
      href: "https://www.facebook.com/lucas.viollaz",
      Icon: SiFacebook,
      label: "Facebook",
      color: "#3034ec", 
    },
     {
      href: "https://wa.me/5493447432091", 
      Icon: SiWhatsapp,
      label: "WhatsApp",
      color: "#25D366",
    },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black/90 dark:bg-white/5 backdrop-blur border-t border-white/10 py-10"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-300 dark:text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white dark:text-cyan-400 font-semibold">
            LMV Studio
          </span>. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6">
          {socialLinks.map(({ href, Icon, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              title={label}
              aria-label={label}
              className="hover:scale-110 transition-transform duration-200"
            >
              <Icon size={26} color={color} />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}