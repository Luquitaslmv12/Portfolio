import { useEffect, useRef, useState } from "react";

/** Height of the fixed navbar + breathing room. */
const NAV_OFFSET = 110;

/**
 * Scroll spy that highlights the section currently under the navbar.
 *
 * IntersectionObserver is unreliable here: sections are far taller than the
 * viewport, so the observed "is intersecting" state flips at arbitrary points.
 * Measuring section tops against the scroll position is both simpler and exact.
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  // Keep the latest ids without re-subscribing on every render.
  const key = sectionIds.join("|");
  const idsRef = useRef(sectionIds);
  idsRef.current = sectionIds;

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const ids = idsRef.current;
      if (!ids.length) return;

      const scrolledToBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      // At the page bottom the last section can never reach the offset,
      // so activate it explicitly.
      if (scrolledToBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= NAV_OFFSET) current = id;
      }
      setActive(current);
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [key]);

  return active;
}
