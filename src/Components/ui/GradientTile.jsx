import { gradientClass } from "../../lib/gradients";

const SIZES = {
  sm: { box: "h-10 w-10 rounded-xl", icon: 18 },
  md: { box: "h-12 w-12 rounded-[0.9rem]", icon: 22 },
  lg: { box: "h-14 w-14 rounded-2xl", icon: 26 },
};

/** Gradient-filled icon tile used across services, strengths and channels. */
export default function GradientTile({ Icon, gradient = "cyan", size = "md", className = "" }) {
  const { box, icon } = SIZES[size] ?? SIZES.md;

  return (
    <span
      className={`grid shrink-0 place-items-center bg-gradient-to-br ${gradientClass(gradient)} text-white shadow-lg shadow-black/30 ring-1 ring-white/20 ${box} ${className}`}
    >
      <Icon size={icon} strokeWidth={1.9} />
    </span>
  );
}