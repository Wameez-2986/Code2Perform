"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const beadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile phone view (< 768px)
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const bar = barRef.current;
    const bead = beadRef.current;
    if (!bar) return;

    let ticking = false;

    const onScroll = () => {
      if (window.innerWidth < 768) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;

          bar.style.transform = `scaleX(${progress}) translateZ(0)`;

          if (bead) {
            bead.style.opacity = progress > 0.005 ? "1" : "0";
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-100 h-0.75 pointer-events-none bg-hairline/30 hidden md:block"
      aria-hidden="true"
    >
      {/* 3px Progress Bar */}
      <div
        ref={barRef}
        className="h-full w-full bg-linear-to-r from-champagne to-champagne-deep origin-left will-change-transform transform-gpu"
        style={{ transform: "scaleX(0) translateZ(0)" }}
      >
        {/* Leading Luminous Bead */}
        <div
          ref={beadRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-champagne-deep shadow-[0_0_8px_rgba(168,134,74,0.8)] opacity-0 transition-opacity duration-150"
        />
      </div>
    </div>
  );
}
