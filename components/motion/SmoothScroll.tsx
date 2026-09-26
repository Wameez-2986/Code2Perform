"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // PERFORMANCE ENGINE: Only run JS wheel momentum on desktop with precise pointers.
    // Budget mobile phones (10fps - 50fps) utilize 100% native hardware momentum scroll.
    const isMobile = typeof window !== "undefined" && (window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches);
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || prefersReducedMotion) {
      // On mobile: Handle internal anchor links using native hardware smooth scroll
      const handleMobileAnchor = (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
        if (!target) return;
        const hash = target.getAttribute("href");
        if (!hash || hash === "#") return;
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      document.addEventListener("click", handleMobileAnchor);
      return () => document.removeEventListener("click", handleMobileAnchor);
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.0,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Frame-Locked RAF loop: Lenis renders within GSAP's internal ticker
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    // lagSmoothing(500, 33) prevents large lag spikes on lower frame rates
    gsap.ticker.lagSmoothing(500, 33);

    // Smooth Anchor Navigation on desktop
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;

      const hash = target.getAttribute("href");
      if (!hash || hash === "#") return;

      const targetEl = document.querySelector(hash);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl as HTMLElement, {
          offset: -64,
          duration: 1.4,
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
