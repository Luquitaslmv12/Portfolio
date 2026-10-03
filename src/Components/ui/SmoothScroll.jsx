/**
 * Smooth scrolling via Lenis.
 *
 * Mounted once at the app root. Lenis drives real window scrolling, so
 * `IntersectionObserver`, the scroll spy and anchor navigation keep working
 * normally while the input gets smoothed.
 *
 * Two behaviours are delegated to the library rather than reimplemented:
 *  - `anchors` makes every same-page `href="#id"` animate, with a negative
 *    offset so targets land below the fixed navbar instead of under it.
 *  - `respectReducedMotion` disables smoothing automatically for users who
 *    ask for it, so one instance adapts instead of branching in JS.
 */
import { useEffect } from "react";
import Lenis from "lenis";

/** Must match the navbar height plus breathing room. */
const ANCHOR_OFFSET = -96;

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: true,
      respectReducedMotion: true,
      anchors: { offset: ANCHOR_OFFSET, duration: 1.05 },
      touchMultiplier: 1.7,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}