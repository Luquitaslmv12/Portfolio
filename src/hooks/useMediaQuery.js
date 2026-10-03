import { useEffect, useState } from "react";

/**
 * SSR-safe media query subscription. Reads the initial value synchronously
 * so the first render already matches the viewport (no flash of wrong layout).
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);

    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export const useIsMobile = () => useMediaQuery("(max-width: 767px)");

export const useIsTablet = () => useMediaQuery("(max-width: 1023px)");

export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)");

export const useReducedMotion = () =>
  useMediaQuery("(prefers-reduced-motion: reduce)");

/** True on touch devices — gates hover-only effects like cursor spotlights. */
export const useFinePointer = () => useMediaQuery("(hover: hover) and (pointer: fine)");
