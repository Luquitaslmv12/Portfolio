import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CodeXml } from "lucide-react";

const links = [
  { label: "Inicio", href: "#banner" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          className="text-cyan-400 font-bold text-2xl tracking-tight flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-default"
          whileHover={{ scale: 1.1 }}
        >
           <motion.div
  animate={{ scale: [1, 1.3, 1] }}
  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  className="text-lime-500"
>
  <CodeXml size={24} />
</motion.div>
          Lucas Viollaz
          
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative group transition-colors duration-200"
              >
                <span className="group-hover:text-cyan-400">{link.label}</span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pb-4 pt-2 space-y-3 text-gray-300 bg-black/90 backdrop-blur-sm border-t border-white/10"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 px-2 rounded hover:text-cyan-400 hover:bg-white/5 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}