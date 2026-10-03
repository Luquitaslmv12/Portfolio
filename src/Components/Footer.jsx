import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { navItems, profile, socials } from "../data/profile";
import LogoMark from "./ui/LogoMark";
import { litStyle } from "../lib/gradients";

const EASE = [0.16, 1, 0.3, 1];

export default function Footer() {
  const reduced = useReducedMotion();

  return (
    <footer className="anchor relative overflow-hidden border-t border-white/8 bg-ink-950/60">
      <div className="line-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl"
      />

      <div className="shell relative py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-14">
          {/* ---- brand ---- */}
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <LogoMark size={44} />

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              {profile.bio}
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2.5 text-ink-300 transition-colors hover:text-brand-300"
                >
                  <Mail size={15} className="text-brand-400" />
                  {profile.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-ink-300">
                <MapPin size={15} className="text-brand-400" />
                {profile.location}
              </li>
            </ul>
          </motion.div>

          {/* ---- nav ---- */}
          <motion.nav
            aria-label="Enlaces del pie de página"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <h2 className="font-display text-sm font-semibold tracking-[0.16em] text-ink-500 uppercase">
              Navegación
            </h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-brand-300"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-ink-600 transition-all duration-300 group-hover:bg-brand-400 group-hover:shadow-[0_0_8px_rgb(34_211_238/0.8)]"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* ---- CTA ---- */}
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            <h2 className="font-display text-sm font-semibold tracking-[0.16em] text-ink-500 uppercase">
              ¿Arrancamos?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-400">
              Contame qué tenés en mente y te respondo con una propuesta
              concreta.
            </p>
            <a href="#contacto" className="btn btn-primary btn-shine mt-6 w-full">
              Iniciar proyecto
              <ArrowUpRight size={16} />
            </a>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {socials.map(({ href, Icon, label, tint }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    title={label}
                    className="btn-icon h-10 w-10"
                    style={{ color: tint }}
                  >
                    <Icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ---- oversized wordmark ---- */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-14 select-none overflow-hidden"
        >
          <p
            className="gradient-text text-center font-display text-[13vw] leading-[0.85] font-extrabold tracking-tight opacity-[0.13] blur-[0.3px]"
            style={litStyle("cyan")}
          >
            {profile.name}
          </p>
        </div>

        {/* ---- bottom bar ---- */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-7 sm:flex-row">
          <p className="text-center text-xs text-ink-500 sm:text-left">
            © {new Date().getFullYear()} {profile.brand} · Construido con React,
            Tailwind CSS y Framer Motion.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-ink-500">
            Hecho con
            <span className="text-rose-400" aria-hidden="true">
              ♥
            </span>
            <span className="sr-only">amor</span>
            por {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}