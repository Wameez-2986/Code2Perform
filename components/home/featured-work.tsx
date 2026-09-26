"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/magnetic-button";

interface Project {
  id: string;
  title: string;
  category: string;
  deliverables: string;
  metrics: string;
  image: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Aurum Wealth",
    category: "FinTech Platform",
    deliverables: "Architecture · Next.js · High-Frequency Data",
    metrics: "Sub-45ms latency · $2.4M AUM Live Feed",
    image: "/images/projects/fintech.jpg",
    description:
      "Enterprise wealth management portal engineered for real-time asset allocation tracking, precision charting, and instant liquidity reporting.",
  },
  {
    id: "02",
    title: "Synapse Neural Flow",
    category: "AI & Cloud Infrastructure",
    deliverables: "UI/UX System · Neural Pipeline · Cloud Workflows",
    metrics: "98.4% Accuracy · 710+ Hours Saved / Mo",
    image: "/images/projects/ai-platform.jpg",
    description:
      "Glassmorphic neural workflow system unifying automated data ingestion, model validation, and cross-departmental operations.",
  },
  {
    id: "03",
    title: "Archetype Maison",
    category: "Luxury Digital Commerce",
    deliverables: "Design System · Custom Storefront · Performance",
    metrics: "+148% Conversion · 99/100 Core Web Vitals",
    image: "/images/projects/ecommerce.jpg",
    description:
      "Architectural digital flagship balancing minimalist Swiss editorial aesthetics with instant server-rendered checkout flows.",
  },
];

export function FeaturedWork() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isDesktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (isDesktop && !prefersReducedMotion) {
        // Desktop: High-ticket smooth image parallax scrub
        cardsRef.current.forEach((card) => {
          if (!card) return;
          const img = card.querySelector(".project-img");
          if (!img) return;

          gsap.fromTo(
            img,
            { yPercent: -7, scale: 1.08 },
            {
              yPercent: 7,
              scale: 1.0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        });
      } else {
        // Mobile (10fps - 50fps zero-hang): Simple one-shot entrance without continuous scrub
        cardsRef.current.forEach((card) => {
          if (!card) return;
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="border-b border-hairline section-spacing bg-surface relative overflow-hidden"
      aria-label="Selected Engineering Work"
    >
      <div className="page-container space-y-10 md:space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-hairline">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Selected Work · High Impact</p>
            </div>
            {/* Small, refined heading per client specification */}
            <h2 className="type-heading text-ink">
              Crafted for reliability, speed, and real revenue.
            </h2>
            <p className="type-body-sm text-muted max-w-xl">
              Every system is engineered from clean foundations to deliver rapid load speeds,
              robust architectures, and effortless client operations.
            </p>
          </div>

          <MagneticButton
            href="/services"
            className="self-start md:self-auto"
            dataCursor="view"
          >
            <span className="type-nav text-ink hover:text-champagne-deep inline-flex items-center gap-2 border-b border-hairline pb-1 font-medium transition-colors">
              Explore all capabilities
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </MagneticButton>
        </div>

        {/* Featured Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              data-cursor="explore"
              className="group flex flex-col justify-between bg-surface-alt/40 border border-hairline rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-champagne/50"
            >
              {/* Image Frame with Overflow Hidden for GSAP Parallax Scrub */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-hairline/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="project-img object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-bone/90 backdrop-blur-md text-[11px] font-medium tracking-wide text-ink border border-hairline shadow-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 md:p-7 flex flex-col flex-1 justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-champagne-deep tracking-widest uppercase">
                      {project.id} / DELIVERABLE
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-champagne/15 text-champagne-deep font-medium border border-champagne/20">
                      {project.metrics}
                    </span>
                  </div>

                  <h3 className="type-title text-ink font-semibold group-hover:text-champagne-deep transition-colors">
                    {project.title}
                  </h3>

                  <p className="type-body-sm text-muted leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-hairline flex items-center justify-between text-xs text-muted">
                  <span className="truncate max-w-50">{project.deliverables}</span>
                  <span className="type-nav text-ink font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Case brief <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
