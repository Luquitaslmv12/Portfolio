import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

import { contactChannels, faqs, profile } from "../data/profile";
import GradientTile from "./ui/GradientTile";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { useSpotlight } from "../hooks/useUi";

const EASE = [0.16, 1, 0.3, 1];
const MAX_MESSAGE = 800;

const BUDGETS = [
  "No estoy seguro todavía",
  "Sitio web / landing",
  "Sistema a medida",
  "App móvil",
  "Mantenimiento / mejoras",
];

const EMAILJS = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_n9n3i3n",
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_r07tjwh",
  key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "hVwoxHrA3Y8o5A9Gg",
};

/* --------------------------------------------------------------------------
   Validation — returns an error string, or undefined when the value is valid.
   -------------------------------------------------------------------------- */
const RULES = {
  name: (value) => {
    const v = value.trim();
    if (!v) return "Contame tu nombre.";
    if (v.length < 2) return "El nombre es demasiado corto.";
    return undefined;
  },
  email: (value) => {
    const v = value.trim();
    if (!v) return "Necesito un email para responderte.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Ese email no parece válido.";
    return undefined;
  },
  message: (value) => {
    const v = value.trim();
    if (!v) return "Contame brevemente sobre el proyecto.";
    if (v.length < 10) return `Sumá un poco más de detalle (${v.length}/10 caracteres).`;
    return undefined;
  },
};

const FIELDS = [
  { name: "name", label: "Nombre", type: "text", autoComplete: "name", placeholder: "Tu nombre" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "tu@email.com" },
];

const EMPTY = { name: "", email: "", message: "", budget: BUDGETS[0] };

