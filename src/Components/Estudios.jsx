import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ZoomIn } from "lucide-react";

import { studies } from "../data/profile";
import GradientTile from "./ui/GradientTile";
import Lightbox from "./ui/Lightbox";
import Section from "./ui/Section";
import SmartImage from "./ui/SmartImage";

const EASE = [0.16, 1, 0.3, 1];

const TONES = ["cyan", "violet", "blue", "mint", "pink"];

function TimelineItem({ study, index }) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(null);
  const reduced = useReducedMotion();

  const isLast = index === studies.length - 1;
  const gradient = TONES[index % TONES.length];

  return (
    <motion.li
      initial={reduced ? { opacity: 0 } : { opacity: 0, x: -26 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: EASE }}
      className="relative grid grid-cols-[auto_1fr] gap-x-5 pb-8 sm:gap-x-8 sm:pb-10"
    >
      {/* ---- rail: marker + connector ---- */}
      <div className="relative flex flex-col items-center">
        <span className="z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-ink-900 shadow-lg sm:h-12 sm:w-12">
          <GradientTile Icon={study.Icon} gradient={gradient} size="sm" />
        </span>

        {!isLast && (
          <span
            aria-hidden="true"
            className="absolute top-12 bottom-0 w-px bg-gradient-to-b from-white/18 via-white/8 to-transparent sm:top-14"
          />
        )}
      </div>

      {/* ---- card ---- */}
      <article className="panel panel-lit group min-w-0 rounded-2xl p-5 transition-transform duration-500 ease-out hover:-translate-y-1 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-medium tracking-wider text-brand-300">
            {study.year}
          </span>
          <span aria-hidden="true" className="text-ink-700">
            /
          </span>
          <span className="font-mono text-xs text-ink-500">
            {study.duration}
          </span>
        </div>

        <h3 className="mt-2 font-display text-lg font-bold text-ink-50 sm:text-xl">
          {study.title}
        </h3>

        <p className="mt-1 text-sm font-medium text-brand-300/90">
          {study.institution}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-400">
          {study.description}
        </p>

        <div className="mt-5 flex items-start gap-4">
          <button
            type="button"
            onClick={() => setZoom(study.image)}
            aria-label={`Ampliar imagen de ${study.title}`}
            className="group/img relative shrink-0 overflow-hidden rounded-xl border border-white/10 focus-visible:outline-2"
          >
            <SmartImage
              src={study.image}
              alt={study.title}
              className="h-20 w-24 sm:h-24 sm:w-32"
              imgClassName="transition-transform duration-500 group-hover/img:scale-110"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 grid place-items-center bg-ink-950/55 opacity-0 transition-opacity duration-300 group-hover/img:opacity-100"
            >
              <ZoomIn size={18} className="text-ink-100" />
            </span>
          </button>

          <ul className="flex min-w-0 flex-1 flex-wrap content-start gap-1.5">
            {study.skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* expandable detail */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
        >
          {open ? "Ocultar detalle" : "Ver detalle"}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="inline-flex"
          >
            <ChevronDown size={15} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="overflow-hidden"
            >
              <p className="mt-3 border-t border-white/8 pt-4 text-sm leading-relaxed text-ink-300">
                {study.detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </article>

      {/* AnimatePresence must live in the component that owns the mount, or
          the exit animation is skipped when `zoom` flips to null. */}
      <AnimatePresence>
        {zoom && (
          <Lightbox
            src={zoom}
            alt={`${study.title} — ${study.institution}`}
            onClose={() => setZoom(null)}
          />
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function Estudios() {
  return (
    <Section
      id="estudios"
      eyebrow="Trayectoria"
      title="Estudios y"
      accent="certificaciones"
      description="Formación de grado, certificaciones y aprendizaje continuo. Lo que sostengo mi trabajo."
    >
      <ol className="mx-auto max-w-3xl">
        {studies.map((study, index) => (
          <TimelineItem key={study.id} study={study} index={index} />
        ))}
      </ol>
    </Section>
  );
}