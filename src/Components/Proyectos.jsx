import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

import { projects, projectFilters } from "../data/profile";
import { litStyle } from "../lib/gradients";
import { useSpotlight } from "../hooks/useUi";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import SmartImage from "./ui/SmartImage";

const EASE = [0.16, 1, 0.3, 1];

/** Status presentation. Every tone needs a text, dot and ring style. */
const TONES = {
  live: {
    label: "En línea",
    dot: "bg-mint-400",
    text: "text-mint-300",
    ring: "border-mint-400/25 bg-mint-500/15",
  },
  beta: {
    label: "Beta testing",
    dot: "bg-grape-400",
    text: "text-grape-300",
    ring: "border-grape-400/25 bg-grape-500/15",
  },
  demo: {
    label: "Demo privada",
    dot: "bg-brand-400",
    text: "text-brand-300",
    ring: "border-brand-400/25 bg-brand-500/15",
  },
  dev: {
    label: "En desarrollo",
    dot: "bg-amber-400",
    text: "text-amber-400",
    ring: "border-amber-400/25 bg-amber-500/15",
  },
};

function StatusPill({ tone }) {
  const t = TONES[tone] ?? TONES.dev;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-medium backdrop-blur-md ${t.ring} ${t.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
      {t.label}
    </span>
  );
}

function ProjectCard({ project }) {
  const onMouseMove = useSpotlight();
  const reduced = useReducedMotion();
  const { featured, url, status, highlights } = project;

  return (
    <motion.article
      layout={!reduced}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 26, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: EASE }}
      onMouseMove={onMouseMove}
      style={litStyle(featured ? "cyan" : "violet")}
      className={`panel panel-lit spotlight group flex overflow-hidden rounded-2xl transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 ${
        featured ? "lg:col-span-2 lg:flex-row" : "flex-col"
      }`}
    >
      {/* ---- media ---- */}
      <div className={`relative overflow-hidden ${featured ? "lg:w-[46%]" : ""}`}>
        <SmartImage
          src={project.image}
          alt={`Captura de ${project.title}`}
          className={`w-full ${featured ? "h-56 lg:h-full lg:min-h-[19rem]" : "h-48"}`}
          imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
        />

        {/* legibility scrim */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent"
        />

        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-2">
          <StatusPill tone={status} />
          {featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-brand-300/30 bg-ink-950/70 px-2.5 py-1 text-[0.7rem] font-medium text-brand-200 backdrop-blur-md">
              <Sparkles size={11} />
              Destacado
            </span>
          )}
        </div>

        {url && (
          <span className="pointer-events-none absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-ink-950/70 text-ink-100 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
            <ExternalLink size={17} />
          </span>
        )}
      </div>

      {/* ---- body ---- */}
      <div className="relative z-10 flex flex-1 flex-col p-6">
        <span className="font-mono text-[0.68rem] tracking-[0.16em] text-ink-500 uppercase">
          {project.category}
        </span>

        <h3 className="mt-2 font-display text-xl font-bold text-ink-50 transition-colors duration-300 group-hover:text-brand-200">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-ink-400">
          {project.description}
        </p>

        {highlights?.length > 0 && (
          <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {highlights.map((item) => (
              <div key={item.label}>
                <dt className="text-[0.68rem] text-ink-500">{item.label}</dt>
                <dd className="text-sm font-semibold text-ink-100">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        {/* footer */}
        <div className="mt-auto pt-6">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-shine w-full text-sm"
            >
              Ver proyecto en vivo
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <p className="flex items-center justify-center gap-2 rounded-xl border border-white/8 bg-white/3 px-4 py-2.5 text-sm text-ink-400">
              <span className={`h-1.5 w-1.5 rounded-full ${TONES[status]?.dot}`} />
              {TONES[status]?.label ?? "No disponible"}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Proyectos() {
  const [filter, setFilter] = useState("Todos");
  const reduced = useReducedMotion();

  const visible = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  const counts = useMemo(() => {
    const map = { Todos: projects.length };
    for (const project of projects) {
      map[project.category] = (map[project.category] ?? 0) + 1;
    }
    return map;
  }, []);

  return (
    <Section
      id="proyectos"
      eyebrow="Portafolio"
      title="Proyectos"
      accent="seleccionados"
      description="Una muestra del trabajo real: sistemas de gestión, productos móviles y sitios orientados a conversión."
      headingExtra={
        <div
          role="group"
          aria-label="Filtrar proyectos por categoría"
          className="mt-3 flex flex-wrap items-center justify-center gap-2"
        >
          {projectFilters.map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(category)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-ink-950" : "text-ink-300 hover:text-ink-50"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-300 to-brand-400"
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 34 }
                    }
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full border border-white/10 bg-white/4" />
                )}
                <span className="relative">
                  {category}
                  <span
                    className={`ml-1.5 font-mono text-[0.7rem] ${
                      isActive ? "text-ink-950/60" : "text-ink-500"
                    }`}
                  >
                    {counts[category]}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      }
    >
      <motion.div
        layout={!reduced}
        className="relative grid gap-5 sm:grid-cols-2 lg:gap-6"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* live region so filter changes are announced */}
      <Reveal className="mt-10 text-center">
        <p aria-live="polite" className="text-sm text-ink-500">
          Mostrando{" "}
          <span className="font-medium text-ink-300">{visible.length}</span>{" "}
          {visible.length === 1 ? "proyecto" : "proyectos"}
          {filter !== "Todos" && ` en ${filter}`}
        </p>
      </Reveal>
    </Section>
  );
}