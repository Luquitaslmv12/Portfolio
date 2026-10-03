/**
 * Ambient page background: aurora blobs, grid and grain.
 *
 * Fixed and non-interactive so it never affects layout or hit-testing.
 * Every animated layer animates only `transform` and `opacity`, which keeps
 * the whole stack on the compositor and off the main thread.
 * The reduced-motion media query in index.css freezes every animation.
 */
export default function AuroraBackground() {
  return (
    <div className="noise pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base wash */}
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgb(6_182_212/0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_85%_105%,rgb(124_58_237/0.14),transparent_65%)]" />

      {/* Aurora blobs */}
      <div className="animate-aurora absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-brand-500/20 blur-[110px]" />
      <div
        className="animate-aurora absolute -right-32 top-1/4 h-[30rem] w-[30rem] rounded-full bg-grape-500/20 blur-[120px]"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="animate-aurora absolute -bottom-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-mint-500/12 blur-[130px]"
        style={{ animationDelay: "-14s" }}
      />

      {/* Structure */}
      <div className="dot-grid absolute inset-0" />
      <div className="line-grid absolute inset-0 opacity-60" />

      {/* Vignette to keep content legible over the glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgb(5_7_13/0.75)_100%)]" />
    </div>
  );
}