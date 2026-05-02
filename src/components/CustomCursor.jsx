import { useEffect } from "react";

const LERP = 0.2;
const BASE_R = 10;
const HOVER_R = 34;

export function CustomCursor() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduced || !fine) return undefined;

    document.documentElement.classList.add("custom-cursor-active");

    const el = document.createElement("div");
    el.className = "custom-cursor";
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);

    const state = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      r: BASE_R,
      targetR: BASE_R,
    };

    const onMove = (e) => {
      state.tx = e.clientX;
      state.ty = e.clientY;
    };

    const selector =
      "a, button, [role='button'], input, textarea, select, .skill-card, .project-card, .theme-toggle";
    const setHover = (e, hover) => {
      const t = e.target;
      if (t && typeof t.closest === "function" && t.closest(selector)) {
        state.targetR = hover ? HOVER_R : BASE_R;
      }
    };

    const onOver = (e) => setHover(e, true);
    const onOut = (e) => {
      const rel = e.relatedTarget;
      if (!rel || !rel.closest?.(selector)) state.targetR = BASE_R;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, true);
    document.addEventListener("pointerout", onOut, true);

    let frame = 0;
    const tick = () => {
      state.x += (state.tx - state.x) * LERP;
      state.y += (state.ty - state.y) * LERP;
      state.r += (state.targetR - state.r) * 0.12;
      el.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%)`;
      const d = state.r * 2;
      el.style.width = `${d}px`;
      el.style.height = `${d}px`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver, true);
      document.removeEventListener("pointerout", onOut, true);
      document.documentElement.classList.remove("custom-cursor-active");
      el.remove();
    };
  }, []);

  return null;
}
