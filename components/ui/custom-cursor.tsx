"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // ZERO MOBILE OVERHEAD: Strictly disable on touch or screens under 768px
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    if (isTouch) return;

    const container = containerRef.current;
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    const label = cursorLabelRef.current;
    if (!container || !dot || !ring || !label) return;

    // GPU-accelerated coordinate setters
    const setDotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });
    const setRingX = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power2.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power2.out" });

    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        container.style.opacity = "1";
      }
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    const onMouseEnter = () => {
      isVisible = true;
      container.style.opacity = "1";
    };

    const onMouseLeave = () => {
      isVisible = false;
      container.style.opacity = "0";
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor], a, button") as HTMLElement | null;

      if (target) {
        dot.style.transform = "scale(0)";
        const cursorType = target.getAttribute("data-cursor");
        if (cursorType) {
          label.textContent = cursorType;
          label.style.display = "block";
          ring.className =
            "fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-300 -ml-9 -mt-9 w-18 h-18 bg-ink text-bone shadow-xl scale-100 border border-champagne/40";
        } else {
          label.textContent = "";
          label.style.display = "none";
          ring.className =
            "fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-300 -ml-6 -mt-6 w-12 h-12 bg-champagne/20 border border-champagne-deep scale-100 backdrop-blur-[2px]";
        }
      } else {
        dot.style.transform = "scale(1)";
        label.textContent = "";
        label.style.display = "none";
        ring.className =
          "fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-300 -ml-4 -mt-4 w-8 h-8 border border-ink/25 scale-100";
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-9999 opacity-0 transition-opacity duration-300 hidden md:block"
      aria-hidden="true"
    >
      {/* Precision Core Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-ink transition-transform duration-150"
      />

      {/* Fluid Trailing Ring with Morphing Text */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-300 -ml-4 -mt-4 w-8 h-8 border border-ink/25 scale-100"
      >
        <span
          ref={cursorLabelRef}
          className="text-[10px] font-bold tracking-widest uppercase text-bone select-none hidden"
        />
      </div>
    </div>
  );
}
