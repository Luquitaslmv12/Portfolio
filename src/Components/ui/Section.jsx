import Reveal from "./Reveal";

/**
 * Section shell with a consistent heading block.
 *
 * `title` + `accent` compose the heading, with the accent rendered in gradient
 * text: title="Proyectos" accent="seleccionados".
 */
export default function Section({
  id,
  eyebrow,
  title,
  accent,
  description,
  children,
  align = "center",
  className = "",
  headingExtra = null,
}) {
  const headingId = `${id}-title`;
  const centered = align === "center";

  return (
    <section
      id={id}
      className={`anchor section-pad relative ${className}`}
      aria-labelledby={headingId}
    >
      <div className="shell">
        <Reveal
          className={`flex flex-col gap-4 ${
            centered ? "items-center text-center" : "items-start text-left"
          } mb-12 sm:mb-16`}
        >
          {eyebrow && (
            <span className="eyebrow">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-brand-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
              {eyebrow}
            </span>
          )}

          <h2 id={headingId} className="display-2 text-ink-50">
            {title}
            {accent && (
              <>
                {" "}
                <span className="gradient-text">{accent}</span>
              </>
            )}
          </h2>

          {description && (
            <p className={`lede ${centered ? "mx-auto" : ""}`}>{description}</p>
          )}

          {headingExtra}
        </Reveal>

        {children}
      </div>
    </section>
  );
}