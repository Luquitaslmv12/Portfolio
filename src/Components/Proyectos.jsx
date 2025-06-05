import { motion } from "framer-motion";

const proyectos = [
  {
    title: "Responsive landing Page - SPA",
    description: "Una app web moderna con React y Tailwind CSS.",
    imgSrc: "/minera.jpg",
    url: "https://www.mineradellitoral.com.ar",
  },
  {
    title: "Store de productos deportivos",
    description:
      "Plataforma de compras de productos deportivos con React y Firebase como base de datos.",
    imgSrc: "/ACEPADELSTORE.png",
    url: "https://e-commerceacepadel.netlify.app/",
  },
  {
    title: "Gestion Flota Camiones",
    description: "Aplicacion de gestion con Autenticacion hecha con React + Vite y Firebase como base de datos.",
    imgSrc: "/gestion-flota.png",
  },
  {
    title: "En Proceso...",
    description: "Aplicacíon de gestión de inventario en Android Studio.",
    imgSrc: "/Android.png",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-white mb-12 text-center">
          Proyectos
        </h3>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4">
          {proyectos.map(({ title, description, imgSrc, url }, i) => (
            <motion.a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer transform
    hover:scale-105 hover:shadow-cyan-600/80 transition-transform duration-300"
            >
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-48 object-cover group-hover:brightness-90 transition"
              />
              {/* Overlay blur y degradado al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative p-4">
                <h4 className="text-white font-semibold text-lg mb-1 transition-colors duration-300 group-hover:text-cyan-400">
                  {title}
                </h4>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
