import { motion, useReducedMotion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

import { profile, strengths } from "../data/profile";
import { litStyle } from "../lib/gradients";
import GradientTile from "./ui/GradientTile";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import SmartImage from "./ui/SmartImage";

const EASE = [0.16, 1, 0.3, 1];

export default function SobreMi() {
  const reduced = useReducedMotion();

  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title="Un desarrollador"
      accent="que se la juega"
      description={profile.bio}
      align="left"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* ---- photo ---- */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-grape-500/15 blur-3xl"
            style={litStyle("violet")}
          />

          <div className="panel panel-lit relative rounded-[1.75rem] p-2.5">
            <SmartImage
              src="/Yo2.png"
              alt={`Retrato de ${profile.name}`}
              className="w-full rounded-[1.35rem] bg-ink-800"
              imgClassName="aspect-[4/5] object-cover"
            />

            {/* gradient hairline over the photo edge */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-2.5 rounded-[1.35rem] ring-1 ring-inset ring-white/10"
            />

            <div className="relative z-10 -mt-px px-3 pb-2 pt-4 text-center">
              <p className="font-display text-lg font-bold text-ink-50">
                {profile.name}
              </p>
              <p className="mt-0.5 font-mono text-xs tracking-[0.14em] text-brand-300 uppercase">
                {profile.role}
              </p>
            </div>
          </div>

          {/* floating experience badge */}
          <motion.div
            animate={reduced ? {} : { y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -right-3 -top-3 flex items-center gap-2.5 rounded-2xl border border-white/12 bg-ink-900/90 px-4 py-3 backdrop-blur-xl sm:-right-6"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
              <Sparkles size={17} />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-extrabold text-ink-50">
                {profile.yearsExperience}
              </span>
              <span className="block text-[0.7rem] text-ink-400">
                años programando
              </span>
            </span>
          </motion.div>
        </motion.div>

        {/* ---- narrative ---- */}
        <div className="flex flex-col gap-6">
          <Reveal>
            <Quote
              size={34}
              className="text-brand-400/35"
              aria-hidden="true"
            />
            {profile.about.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg sm:leading-[1.8]"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="font-display text-sm font-semibold tracking-[0.16em] text-ink-500 uppercase">
              Cómo trabajo
            </h3>
          </Reveal>

          <ul className="grid gap-3 sm:grid-cols-2">
            {strengths.map((strength, index) => (
              <motion.li
                key={strength.label}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.08 * index,
                  ease: EASE,
                }}
                className="panel panel-lit group flex items-center gap-3.5 rounded-xl p-4 transition-transform duration-400 ease-out hover:-translate-y-1"
              >
                <GradientTile
                  Icon={strength.Icon}
                  gradient={strength.gradient}
                  size="sm"
                />
                <span className="text-sm font-medium text-ink-200 transition-colors duration-300 group-hover:text-ink-50">
                  {strength.label}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}