"use client";

import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SCENES_DATA } from "@/content/scenes";
import { SCENE_CONFIG } from "@/lib/scenes";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function ScrollScenes() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);

  // Beat element references
  const beat0Ref = useRef<HTMLDivElement>(null);
  const beat1Ref = useRef<HTMLDivElement>(null);
  const beat2Ref = useRef<HTMLDivElement>(null);
  const beat3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const wrapper = wrapperRef.current;
      const stage = stageRef.current;
      const counter = counterRef.current;
      const scrollCue = scrollCueRef.current;
      const camera = cameraRef.current;

      const b0 = beat0Ref.current;
      const b1 = beat1Ref.current;
      const b2 = beat2Ref.current;
      const b3 = beat3Ref.current;

      if (!wrapper || !stage || !b0 || !b1 || !b2 || !b3) return;

      const mm = gsap.matchMedia();

      // =====================================================================
      // TIER 1: DESKTOP & LAPTOPS (Full 540svh Pinned Timeline with Camera Drift)
      // =====================================================================
      mm.add("(min-width: 1024px) and (pointer: fine)", () => {
        // Master Timeline pinned across 540svh
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom bottom",
            pin: stage,
            pinSpacing: false,
            scrub: SCENE_CONFIG.scrubSmoothing,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (!counter) return;
              const p = self.progress;
              if (p < 0.23) {
                counter.textContent = "01 / 04";
              } else if (p < 0.48) {
                counter.textContent = "02 / 04";
              } else if (p < 0.73) {
                counter.textContent = "03 / 04";
              } else {
                counter.textContent = "04 / 04";
              }
            },
          },
        });

        // Initial Scene visibility
        gsap.set(b0, { autoAlpha: 1 });
        gsap.set([b1, b2, b3], { autoAlpha: 0 });

        // Camera drift & zoom across scroll
        if (camera) {
          tl.to(camera, {
            scale: SCENE_CONFIG.cameraZoom,
            xPercent: SCENE_CONFIG.cameraDrift,
            ease: "none",
            duration: 4,
          }, 0);
        }

        // --- BEAT 0: Hero Exit ---
        if (scrollCue) {
          tl.to(scrollCue, { autoAlpha: 0, duration: 0.15 }, 0.05);
        }

        tl.to(b0, {
          y: -40,
          autoAlpha: 0,
          duration: 0.35,
          ease: "power2.inOut",
        }, 0.75);

        // --- BEAT 1: What Sets Us Apart ---
        const b1Cards = b1.querySelectorAll(".beat1-card");
        tl.fromTo(
          b1,
          { autoAlpha: 0, y: 36 },
          { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
          0.9
        );

        if (b1Cards.length > 0) {
          tl.fromTo(
            b1Cards,
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, stagger: 0.04, duration: 0.3, ease: "power2.out" },
            1.0
          );
        }

        tl.to(b1, {
          y: -45,
          autoAlpha: 0,
          duration: 0.35,
          ease: "power2.inOut",
        }, 1.75);

        // --- BEAT 2: How We Turn Ideas ---
        const b2Words = b2.querySelectorAll(".beat2-word");
        const b2Steps = b2.querySelectorAll(".beat2-step");

        tl.fromTo(
          b2,
          { autoAlpha: 0, y: 36 },
          { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
          1.9
        );

        if (b2Words.length > 0) {
          tl.fromTo(
            b2Words,
            { opacity: 0.22 },
            { opacity: 1, stagger: 0.035, duration: 0.25, ease: "power1.out" },
            2.0
          );
        }

        if (b2Steps.length > 0) {
          tl.fromTo(
            b2Steps,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.35, ease: "power2.out" },
            2.15
          );
        }

        tl.to(b2, {
          y: -45,
          autoAlpha: 0,
          duration: 0.35,
          ease: "power2.inOut",
        }, 2.75);

        // --- BEAT 3: Who We Work With ---
        const b3Cards = b3.querySelectorAll(".beat3-card");

        tl.fromTo(
          b3,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
          2.9
        );

        if (b3Cards.length > 0) {
          tl.fromTo(
            b3Cards,
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, stagger: 0.04, duration: 0.35, ease: "power1.out" },
            3.05
          );
        }

        // Handoff dwell to the end of 540svh
        tl.to(b3, { y: -20, duration: 0.8, ease: "none" }, 3.8);
      });

      // =====================================================================
      // TIER 2: MOBILE & TOUCH DEVICES (10 FPS - 50 FPS Safe Zero-Hang Architecture)
      // =====================================================================
      mm.add("(max-width: 1023px), (pointer: coarse)", () => {
        // On mobile: Completely disable 540svh pinning and continuous scrub
        // Reveal beats naturally as user scrolls using low-overhead discrete triggers
        gsap.set([b0, b1, b2, b3], { autoAlpha: 1, y: 0 });
        const b2Words = b2.querySelectorAll(".beat2-word");
        if (b2Words.length > 0) {
          gsap.set(b2Words, { opacity: 1 });
        }
      });
    },
    { scope: wrapperRef }
  );

  return (
    <div
      ref={wrapperRef}
      id="home"
      className="relative w-full lg:h-[540svh]"
      aria-label="Interactive Presentation"
    >
      {/* Pinned Stage on Desktop (h-svh), Natural Vertical Flow on Mobile (h-auto) */}
      <div
        ref={stageRef}
        className="relative lg:sticky top-0 h-auto lg:h-svh w-full overflow-hidden hero-texture flex flex-col justify-center"
      >
        {/* Background Camera Drift Container (GPU Composited) */}
        <div
          ref={cameraRef}
          className="absolute inset-0 pointer-events-none will-change-transform transform-gpu"
        >
          {/* Ambient Radial Champagne Glows */}
          <div className="absolute -top-32 left-1/4 w-72 md:w-xl h-72 md:h-144 rounded-full bg-champagne-glow blur-2xl md:blur-3xl opacity-40 md:opacity-50" />
          <div className="absolute top-1/2 -right-32 w-64 md:w-lg h-64 md:h-128 rounded-full bg-champagne-glow blur-2xl md:blur-3xl opacity-30 md:opacity-40" />
        </div>

        {/* Dynamic Scene Counter (Desktop Only) */}
        <div className="absolute bottom-8 right-8 z-30 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/80 border border-hairline backdrop-blur-xs shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne-deep" />
          <span
            ref={counterRef}
            className="text-xs font-mono font-medium text-ink tracking-wider"
          >
            01 / 04
          </span>
        </div>

        {/* =================================================================
            BEAT 0: Hero & Primary Thesis
            ================================================================= */}
        <div
          ref={beat0Ref}
          className="relative lg:absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-16 lg:py-0 z-20"
        >
          <div className="max-w-4xl flex flex-col items-center">
            {/* Live Status Pill */}
            <div
              className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 px-4 py-2 bg-surface border border-hairline rounded-full shadow-xs mb-6 md:mb-10"
              role="status"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="type-label text-ink tracking-widest text-[10px] sm:text-xs">
                {SCENES_DATA.beat0.pill}
              </span>
              <span className="w-px h-3.5 bg-hairline hidden sm:block" />
              <span className="type-label text-muted tracking-wide text-[10px] sm:text-xs">
                {SCENES_DATA.beat0.pillStatus}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-bold text-ink w-full mb-0 tracking-tight leading-[1.12] text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">
                {SCENES_DATA.beat0.titleLine1}
              </span>
              <span className="block text-champagne-deep">
                {SCENES_DATA.beat0.titleLine2}
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-muted leading-relaxed mt-5 md:mt-6 mb-7 md:mb-8 max-w-xl text-sm sm:text-base md:text-lg">
              {SCENES_DATA.beat0.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <MagneticButton href="#contact" dataCursor="contact" className="w-full sm:w-auto">
                <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ink text-white font-medium rounded-full text-sm sm:text-base hover:bg-champagne-deep transition-colors shadow-xs w-full sm:w-auto">
                  Discuss a Project
                  <ArrowRight className="h-4 w-4" />
                </span>
              </MagneticButton>

              <MagneticButton href="#services" dataCursor="view" className="w-full sm:w-auto">
                <span className="inline-flex items-center justify-center px-7 py-3.5 bg-surface border border-hairline text-ink font-medium rounded-full text-sm sm:text-base hover:border-ink transition-colors w-full sm:w-auto">
                  View Services
                </span>
              </MagneticButton>
            </div>
          </div>

          {/* Scroll Cue Pulse (Desktop Only) */}
          <div
            ref={scrollCueRef}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-muted">
              Scroll to explore
            </span>
            <div className="w-[1.5px] h-6 bg-champagne-deep animate-pulse" />
          </div>
        </div>

        {/* =================================================================
            BEAT 1: What Sets Us Apart
            ================================================================= */}
        <div
          ref={beat1Ref}
          className="relative lg:absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-12 lg:py-0 z-20 pointer-events-auto border-t lg:border-t-0 border-hairline"
        >
          <div className="page-container max-w-5xl space-y-6 md:space-y-8">
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <p className="type-label text-champagne-deep">{SCENES_DATA.beat1.label}</p>
              </div>
              <h2 className="type-heading text-ink text-xl sm:text-3xl md:text-4xl">
                {SCENES_DATA.beat1.heading}
              </h2>
              <p className="type-body-sm text-muted max-w-xl mx-auto text-xs sm:text-sm">
                {SCENES_DATA.beat1.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-left">
              {SCENES_DATA.beat1.cards.map((c) => (
                <div
                  key={c.id}
                  className="beat1-card p-5 md:p-6 rounded-2xl bg-surface/85 border border-hairline shadow-xs flex flex-col justify-between space-y-2 md:space-y-3"
                >
                  <span className="text-[10px] md:text-[11px] font-mono font-medium text-champagne-deep">
                    {c.tag}
                  </span>
                  <h3 className="type-title text-ink font-semibold text-base md:text-lg">
                    {c.title}
                  </h3>
                  <p className="type-body-sm text-muted text-xs leading-relaxed">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================================
            BEAT 2: How We Turn Ideas Into Products
            ================================================================= */}
        <div
          ref={beat2Ref}
          className="relative lg:absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-12 lg:py-0 z-20 pointer-events-auto border-t lg:border-t-0 border-hairline"
        >
          <div className="page-container max-w-5xl space-y-6 md:space-y-8">
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <p className="type-label text-champagne-deep">{SCENES_DATA.beat2.label}</p>
              </div>
              <h2 className="type-heading text-ink text-xl sm:text-3xl md:text-4xl max-w-2xl mx-auto flex flex-wrap justify-center gap-x-[0.25em]">
                {SCENES_DATA.beat2.heading.split(" ").map((w, i) => (
                  <span key={i} className="beat2-word inline-block lg:opacity-25">
                    {w}
                  </span>
                ))}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
              {SCENES_DATA.beat2.steps.map((s) => (
                <div
                  key={s.id}
                  className="beat2-step p-5 md:p-6 rounded-2xl bg-surface/85 border border-hairline shadow-xs space-y-2 md:space-y-3"
                >
                  <span className="text-[10px] md:text-[11px] font-mono font-semibold text-champagne-deep">
                    {s.step}
                  </span>
                  <h3 className="type-title text-ink font-semibold text-base md:text-lg">
                    {s.title}
                  </h3>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================================
            BEAT 3: Who We Work With
            ================================================================= */}
        <div
          ref={beat3Ref}
          className="relative lg:absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-12 lg:py-0 z-20 pointer-events-auto border-t lg:border-t-0 border-hairline"
        >
          <div className="page-container max-w-5xl space-y-6 md:space-y-8">
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <p className="type-label text-champagne-deep">{SCENES_DATA.beat3.label}</p>
              </div>
              <h2 className="type-heading text-ink text-xl sm:text-3xl md:text-4xl">
                {SCENES_DATA.beat3.heading}
              </h2>
              <p className="type-body-sm text-muted max-w-xl mx-auto text-xs sm:text-sm">
                {SCENES_DATA.beat3.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-left">
              {SCENES_DATA.beat3.cards.map((c) => (
                <div
                  key={c.id}
                  className="beat3-card p-5 md:p-6 rounded-2xl bg-surface/85 border border-hairline shadow-xs flex flex-col justify-between space-y-2 md:space-y-3 group hover:border-champagne-deep/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] md:text-[11px] font-mono font-semibold text-champagne-deep">
                      {c.tag}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="type-title text-ink font-semibold text-base md:text-lg">
                    {c.title}
                  </h3>
                  <p className="type-body-sm text-muted text-xs leading-relaxed">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
