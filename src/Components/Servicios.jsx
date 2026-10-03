import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { services } from "../data/profile";
import { gradientClass, litStyle } from "../lib/gradients";
import { useSpotlight } from "../hooks/useUi";
import GradientTile from "./ui/GradientTile";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

const EASE = [0.16, 1, 0.3, 1];

function ServiceCard({ service, index }) {
  const onMouseMove = useSpotlight();
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.09, ease: EASE }}
      onMouseMove={onMouseMove}
      style={litStyle(service.gradient)}
      className="panel panel-lit spotlight group flex flex-col rounded-2xl p-6 transition-transform duration-500 ease-out hover:-translate-y-1.5"
    >
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <GradientTile Icon={service.Icon} gradient={service.gradient} />

          <span
            aria-hidden="true"
            className="font-mono text-xs text-ink-600 transition-colors duration-500 group-hover:text-brand-400/70"
          >
            0{index + 1}
          </span>
        </div>

        <h3 className="mt-5 font-display text-lg font-bold text-ink-50 transition-colors duration-300 group-hover:text-brand-200">
          {service.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-ink-400">
          {service.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {service.features.map((feature) => (
            <li key={feature} className="chip">
              {feature}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-300">
          Consultar
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </span>
      </div>

      {/* gradient wash that fades in on hover */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-[0.07] ${gradientClass(
          service.gradient
        )}`}
      />
    </motion.article>
  );
}

export default function Servicios() {
  return (
    <Section
      id="servicios"
      eyebrow="Qué hago"
      title="Servicios"
      accent="que ofrezco"
      description="Un stack completo, del diseño de la interfaz hasta la base de datos. Elegí un área y lo llevamos adelante."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* CTA */}
      <Reveal delay={0.1} className="mt-14">
        <div className="panel panel-lit relative overflow-hidden rounded-2xl px-6 py-10 text-center sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <span className="eyebrow">
              <Check size={13} />
              Sin compromiso
            </span>
            <h3 className="display-2 text-3xl text-ink-50 sm:text-4xl">
              ¿Tenés un proyecto <span className="gradient-text">en mente?</span>
            </h3>
            <p className="lede mx-auto text-center">
              Contame qué querés resolver y te digo cómo lo encararía, con
              plazos y alcance claros.
            </p>
            <a href="#contacto" className="btn btn-primary btn-shine mt-2">
              Empezar un proyecto
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}