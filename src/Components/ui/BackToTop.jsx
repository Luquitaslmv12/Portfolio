import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];
const SHOW_AFTER = 700;

/** Floating "back to top" control. Renders nothing until the page is scrolled. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    let frame = 0;

    const evaluate = () => {
      frame = 0;
      setVisible(window.scrollY > SHOW_AFTER);
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

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#inicio"
          aria-label="Volver arriba"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.32, ease: EASE }}
          whileHover={reduced ? undefined : { y: -3 }}
          whileTap={reduced ? undefined : { scale: 0.94 }}
          className="btn-icon fixed bottom-6 right-6 z-40 bg-ink-900/80 backdrop-blur-xl"
        >
          <ArrowUp size={19} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}