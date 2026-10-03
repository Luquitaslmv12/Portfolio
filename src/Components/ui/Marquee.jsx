/**
 * Infinite horizontal ticker.
 *
 * The track holds the item list twice and animates `translateX(-50%)`, which
 * lands exactly on the start of the second copy — so the loop is seamless with
 * no measuring, cloning callbacks or scroll listeners.
 */
export default function Marquee({ items, className = "" }) {
  return (
    <div className={`mask-fade-x group relative overflow-hidden ${className}`}>
      <div className="animate-marquee flex w-max items-center gap-4 group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={copy === 1}>
            {items.map((item) => (
              <li key={`${copy}-${item}`} className="chip">
                <span className="h-1 w-1 rounded-full bg-brand-400/70" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}