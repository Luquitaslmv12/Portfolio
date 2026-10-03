/**
 * Gradient registry.
 *
 * Class names must appear as complete literals so Tailwind's scanner can see
 * them — building them dynamically (`from-${name}`) produces nothing.
 * Each entry also exposes the two hex stops used by `.panel-lit` to paint a
 * matching gradient hairline border.
 */
export const gradients = {
  cyan: {
    cls: "from-cyan-400 via-cyan-500 to-blue-500",
    a: "#22d3ee",
    b: "#3b82f6",
  },
  violet: {
    cls: "from-violet-400 via-purple-500 to-purple-600",
    a: "#a78bfa",
    b: "#9333ea",
  },
  blue: {
    cls: "from-blue-400 via-blue-500 to-brand-500",
    a: "#60a5fa",
    b: "#06b6d4",
  },
  mint: {
    cls: "from-emerald-400 via-emerald-500 to-teal-500",
    a: "#34d399",
    b: "#14b8a6",
  },
  amber: {
    cls: "from-amber-300 via-amber-500 to-orange-500",
    a: "#fbbf24",
    b: "#f97316",
  },
  pink: {
    cls: "from-pink-400 via-rose-500 to-rose-600",
    a: "#f472b6",
    b: "#e11d48",
  },
};

/** Inline style that feeds `.panel-lit` its gradient border stops. */
export const litStyle = (name) => {
  const g = gradients[name] ?? gradients.cyan;
  return { "--lit-a": g.a, "--lit-b": g.b };
};

/** Tailwind classes for the gradient-filled icon tile. */
export const gradientClass = (name) => gradients[name]?.cls ?? gradients.cyan.cls;