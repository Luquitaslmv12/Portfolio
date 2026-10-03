import {
  CodeXml,
  LayoutDashboard,
  Cloud,
  ShieldCheck,
  MonitorSmartphone,
  Smartphone,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Facebook,
  MapPin,
  GraduationCap,
  BadgeCheck,
  BookOpenCheck,
  Users,
  Infinity as InfinityIcon,
} from "lucide-react";

/* ==========================================================================
   PROFILE — single source of truth for all page content.
   Edit copy here; components stay presentational.
   ========================================================================== */

export const profile = {
  name: "Lucas Viollaz",
  initials: "LV",
  role: "Full Stack Developer",
  brand: "LMV Studio",
  location: "Colón, Entre Ríos, Argentina",
  timezone: "GMT-3",
  email: "lucaslmv12@gmail.com",
  phoneDisplay: "+54 9 3447 43-2091",
  phoneRaw: "5493447432091",
  availability: "Disponible para proyectos",
  availabilityNote: "Lun – Vie · 9:00 – 18:00",
  bio: "Desarrollador Full Stack especializado en React, Node.js y Firebase. Construyo productos digitales completos: desde la interfaz hasta la API y la base de datos.",
  about: [
    "Me considero una persona entusiasta que disfruta enfrentar nuevos desafíos. Cada día me esfuerzo por aprender y mejorar mis habilidades para aportar siempre lo mejor.",
    "Trabajo de manera responsable y me adapto con facilidad tanto al trabajo en equipo como al desarrollo individual.",
  ],
  yearsExperience: "5+",
  resume: { label: "Lucas Viollaz CV", path: "/Lucas-Viollaz.pdf" },
};

/** Rotating roles for the hero typewriter. */
export const roles = [
  "Full Stack Developer",
  "Desarrollador React",
  "Especialista en Firebase",
  "Creador de productos digitales",
];

/** Marquee strip. Duplicated in the DOM for a seamless -50% loop. */
export const techStack = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Firebase",
  "Node.js",
  "JavaScript",
  "Java",
  "Android",
  "React Native",
  "Express",
  "Material UI",
  "Chart.js",
  "SAP ABAP",
  "Python",
  "Figma",
  "Git",
];

/** WhatsApp deep link, native app on mobile / web on desktop. */
export const whatsappUrl = (() => {
  const isMobileDevice =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  const text = encodeURIComponent(
    `Hola Lucas, te escribo desde tu portfolio. Quiero contarte sobre un proyecto.`
  );
  return isMobileDevice
    ? `https://api.whatsapp.com/send?phone=${profile.phoneRaw}&text=${text}`
    : `https://web.whatsapp.com/send?phone=${profile.phoneRaw}&text=${text}`;
})();

export const socials = [
  { href: "https://github.com/Luquitaslmv12", Icon: Github, label: "GitHub", tint: "#a6b3c9" },
  {
    href: "https://www.linkedin.com/in/lucas-mariano-viollaz/",
    Icon: Linkedin,
    label: "LinkedIn",
    tint: "#22d3ee",
  },
  { href: `mailto:${profile.email}`, Icon: Mail, label: "Email", tint: "#fb7185" },
  { href: whatsappUrl, Icon: MessageCircle, label: "WhatsApp", tint: "#34d399" },
  {
    href: "https://www.facebook.com/lucas.viollaz",
    Icon: Facebook,
    label: "Facebook",
    tint: "#60a5fa",
  },
];

/* --------------------------------------------------------------------------
   NAVIGATION
   -------------------------------------------------------------------------- */

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "estudios", label: "Estudios" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
];

/* --------------------------------------------------------------------------
   SERVICES
   -------------------------------------------------------------------------- */

