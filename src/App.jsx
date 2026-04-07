import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Servicios from "./Components/Servicios";
import Proyectos from "./Components/Proyectos";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";
import Estudios from "./Components/Estudios";
import SobreMi from "./Components/SobreMi";

import { useState, useEffect, useCallback } from "react";
import BackgroundEffects from "./Components/BackgroundEffects"; // ⬅️ NUEVO
import "./App.css";

// Debounce optimizado
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");
  const [isMobile, setIsMobile] = useState(false);

  // Detectar mobile SOLO una vez
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)
      );
    };
    checkMobile();
  }, []);

  // Scroll optimizado
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    setScrolled(scrollY > 50);

    const sections = [
      "banner",
      "servicios",
      "proyectos",
      "estudios",
      "sobre-mi",
      "contacto",
    ];

    const scrollPosition = scrollY + 100;
    let current = "banner";

    for (const section of sections) {
      const el = document.getElementById(section);
      if (!el) continue;

      const top = el.offsetTop;
      const height = el.offsetHeight;

      if (scrollPosition >= top - 50 && scrollPosition < top + height - 50) {
        current = section;
        break;
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 20);

    window.addEventListener("scroll", debouncedScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [handleScroll]);

  return (
    <div className="text-white scroll-smooth selection:bg-cyan-500 selection:text-black min-h-screen">
      
      {/* 🔥 BACKGROUND OPTIMIZADO */}
      <BackgroundEffects isMobile={isMobile} />

      {/* CONTENIDO */}
      <div className="relative z-10">
        <Navbar scrolled={scrolled} activeSection={activeSection} />

        <main>
          {/* BANNER */}
          <section id="banner" className="relative">
            <Banner isMobile={isMobile} />
          </section>

          {/* CONTENIDO PRINCIPAL */}
          <section className="relative bg-gradient-to-b from-blue-800/10 via-pink-800/20 to-cyan-900/10">
            <div id="servicios">
              <Servicios />
            </div>

            <div id="proyectos">
              <Proyectos />
            </div>

            <div id="estudios">
              <Estudios />
            </div>

            <div id="sobre-mi">
              <SobreMi />
            </div>

            <div id="contacto">
              <Contacto />
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}