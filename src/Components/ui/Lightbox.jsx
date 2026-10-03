import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

import { useEscapeKey, useLockBodyScroll } from "../../hooks/useUi";

const EASE = [0.16, 1, 0.3, 1];
const FOCUSABLE = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

/**
 * Image lightbox.
 *
 * Rendered through a portal so ancestor transforms (framer-motion sets them)
 * can't turn the fixed overlay into a positioned child.
 */
export default function Lightbox({ src, alt, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const reduced = useReducedMotion();

  useEscapeKey(true, onClose);
  useLockBodyScroll(true);

  // Hand focus to the close button, then restore it on unmount.
  // The trigger must be captured *before* focus moves, otherwise the cleanup
  // would restore focus to the close button that is being removed.
  useEffect(() => {
    const trigger = document.activeElement;
    closeRef.current?.focus();

    return () => {
      if (trigger instanceof HTMLElement) trigger.focus();
    };
  }, []);

  const onKeyDown = useCallback((event) => {
    if (event.key !== "Tab") return;

    const nodes = dialogRef.current?.querySelectorAll(FOCUSABLE);
    if (!nodes?.length) return;

    const first = nodes[0];
    const last = nodes[nodes.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }, []);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/92 p-4 backdrop-blur-xl sm:p-8"
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={alt}
        onKeyDown={onKeyDown}
        initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.35, ease: EASE }}
        onClick={(event) => event.stopPropagation()}
        className="relative flex max-h-full w-full max-w-4xl flex-col items-center"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar imagen"
          className="btn-icon absolute -top-2 right-0 z-10 sm:-right-2 sm:-top-14"
        >
          <X size={20} />
        </button>

        <img
          src={src}
          alt={alt}
          className="max-h-[78vh] w-auto max-w-full rounded-2xl border border-white/10 object-contain shadow-2xl"
        />

        <p className="mt-5 text-center text-sm text-ink-400">
          {alt}
          <span className="mt-1 block text-xs text-ink-600">
            Presioná Esc o hacé clic fuera para cerrar
          </span>
        </p>
      </motion.div>
    </motion.div>,
    document.body
  );
}
