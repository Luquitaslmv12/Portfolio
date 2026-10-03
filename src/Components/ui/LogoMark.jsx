import { profile } from "../../data/profile";

/**
 * Brand monogram. Matches /icon-lv.svg so the header and the browser tab
 * icon stay visually identical.
 */
export default function LogoMark({ size = 40, withWordmark = true, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="relative grid shrink-0 place-items-center rounded-[0.7rem] font-display font-extrabold leading-none text-white shadow-lg shadow-brand-500/25"
        style={{
          width: size,
          height: size,
          fontSize: size * 0.4,
          backgroundImage: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
        }}
        aria-hidden="true"
      >
        {profile.initials}
      </span>

      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[0.95rem] font-bold tracking-tight text-ink-50 sm:text-base">
            {profile.name}
          </span>
          <span className="mt-1 font-mono text-[0.65rem] tracking-[0.14em] text-ink-400 uppercase sm:text-[0.7rem]">
            {profile.role}
          </span>
        </span>
      )}
    </span>
  );
}