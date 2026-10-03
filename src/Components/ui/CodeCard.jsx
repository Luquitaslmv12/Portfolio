import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { profile } from "../../data/profile";

/**
 * Syntax-coloured code block that types itself in on mount.
 *
 * Each line is tokenised up front, so the text keeps real highlighting while
 * still being revealed character by character — typing into a plain string
 * would force a choice between colour and the typing effect.
 */
const KW = "text-grape-400";
const PROP = "text-brand-300";
const STR = "text-mint-400";
const NUM = "text-amber-400";
const PUNC = "text-ink-500";
const NAME = "text-ink-100";

const LINES = [
  [
    { t: "export ", c: KW },
    { t: "const ", c: KW },
    { t: "developer", c: NAME },
    { t: " = {", c: PUNC },
  ],
  [
    { t: "  nombre", c: PROP },
    { t: ": ", c: PUNC },
    { t: `"${profile.name}"`, c: STR },
    { t: ",", c: PUNC },
  ],
  [
    { t: "  rol", c: PROP },
    { t: ": ", c: PUNC },
    { t: `"${profile.role}"`, c: STR },
    { t: ",", c: PUNC },
  ],
  [
    { t: "  stack", c: PROP },
    { t: ": [", c: PUNC },
    { t: '"React"', c: STR },
    { t: ", ", c: PUNC },
    { t: '"Node.js"', c: STR },
    { t: ", ", c: PUNC },
    { t: '"Firebase"', c: STR },
    { t: "],", c: PUNC },
  ],
  [
    { t: "  ubicacion", c: PROP },
    { t: ": ", c: PUNC },
    { t: `"${profile.location}"`, c: STR },
    { t: ",", c: PUNC },
  ],
  [
    { t: "  disponible", c: PROP },
    { t: ": ", c: PUNC },
    { t: "true", c: NUM },
    { t: ",", c: PUNC },
  ],
  [
    { t: " Resolver", c: NAME },
    { t: "(", c: PUNC },
    { t: "problema", c: NAME },
    { t: ") => ", c: PUNC },
    { t: '"tu idea"', c: STR },
    { t: ",", c: PUNC },
  ],
  [
    { t: "  coffee", c: PROP },
    { t: ": ", c: PUNC },
    { t: "Infinity", c: NUM },
  ],
  [{ t: "};", c: PUNC }],
];

/** Start offset and character length of each line in the flattened text. */
const LINE_META = (() => {
  let cursor = 0;
  return LINES.map((tokens) => {
    const len = tokens.reduce((sum, token) => sum + token.t.length, 0);
    const meta = { start: cursor, len };
    cursor += len + 1; // +1 for the newline
    return meta;
  });
})();

const TOTAL_CHARS = (() => {
  const last = LINE_META[LINE_META.length - 1];
  return last.start + last.len;
})();

const TYPE_INTERVAL_MS = 22;

export default function CodeCard({ className = "" }) {
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    // Render the finished block immediately for reduced-motion users.
    if (reduced) {
      setTyped(TOTAL_CHARS);
      return;
    }

    let count = 0;
    const id = window.setInterval(() => {
      count += 1;
      setTyped(count);
      if (count >= TOTAL_CHARS) window.clearInterval(id);
    }, TYPE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [reduced]);

  const done = typed >= TOTAL_CHARS;

  return (
    <div className={`panel panel-lit overflow-hidden rounded-2xl ${className}`}>
      <div className="relative z-10 flex items-center gap-2 border-b border-white/8 bg-white/4 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-mint-400/80" />
        <span className="ml-2 font-mono text-[0.7rem] text-ink-400">developer.js</span>
      </div>

      <div className="relative z-10 p-5 font-mono text-[0.78rem] leading-[1.9] sm:text-[0.85rem]">
        <pre className="overflow-x-auto">
          <code>
            {LINES.map((tokens, lineIndex) => {
              const { start, len } = LINE_META[lineIndex];
              let budget = Math.max(0, Math.min(typed - start, len));

              const visible = tokens
                .map((token) => {
                  const text = token.t.slice(0, budget);
                  budget -= token.t.length;
                  return text ? { ...token, t: text } : null;
                })
                .filter(Boolean);

              // Cursor rides the line currently being written.
              const showCursor = !done && typed >= start && typed < start + len;

              return (
                <span key={lineIndex} className="block min-h-[1.9em] whitespace-pre">
                  {visible.map((token, index) => (
                    <span key={index} className={token.c}>
                      {token.t}
                    </span>
                  ))}
                  {showCursor && (
                    <span className="ml-px inline-block h-[1.05em] w-[7px] translate-y-[0.18em] animate-blink bg-brand-400 align-middle" />
                  )}
                </span>
              );
            })}
          </code>
        </pre>

        {done && (
          <p className="mt-3 flex items-center gap-2 border-t border-white/8 pt-3 font-sans text-[0.72rem] text-ink-400">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint-400" />
            listo para trabajar juntos
          </p>
        )}
      </div>
    </div>
  );
}