import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";

import { profile, roles, socials, stats, techStack } from "../data/profile";
import CodeCard from "./ui/CodeCard";
import Marquee from "./ui/Marquee";
import { litStyle } from "../lib/gradients";

const EASE = [0.16, 1, 0.3, 1];
const ROLE_INTERVAL = 2800;

/**
 * Dividers for the 4-up stat grid.
 * Mobile is 2x2 (separators on the inner edges), desktop is a single row.
 */
const STAT_BORDERS = [
  "",
  "border-l border-white/8",
  "border-t border-white/8 lg:border-t-0 lg:border-l lg:border-white/8",
  "border-t border-l border-white/8 lg:border-t-0",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      ROLE_INTERVAL
    );
    return () => window.clearInterval(id);
  }, [reduced]);

  const rise = (delay) => ({
    initial: { opacity: 0, y: reduced ? 0 : 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: EASE },
  });

  return (
    <section
      id="inicio"
      className="anchor relative flex min-h-svh flex-col justify-center pt-28 pb-14 lg:pt-36 lg:pb-20"
      aria-labelledby="hero-title"
    >
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ---------------- copy ---------------- */}
          <div className="flex flex-col items-start">
            <motion.span
              {...rise(0.05)}
              className="eyebrow"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-mint-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint-400" />
              </span>
              {profile.availability}
            </motion.span>

            <motion.h1
              {...rise(0.12)}
              id="hero-title"
              className="display-1 mt-6 text-ink-50"
            >
              Hola, soy{" "}
              <span className="gradient-text">Lucas Viollaz</span>
            </motion.h1>

            {/* rotating role */}
            <motion.div
              {...rise(0.2)}
              className="mt-5 flex min-h-[2.25rem] items-center gap-3"
            >
              <span className="font-mono text-lg text-ink-500 sm:text-xl">
                &gt;
              </span>
              <span className="sr-only">Rol: {profile.role}</span>
              <div className="relative h-8 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: reduced ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduced ? 0 : -16 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="absolute inset-0 flex items-center font-display text-lg font-semibold text-brand-300 sm:text-2xl"
                    aria-hidden="true"
                  >
                    {roles[roleIndex]}
                    <span className="ml-0.5 inline-block h-6 w-[9px] animate-blink bg-brand-400/80 align-middle" />
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p {...rise(0.28)} className="lede mt-6">
              {profile.bio}
            </motion.p>

            <motion.div
              {...rise(0.36)}
              className="mt-7 flex items-center gap-2 text-sm text-ink-400"
            >
              <MapPin size={16} className="text-brand-400" />
              {profile.location}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...rise(0.44)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#proyectos" className="btn btn-primary btn-shine">
                Ver proyectos
                <ArrowUpRight size={17} />
              </a>

              <a
                href={profile.resume.path}
                download={profile.resume.label}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Download size={17} />
                Descargar CV
              </a>
            </motion.div>

            {/* socials */}
            <motion.ul
              {...rise(0.52)}
              className="mt-9 flex items-center gap-2.5"
              aria-label="Redes sociales"
            >
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
            </motion.ul>
          </div>

          {/* ---------------- code card ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 34, scale: reduced ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="relative"
          >
            {/* glow behind the card */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-500/12 blur-3xl"
              style={litStyle("cyan")}
            />

            <CodeCard />

            {/* floating location chip */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.6, ease: EASE }}
              className="animate-drift absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl border border-white/10 bg-ink-900/85 px-3.5 py-2.5 backdrop-blur-xl sm:flex"
            >
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-mint-500/20 text-mint-300">
                <MapPin size={15} />
              </span>
              <span className="text-xs leading-tight">
                <span className="block text-ink-400">Zona horaria</span>
                <span className="block font-medium text-ink-100">
                  {profile.timezone}
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* ---------------- stats ---------------- */}
        <motion.dl
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="panel mt-16 grid grid-cols-2 rounded-2xl sm:mt-20 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative z-10 px-6 py-6 ${STAT_BORDERS[index]}`}
            >
              <dt className="font-display text-3xl font-extrabold text-ink-50 sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-ink-300">
                {stat.label}{" "}
                <span className="text-ink-500">· {stat.hint}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* ---------------- marquee ---------------- */}
      <div className="shell mt-16 sm:mt-20">
        <Marquee items={techStack} />
      </div>

      {/* scroll cue */}
      <motion.a
        href="#servicios"
        aria-label="Ir a Servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="group absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-500 transition-colors hover:text-brand-300 lg:flex"
      >
        <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={reduced ? {} : { y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}