export const services = [
  {
    id: "frontend",
    Icon: CodeXml,
    title: "Desarrollo Frontend",
    description:
      "Interfaces limpias, rápidas y accesibles. Trabajo con React y Tailwind enfocándome en rendimiento real y SEO técnico.",
    features: ["React / Next.js", "TypeScript", "Tailwind CSS", "Core Web Vitals"],
    gradient: "cyan",
  },
  {
    id: "diseno",
    Icon: LayoutDashboard,
    title: "UI/UX Design",
    description:
      "Diseño pensado para el usuario final: jerarquía clara, estados bien resueltos y prototipos navegables antes de programar.",
    features: ["Figma", "Prototipado", "Design System", "User Research"],
    gradient: "violet",
  },
  {
    id: "backend",
    Icon: Cloud,
    title: "Backend y APIs",
    description:
      "APIs REST y GraphQL robustas, modelado de datos sensato y autenticación segura lista para producción.",
    features: ["Node.js / Express", "REST / GraphQL", "MongoDB / SQL", "Auth & JWT"],
    gradient: "blue",
  },
  {
    id: "seguridad",
    Icon: ShieldCheck,
    title: "Seguridad Web",
    description:
      "Aplico buenas prácticas OWASP, validación de entrada y control de roles para que la aplicación no sea un riesgo.",
    features: ["JWT / OAuth", "Cifrado", "OWASP", "Auditoría"],
    gradient: "mint",
  },
  {
    id: "escritorio",
    Icon: MonitorSmartphone,
    title: "Apps de Escritorio",
    description:
      "Aplicaciones de escritorio multiplataforma para gestión y productividad interna, con auto-actualización incluida.",
    features: ["Electron", "Windows / macOS", "Auto-updates", "APIs nativas"],
    gradient: "amber",
  },
  {
    id: "movil",
    Icon: Smartphone,
    title: "Apps Móviles Android",
    description:
      "Aplicaciones móviles nativas y multiplataforma, publicadas en Play Store y listas para producción.",
    features: ["React Native", "Android Nativo", "Firebase", "Play Store"],
    gradient: "pink",
  },
];

/* --------------------------------------------------------------------------
   PROJECTS
   -------------------------------------------------------------------------- */

export const projects = [  {
    id: "crm-erp-automotriz",
    title: "CRM / ERP Gestión Automotriz",
    description:
      "Sistema integral para concesionarias: gestión multi-nivel, control de taller, inventario inteligente y reportes analíticos en tiempo real.",
    image: "/CRM.png",
    url: null,
    category: "Web App",
    status: "live",
    featured: true,
    stack: ["React", "Firebase", "Node.js", "Material UI", "Chart.js", "JWT", "Roles"],
  },
  {
    id: "finance-tracker",
    title: "FinanceTracker",
    description:
      "App móvil de gastos personales con estadísticas en tiempo real, presupuestos y sincronización en la nube.",
    image: "/Gastos-App2.png",
    url: null,
    category: "Mobile App",
    status: "beta",
    featured: true,
    stack: ["React Native", "Expo", "Firebase", "Chart Kit", "AsyncStorage"],
    highlights: [
      { label: "Estado", value: "Beta testing" },
      { label: "Valoración", value: "4.8 / 5" },
    ],
  },
  {
    id: "escher-textil",
    title: "Escher — Sitio Corporativo",
    description:
      "Sitio corporativo para empresa textil, orientado a conversión y optimizado para SEO y experiencia de usuario.",
    image: "/escher.png",
    url: "https://eschercyt.com.ar/",
    category: "Web Design",
    status: "live",
    featured: false,
    stack: ["React", "Tailwind CSS", "Framer Motion", "SEO", "Responsive"],
  },
  {
    id: "gestion-flota",
    title: "Gestión de Flota de Camiones",
    description:
      "Aplicación de gestión de flota con autenticación, panel de control y seguimiento de unidades.",
    image: "/gestion-flota.png",
    url: null,
    category: "Web App",
    status: "demo",
    featured: false,
    stack: ["React", "Firebase", "Dashboard", "Auth System"],
  },
  {
    id: "minera-tropical",
    title: "Minera del Titoral",
    description:
      "Landing page responsive en React con arquitectura SPA, pensada para cargar rápido en conexiones lentas.",
    image: "/minera.jpg",
    url: "https://www.mineradellitoral.com.ar",
    category: "Web Design",
    status: "live",
    featured: false,
    stack: ["React", "Tailwind CSS", "Vite", "SPA"],
  },
  {
    id: "inventario-android",
    title: "App de Inventario",
    description:
      "Aplicación nativa de gestión de inventario para Android, con búsqueda instantánea y modo offline.",
    image: "/Android.png",
    url: null,
    category: "Mobile App",
    status: "development",
    featured: false,
    stack: ["Android Studio", "Java", "SQLite"],
  },
];

/** Category filter list, "Todos" first, built from the project data. */
export const projectFilters = [
  "Todos",
  ...new Set(projects.map((p) => p.category)),
];

/**
 * Headline metrics for the hero.
 *
 * Declared last on purpose: it derives from the collections above, and `const`
 * bindings throw if read before their initialiser runs.
 */
export const stats = [
  { value: String(projects.length), label: "Proyectos", hint: "en portfolio" },
  { value: String(techStack.length), label: "Tecnologías", hint: "en uso diario" },
  { value: profile.yearsExperience, label: "Años", hint: "en desarrollo" },
  { value: String(services.length), label: "Servicios", hint: "especializados" },
];

/* --------------------------------------------------------------------------
   STUDIES
   -------------------------------------------------------------------------- */

