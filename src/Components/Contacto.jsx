import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  User,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Phone,
  MapPin,
  Send,
  Clock,
} from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const isMobile = () => {
    return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  };

  const phoneNumber = "5493447432091";
  const message = encodeURIComponent("Hola, quisiera más información");

  const whatsappURL = isMobile()
    ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Por favor, completa todos los campos.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_n9n3i3n",
        "template_r07tjwh",
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        "hVwoxHrA3Y8o5A9Gg"
      );
      
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setError("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "lucaslmv12@gmail.com",
      href: "mailto:lucaslmv12@gmail.com",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Teléfono",
      value: "+54 9 3447 43-2091",
      href: `tel:${phoneNumber}`,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Ubicación",
      value: "Colón, Entre Ríos, Argentina",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Disponibilidad",
      value: "Lun - Vie • 9:00 - 18:00",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Contacto
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad juntos.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Vías de Contacto</h3>
                
                {/* Info Cards */}
                <div className="grid gap-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href ? "_blank" : undefined}
                      rel={item.href ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className={`flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${item.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 group`}
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-300">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

            
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`bg-gradient-to-br from-gray-900/80 to-cyan-900/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-cyan-500/20 ${
                shake ? "animate-shake" : ""
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", icon: User, placeholder: "Nombre completo", delay: 0.1 },
                  { name: "email", icon: Mail, placeholder: "tu@email.com", delay: 0.2 },
                  { name: "message", icon: MessageSquare, placeholder: "Cuéntame sobre tu proyecto...", delay: 0.3, isTextarea: true }
                ].map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: field.delay }}
                    className="relative"
                  >
                    <field.icon className="absolute top-4 left-4 text-cyan-400" size={20} />
                    {field.isTextarea ? (
                      <textarea
                        name={field.name}
                        placeholder={field.placeholder}
                        rows="5"
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-cyan-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none backdrop-blur-sm"
                      />
                    ) : (
                      <input
                        type={field.name === "email" ? "email" : "text"}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-cyan-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all backdrop-blur-sm"
                      />
                    )}
                  </motion.div>
                ))}

                {/* Feedback Messages */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-400"
                    >
                      <AlertTriangle size={20} />
                      <span className="text-sm">{error}</span>
                    </motion.div>
                  )}
                  
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-400"
                    >
                      <CheckCircle2 size={20} className="animate-pulse" />
                      <span className="text-sm font-medium">¡Mensaje enviado! Te responderé pronto.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading || success}
                  whileHover={{ scale: isLoading || success ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isLoading || success
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:cursor-pointer"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Enviando...
                    </>
                  ) : success ? (
                    <>
                      <CheckCircle2 size={20} />
                      ¡Enviado!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Mensaje
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <motion.a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 z-50 hover:shadow-green-500/50 transition-all"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={28} />
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.a>
    </>
  );
}