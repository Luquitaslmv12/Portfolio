import AuroraBackground from "./Components/ui/AuroraBackground";
import BackToTop from "./Components/ui/BackToTop";
import SmoothScroll from "./Components/ui/SmoothScroll";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Servicios from "./Components/Servicios";
import Proyectos from "./Components/Proyectos";
import Estudios from "./Components/Estudios";
import SobreMi from "./Components/SobreMi";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      {/* Owned by the library, renders nothing. */}
      <SmoothScroll />

      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <AuroraBackground />
      <Navbar />

      <main id="contenido" className="relative">
        <Hero />
        <Servicios />
        <Proyectos />
        <Estudios />
        <SobreMi />
        <Contacto />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}