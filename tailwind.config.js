/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Para activar modo oscuro con clase 'dark'
  theme: {
    extend: {
      colors: {
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        // Puedes extender más colores aquí si quieres
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // ejemplo con Inter
      },
    },
  },
  plugins: [],

  
}