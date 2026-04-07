import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, CodeXml, Download } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#banner" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Estudios", href: "#estudios" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar({ activeSection, isMobile }) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Scroll optimizado con rAF (NO jank)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl"
          : "bg-transparent"
      }`}
      initial={isMobile ? false : { y: -100 }}
      animate={isMobile ? {} : { y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* ✅ Logo SIN animación infinita */}
          <motion.div
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-cyan-400"
            >
              <CodeXml size={28} />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Lucas Viollaz
              </span>
              <span className="text-xs text-gray-400 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Developer
              </span>
            </div>
          </motion.div>

          {/* ✅ Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={isMobile ? false : { opacity: 0, y: -20 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {item.label}

                {activeSection === item.href.slice(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                    layoutId="activeSection"
                  />
                )}
              </motion.a>
            ))}

            {/* CTA */}
            <motion.a
              href="#contacto"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              Contactar
            </motion.a>
          </div>

          {/* ✅ Mobile Button (SIN AnimatePresence) */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu OPTIMIZADO (sin height auto) */}
      {open && (
        <motion.div
          className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-t border-cyan-500/20 shadow-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
        >
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                }`}
                onClick={() => setOpen(false)}
                initial={isMobile ? false : { opacity: 0, x: -20 }}
                animate={isMobile ? {} : { opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 6 }}
              >
                {item.label}
              </motion.a>
            ))}

            {/* CTA Mobile */}
            <motion.a
              href="#contacto"
              className="block px-4 py-3 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-base font-medium text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              onClick={() => setOpen(false)}
              whileHover={{ scale: 1.02 }}
            >
              Contactar
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}