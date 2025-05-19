  import Navbar from "./Components/Navbar";
  import Banner from "./Components/Banner";
  import Servicios from "./Components/Servicios";
  import Proyectos from "./Components/Proyectos";
  import Contacto from "./Components/Contacto";
  import Footer from "./Components/Footer";
  import { useState, useEffect } from "react"
  import Estudios from "./Components/Estudios";
import SobreMi from "./Components/SobreMi";


  export default function App() {
    // Control para añadir clase 'scrolled' en navbar si se quiere cambiar estilos al hacer scroll
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
      
      <div className="bg-black text-white scroll-smooth selection:bg-cyan-500 selection:text-black min-h-screen">
        <Navbar scrolled={scrolled} />
        <main className="pt-16">
          <Banner />
          <div className="bg-gradient-to-b from-black via-blue-900 to-black">
          <Servicios />
          <Proyectos />
          <Estudios />
          <SobreMi />
          <Contacto />
          </div>
        </main>
        <Footer />
      </div>
    )
  }