export default function Contacto() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState("idle"); // idle | sending | sent
  const [formError, setFormError] = useState("");
  const formRef = useRef(null);

  const onMouseMove = useSpotlight();
  const reduced = useReducedMotion();

  const update = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Only clear errors once the field has been flagged, to avoid nagging
    // while someone is still typing their first character.
    if (submitted || errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        if (next[name] || submitted) delete next[name];
        return next;
      });
    }
  };

  const onBlur = (name) => {
    if (!values[name]) return;
    setErrors((prev) => ({ ...prev, [name]: RULES[name]?.(values[name]) }));
  };

  const validate = useCallback(() => {
    const next = {};
    for (const name of ["name", "email", "message"]) {
      const error = RULES[name](values[name]);
      if (error) next[name] = error;
    }
    return next;
  }, [values]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      // Move focus to the first invalid field for keyboard and screen readers.
      const firstInvalid = Object.keys(nextErrors)[0];
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setState("sending");
    setFormError("");

    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        {
          from_name: values.name.trim(),
          reply_to: values.email.trim(),
          message: values.message.trim(),
          presupuesto: values.budget,
        },
        EMAILJS.key
      );

      setState("sent");
      setValues(EMPTY);
      setSubmitted(false);
    } catch {
      setState("idle");
      setFormError(
        "No pude enviar el mensaje. Probá de nuevo o escribime directo por WhatsApp."
      );
    }
  };

  const reset = () => {
    setState("idle");
    setFormError("");
  };

  const remaining = MAX_MESSAGE - values.message.length;
  const busy = state === "sending" || state === "sent";

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="¿Hablamos de"
      accent="tu proyecto?"
      description="Contame qué necesitás y te respondo con una propuesta concreta. Sin vueltas y sin compromiso."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        {/* ---- channels ---- */}
        <div className="flex flex-col gap-4">
          <ul className="grid gap-3">
            {contactChannels.map((channel, index) => {
              const body = (
                <>
                  <GradientTile Icon={channel.Icon} gradient={channel.gradient} size="sm" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.7rem] tracking-wide text-ink-500 uppercase">
                      {channel.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-ink-100">
                      {channel.value}
                    </span>
                  </span>
                  {channel.href && (
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-ink-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-300"
                    />
                  )}
                </>
              );

              return (
                <motion.li
                  key={channel.id}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
                >
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      className="panel panel-lit spotlight group flex items-center gap-4 rounded-2xl p-4 transition-transform duration-400 ease-out hover:-translate-y-0.5"
                      onMouseMove={onMouseMove}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="panel flex items-center gap-4 rounded-2xl p-4">
                      {body}
                    </div>
                  )}
                </motion.li>
              );
            })}
          </ul>

          <Reveal delay={0.2} className="mt-auto">
            <div className="panel panel-lit rounded-2xl p-6">
              <p className="text-sm text-ink-400">
                <Mail size={16} className="mb-3 text-brand-400" />
                ¿Preferís el correo? Escribime directo a{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="font-medium text-brand-300 underline decoration-brand-400/40 underline-offset-4 transition-colors hover:text-brand-200"
                >
                  {profile.email}
                </a>
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---- form ---- */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="panel panel-lit relative overflow-hidden rounded-3xl p-6 sm:p-8"
          style={{ "--lit-a": "#22d3ee", "--lit-b": "#8b5cf6" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -right-20 h-64 w-64 rounded-full bg-brand-500/12 blur-3xl"
          />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="relative z-10 flex flex-col gap-5"
          >
            {FIELDS.map((field) => {
              const error = errors[field.name];
              return (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-sm font-medium text-ink-300"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    onChange={(e) => update(field.name, e.target.value)}
                    onBlur={() => onBlur(field.name)}
                    aria-invalid={error ? "true" : undefined}
                    aria-describedby={
                      error ? `${field.name}-error` : `${field.name}-hint`
                    }
                    className="field"
                  />
                  {error ? (
                    <p
                      id={`${field.name}-error`}
                      role="alert"
                      className="mt-2 text-xs text-rose-300"
                    >
                      {error}
                    </p>
                  ) : (
                    <p id={`${field.name}-hint`} className="sr-only">
                      {field.label}
                    </p>
                  )}
                </div>
              );
            })}

            {/* budget */}
            <div>
              <label
                htmlFor="budget"
                className="mb-2 block text-sm font-medium text-ink-300"
              >
                Tipo de proyecto
              </label>
              <select
                id="budget"
                name="budget"
                value={values.budget}
                onChange={(e) => update("budget", e.target.value)}
                className="field cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2375859f%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:1.1rem] bg-[right_0.9rem_center] bg-no-repeat pr-11"
              >
                {BUDGETS.map((option) => (
                  <option key={option} value={option} className="bg-ink-900">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* message */}
            <div>
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <label htmlFor="message" className="text-sm font-medium text-ink-300">
                  Mensaje
                </label>
                <span
                  className={`font-mono text-xs ${
                    remaining < 60 ? "text-amber-400" : "text-ink-600"
                  }`}
                >
                  {values.message.length}/{MAX_MESSAGE}
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={MAX_MESSAGE}
                placeholder="¿Qué necesitás? Contexto, plazos, ideas sueltas… todo sirve."
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                onBlur={() => onBlur("message")}
                aria-invalid={errors.message ? "true" : undefined}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="field resize-none"
              />
              {errors.message && (
                <p id="message-error" role="alert" className="mt-2 text-xs text-rose-300">
                  {errors.message}
                </p>
              )}
            </div>

            {/* feedback */}
            <div aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait">
                {formError && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="rounded-xl border border-rose-400/25 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
                  >
                    {formError}
                  </motion.p>
                )}

                {state === "sent" && (
                  <motion.p
                    key="sent"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2.5 rounded-xl border border-mint-400/25 bg-mint-500/10 px-4 py-3 text-sm font-medium text-mint-200"
                  >
                    <CheckCircle2 size={17} className="shrink-0" />
                    ¡Mensaje enviado! Te respondo dentro de las próximas 24 h.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              disabled={busy}
              className={`btn btn-shine w-full ${
                state === "sent" ? "btn-ghost !text-mint-300" : "btn-primary"
              }`}
            >
              {state === "sending" ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Enviando…
                </>
              ) : state === "sent" ? (
                <>
                  <CheckCircle2 size={17} />
                  Enviado
                </>
              ) : (
                <>
                  <Send size={17} />
                  Enviar mensaje
                </>
              )}
            </button>

            {state === "sent" && (
              <button
                type="button"
                onClick={reset}
                className="text-sm text-ink-500 transition-colors hover:text-ink-300"
              >
                Enviar otro mensaje
              </button>
            )}

            <p className="text-center text-xs text-ink-600">
              Sin spam. Tus datos solo se usan para responderte.
            </p>
          </form>
        </motion.div>
      </div>

      {/* ---- FAQ ---- */}
      <Reveal className="mt-16">
        <h3 className="mb-6 text-center font-display text-xl font-bold text-ink-50 sm:text-2xl">
          Preguntas frecuentes
        </h3>
        <FaqList />
      </Reveal>
    </Section>
  );
}

function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <ul className="mx-auto grid max-w-3xl gap-3">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <li
            key={item.q}
            className="panel panel-lit overflow-hidden rounded-xl transition-colors duration-300"
          >
            <h4>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span
                  className={`text-sm font-medium transition-colors ${
                    isOpen ? "text-brand-200" : "text-ink-100"
                  }`}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/10 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <span className="text-ink-300">+</span>
                </span>
              </button>
            </h4>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-sm leading-relaxed text-ink-400">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}