export const studies = [
  {
    id: "utn-programacion",
    title: "Técnico Superior en Programación",
    institution: "Universidad Tecnológica Nacional",
    description: "Carrera de grado en Programación, aprobada en tiempo y forma.",
    detail:
      "Formación de grado en algoritmos, bases de datos e ingeniería de software. Práctica final grupal aprobada con nota 8.",
    image: "/TITULO.jpeg",
    year: "2018",
    duration: "3 años",
    Icon: GraduationCap,
    skills: ["Programación", "Algoritmos", "Bases de datos", "Ingeniería de software"],
  },
  {
    id: "coderhouse-react",
    title: "Certificación React JS",
    institution: "CODERHOUSE",
    description: "Curso intensivo a distancia en desarrollo frontend con React.",
    detail:
      "React + Vite, Firebase como base de datos no relacional, Bootstrap, React Router y manejo de librerías externas.",
    image: "/REACT.png",
    year: "2024",
    duration: "4 meses",
    Icon: BadgeCheck,
    skills: ["React", "Firebase", "Vite", "Tailwind", "React Router"],
  },
  {
    id: "sap-abap",
    title: "Certificación SAP ABAP",
    institution: "DL Consultores",
    description: "Introducción y aplicación real de sistemas SAP.",
    detail:
      "Curso sobre ABAP, el lenguaje de SAP para reporting e interfacing con bases de datos.",
    image: "/ABAP.jpg",
    year: "2024",
    duration: "3 meses",
    Icon: BookOpenCheck,
    skills: ["SAP ABAP", "Sistemas ERP", "Programación empresarial"],
  },
  {
    id: "jornadas-informatics",
    title: "Jornadas Informáticas",
    institution: "Comisión Técnica Mixta de Salto Grande",
    description: "4ta jornada binacional de Informática y Comunicaciones.",
    detail: "Encuentro regional sobre tendencias de TI, networking profesional e innovación tecnológica.",
    image: "/JOBIC.jpg",
    year: "2015",
    duration: "2 días",
    Icon: Users,
    skills: ["Networking", "Tendencias TI", "Innovación"],
  },
  {
    id: "autodidacta",
    title: "Aprendizaje Continuo",
    institution: "Autónomo",
    description: "Estudio constante de tecnologías modernas.",
    detail:
      "React, Firebase, Tailwind, Next.js, testing, Python, Unity 3D y patrones de diseño, manteniéndome al día con el ecosistema web y mobile.",
    image: "/PLATAFORMAS.png",
    year: "Desde 2021",
    duration: "Continuo",
    Icon: InfinityIcon,
    skills: ["React / Next.js", "Firebase", "Python", "Unity", "Patrones de diseño"],
  },
];

/* --------------------------------------------------------------------------
   ABOUT — differentiators
   -------------------------------------------------------------------------- */

export const strengths = [
  { Icon: BadgeCheck, label: "Enfocado en resultados", gradient: "cyan" },
  { Icon: CodeXml, label: "Desarrollo continuo", gradient: "violet" },
  { Icon: Users, label: "Trabajo en equipo", gradient: "mint" },
  { Icon: InfinityIcon, label: "Soluciones creativas", gradient: "pink" },
];

/* --------------------------------------------------------------------------
   CONTACT
   -------------------------------------------------------------------------- */

export const contactChannels = [
  {
    id: "email",
    Icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    gradient: "cyan",
    external: false,
  },
  {
    id: "whatsapp",
    Icon: MessageCircle,
    label: "WhatsApp",
    value: profile.phoneDisplay,
    href: whatsappUrl,
    gradient: "mint",
    external: true,
  },
  {
    id: "location",
    Icon: MapPin,
    label: "Ubicación",
    value: profile.location,
    href: null,
    gradient: "violet",
    external: false,
  },
  {
    id: "availability",
    Icon: BadgeCheck,
    label: "Disponibilidad",
    value: profile.availabilityNote,
    href: null,
    gradient: "amber",
    external: false,
  },
];

export const faqs = [
  {
    q: "¿En qué plazo entregas un proyecto?",
    a: "Un sitio institucional o landing page suele tomar entre 1 y 2 semanas. Un sistema a medida, entre 6 y 12 semanas según el alcance.",
  },
  {
    q: "¿Cómo se cobra el trabajo?",
    a: "Por etapas, con un alcance cerrado por adelantado. Se entrega el código fuente de todo lo que se desarrolla.",
  },
  {
    q: "¿Trabajás con clientes fuera de Argentina?",
    a: "Sí. Todos los proyectos son remotos y el horario se ajusta a tu zona horaria.",
  },
  {
    q: "¿Qué necesitás para empezar?",
    a: "Una idea de qué querés lograr. Si ya tenés Wireframes o un diseño, mejor todavía. Yo me encargo del resto.",
  },
];
