import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Servicios from "./Components/Servicios";
import Proyectos from "./Components/Proyectos";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import Estudios from "./Components/Estudios";
import SobreMi from "./Components/SobreMi";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['banner', 'servicios', 'proyectos', 'estudios', 'sobre-mi', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      let current = 'banner';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + height - 50) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Fondo tecnológico MEJORADO - solo efectos sutiles
  const BackgroundEffects = () => (
    <>
      {/* Fondo base negro sólido */}
      <div className="fixed inset-0 bg-black pointer-events-none" />
      
      {/* Grid muy sutil */}
      <div 
        className="fixed inset-0 bg-grid-white/[0.01] bg-[size:80px_80px] pointer-events-none"
        style={{
          transform: `translate(${(mousePosition.x - 50) * 0.01}px, ${(mousePosition.y - 50) * 0.01}px)`
        }}
      />
      
      {/* Gradientes MUY sutiles */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.03) 0%, transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(37, 99, 235, 0.02) 0%, transparent 50%)
          `,
        }}
      />

      {/* Partículas mínimas */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </>
  );

  return (
    <div className="text-white scroll-smooth selection:bg-cyan-500 selection:text-black min-h-screen overflow-hidden">
      {/* Fondo tecnológico MUY SUTIL */}
      <BackgroundEffects />
      
      {/* Contenido principal CON FONDOS CLAROS */}
      <div className="relative z-10">
        <Navbar scrolled={scrolled} activeSection={activeSection} />
        <main className="pt-16">
          
          {/* BANNER - con gradiente específico */}
          <div className="relative bg-gradient-to-br from-black via-blue-900/30 to-purple-900/20">
            <Banner />
            <Servicios />
            <Proyectos />
            <Estudios />
            <SobreMi />
             <Contacto />
          </div>
          
           
          
        </main>
        
        {/* FOOTER - con fondo oscuro */}
        <div className="bg-black">
          <Footer />
        </div>
      </div>

      {/* Estilos CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(4px); }
        }

        .bg-grid-white\\/\\[0\\.01\\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.01)'%3e%3cpath d='m0 0 32 32M32 0 0 32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
}