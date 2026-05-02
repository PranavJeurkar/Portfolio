import { useEffect, useRef } from "react";

/** Toggles `reveal-visible` as the ref element enters and leaves the viewport. */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const { rootMargin = "0px 0px -8% 0px", threshold = 0.08 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.classList.add("reveal-visible");
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          en.target.classList.toggle("reveal-visible", en.isIntersecting);
        });
      },
      { root: null, rootMargin, threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, threshold]);

  return ref;
}
