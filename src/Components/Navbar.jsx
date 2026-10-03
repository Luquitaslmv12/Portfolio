import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navItems, profile, socials } from "../data/profile";
import LogoMark from "./ui/LogoMark";
import { useActiveSection } from "../hooks/useScrollSpy";
import { useEscapeKey, useLockBodyScroll } from "../hooks/useUi";

const EASE = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const firstLinkRef = useRef(null);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(sectionIds);

  const close = useCallback(() => setOpen(false), []);
  useLockBodyScroll(open);
  useEscapeKey(open, close);

  // Drives the reading-progress bar under the navbar.
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    let frame = 0;

    const evaluate = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close the drawer if the viewport grows past the breakpoint while it's open.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Move focus into the drawer, and hand it back to the trigger on close.
  const wasOpen = useRef(false);
  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
    } else if (wasOpen.current) {
      toggleRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  // Keep Tab inside the drawer while it is open.
  const onPanelKeyDown = useCallback((event) => {
    if (event.key !== "Tab") return;

    const focusables = panelRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables?.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink-950/80 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell" aria-label="Navegación principal">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <a
            href="#inicio"
            onClick={close}
            className="rounded-xl transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            aria-label={`${profile.name} — ir al inicio`}
          >
            <LogoMark />
          </a>

          {/* ---------- desktop ---------- */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-ink-50"
                        : "text-ink-300 hover:text-ink-50"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-lg border border-brand-400/25 bg-brand-400/10"
                        transition={
                          reduced
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 32 }
                        }
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="btn btn-primary btn-shine hidden text-sm lg:inline-flex"
              aria-label="Ir a la sección de contacto"
            >
              Hablemos
              <ArrowUpRight size={16} />
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="nav-mobile-panel"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="btn-icon lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Reading progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className={`h-px origin-left bg-gradient-to-r from-brand-300 via-grape-400 to-brand-300 transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* ---------- mobile drawer ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="nav-mobile-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            onKeyDown={onPanelKeyDown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="lg:hidden"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-2xl"
            >
              <ul className="shell flex flex-col gap-1 py-6">
                {navItems.map((item, index) => {
                  const isActive = active === item.id;
                  return (
                    <li key={item.id}>
                      <motion.a
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={`#${item.id}`}
                        onClick={close}
                        aria-current={isActive ? "true" : undefined}
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + index * 0.05, duration: 0.4, ease: EASE }}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-base font-medium transition-colors duration-300 ${
                          isActive
                            ? "border-brand-400/30 bg-brand-400/10 text-ink-50"
                            : "border-transparent text-ink-300 hover:bg-white/5 hover:text-ink-50"
                        }`}
                      >
                        {item.label}
                        <span className="font-mono text-xs text-ink-500">
                          0{index + 1}
                        </span>
                      </motion.a>
                    </li>
                  );
                })}

                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4, ease: EASE }}
                  className="mt-4 border-t border-white/10 pt-5"
                >
                  <a
                    href="#contacto"
                    onClick={close}
                    className="btn btn-primary btn-shine w-full"
                    aria-label="Ir a la sección de contacto"
                  >
                    Hablemos de tu proyecto
                    <ArrowUpRight size={17} />
                  </a>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-5 flex items-center gap-3"
                >
                  {socials.slice(0, 4).map(({ href, Icon, label, tint }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className="btn-icon h-11 w-11"
                      style={{ color: tint }}
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}