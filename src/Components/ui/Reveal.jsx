import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Fade-and-rise on scroll into view.
 *
 * Collapses to a plain fade (no translation) when the user prefers reduced
 * motion, instead of disabling the animation entirely — content stays visible.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  x = 0,
  duration = 0.65,
  amount = 0.2,
  once = true,
  className,
  ...rest
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: reduced ? 0.3 : duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}