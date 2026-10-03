import { useCallback, useEffect } from "react";

/**
 * Locks page scrolling while an overlay is open, so the content behind the
 * drawer can't move under the user's finger.
 */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;

    const previous = document.body.style.paddingRight;
    // Compensate for the removed scrollbar so the layout doesn't jump.
    const gap = window.innerWidth - document.documentElement.clientWidth;
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
    document.body.dataset.scrollLocked = "true";

    return () => {
      document.body.style.paddingRight = previous;
      delete document.body.dataset.scrollLocked;
    };
  }, [locked]);
}

/** Calls `onEscape` when Escape is pressed, while `active`. */
export function useEscapeKey(active, onEscape) {
  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onEscape();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [active, onEscape]);
}

/**
 * Feeds the cursor position into `--spot-x` / `--spot-y` so the `.spotlight`
 * radial gradient can follow the pointer.
 *
 * Writes straight to style properties on the event target: zero re-renders,
 * which is what keeps hover effects smooth on scroll-heavy pages.
 */
export function useSpotlight() {
  return useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--spot-x",
      `${event.clientX - rect.left}px`
    );
    event.currentTarget.style.setProperty(
      "--spot-y",
      `${event.clientY - rect.top}px`
    );
  }, []);
}
