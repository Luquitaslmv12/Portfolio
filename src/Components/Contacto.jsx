import { useState, useEffect } from "react"
import { Mail, User, MessageSquare, CheckCircle2, AlertTriangle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [shake, setShake] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")
    setSuccess(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Por favor, completa todos los campos.")
      setShake(true)
      setTimeout(() => setShake(false), 500)
      return
    }

    setSuccess(true)
    setFormData({ name: "", email: "", message: "" })
  }

  // Ocultar mensajes después de 3 segundos
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false)
        setError("")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [success, error])

  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 sm:px-6 flex justify-center"
    >
      <motion.div
        className={`max-w-3xl w-full bg-cyan-900/20 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-12 border border-white/20 ${shake ? "animate-shake" : ""}`}
        whileHover={{ boxShadow: "0 10px 40px rgba(43, 161, 182, 0.856)" }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center tracking-wide">
          Contacto
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
          {/* Nombre */}
          <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <User className="absolute top-3 left-3 text-cyan-400" size={22} />
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-blue-300/20 border border-cyan-400/70 text-white placeholder-cyan-400/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
            />
          </motion.div>

          {/* Email */}
          <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Mail className="absolute top-3 left-3 text-cyan-400" size={22} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-blue-300/20 border border-cyan-400/70 text-white placeholder-cyan-400/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
            />
          </motion.div>

          {/* Mensaje */}
          <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <MessageSquare className="absolute top-3 left-3 text-cyan-400" size={22} />
            <textarea
              name="message"
              placeholder="Mensaje"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-blue-300/20 border border-cyan-400/70 text-white placeholder-cyan-400/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-300 transition resize-none"
            />
          </motion.div>

          {/* Feedback */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 text-red-500 text-center text-sm"
              >
                <AlertTriangle size={18} /> {error}
              </motion.p>
            )}
            {success && (
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 text-green-400 text-center text-sm font-semibold"
              >
                <CheckCircle2 className="animate-spin-slow" size={18} />
                Mensaje enviado correctamente!
              </motion.p>
            )}
          </AnimatePresence>

          {/* Botón */}
          <motion.button
            type="submit"
            disabled={success}
            whileTap={{ scale: 0.97 }}
            className={`self-center font-semibold px-10 py-3 rounded-full shadow-md transition duration-300 ${
              success
                ? "bg-green-400 text-white cursor-default"
                : "bg-cyan-500 text-black hover:bg-cyan-400"
            }`}
          >
            {success ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={22} /> Enviado
              </motion.div>
            ) : (
              "Enviar"
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  )
}