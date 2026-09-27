"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollScenes } from "@/components/motion/ScrollScenes";
import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { MagneticButton } from "@/components/motion/MagneticButton";

// Custom SVG Icons matching the clean outline style from the reference cards, themed in champagne
function UiUxIcon({ className = "w-8 h-8 text-champagne-deep" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="3" width="20" height="13" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M5 6v7" />
      <path d="M5 8h2" />
      <path d="M5 11h2" />
      <path d="M9 6v7" />
      <path d="M14 13l4-4" />
      <path d="M17 7l1.5 1.5" />
    </svg>
  );
}

function WebDevIcon({ className = "w-8 h-8 text-champagne-deep" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="3" width="20" height="13" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <circle cx="8" cy="9.5" r="2" />
      <path d="M8 6.5v1M8 11.5v1M5 9.5h1M10 9.5h1" />
      <path d="M13 13l2-3 2 1.5 2-4" />
    </svg>
  );
}

function MobileAppIcon({ className = "w-8 h-8 text-champagne-deep" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M12 18h.01" />
      <path d="M9 5h6" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function PlatformsIcon({ className = "w-8 h-8 text-champagne-deep" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function EcommerceIcon({ className = "w-8 h-8 text-champagne-deep" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function AiAutomationIcon({ className = "w-8 h-8 text-champagne-deep" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  );
}

const SERVICES = [
  {
    number: "01",
    name: "Web & Digital Development",
    icon: WebDevIcon,
    description:
      "Custom, high-speed websites and web applications built with Next.js and TypeScript for instant page loads, stability, and dependable uptime.",
  },
  {
    number: "02",
    name: "UI/UX & Product Design",
    icon: UiUxIcon,
    description:
      "Straightforward, intuitive digital interfaces. We design natural user flows, accessible design systems, and layouts that make complex tools easy to use.",
  },
  {
    number: "03",
    name: "Mobile App Development",
    icon: MobileAppIcon,
    description:
      "Cross-platform mobile applications for iOS and Android, engineered with a unified codebase for consistent behavior and fast performance.",
  },
  {
    number: "04",
    name: "SaaS & Custom Platforms",
    icon: PlatformsIcon,
    description:
      "Bespoke cloud software, client portals, and internal tools designed specifically around your operational processes and data workflows.",
  },
  {
    number: "05",
    name: "E-Commerce Solutions",
    icon: EcommerceIcon,
    description:
      "Direct, reliable online stores with frictionless checkout experiences, clean product presentation, and robust payment integrations.",
  },
  {
    number: "06",
    name: "AI & Business Automation",
    icon: AiAutomationIcon,
    description:
      "Sensible automation workflows and custom AI integrations that eliminate repetitive manual tasks and connect your everyday business software.",
  },
];

export function HomeView() {
  return (
    <div className="w-full">
      {/* =====================================================================
          1. MASTER PINNED SCROLL SCENES (540svh Stage)
          Scans through 4 Narrative Beats:
          - Beat 0: Hero & Thesis (camera zoom 1.12, kinetic text rise)
          - Beat 1: What Sets Us Apart (4 cards stagger)
          - Beat 2: How We Turn Ideas Into Products (word brightening, 3 steps)
          - Beat 3: Who We Work With (client cards + handoff dwell)
          ===================================================================== */}
      <ScrollScenes />

      {/* =====================================================================
          2. CONTENT STREAM (Normal Flow Sections)
          Starts at relative z-20 with a 140px gradient fade rising over the
          pinned stage, matching the exact audit handoff architecture
          ===================================================================== */}
      <div id="content-stream" className="relative z-20 bg-bone">
        {/* 140px Handoff Gradient Fade Mask */}
        <div
          className="pointer-events-none absolute -top-35 left-0 right-0 h-35 bg-linear-to-b from-transparent to-bone"
          aria-hidden="true"
        />


        {/* Section B: Services & Capabilities (Wrapped in <Reveal>) */}
        <section
          id="services"
          className="relative border-b border-hairline section-spacing bg-bone overflow-hidden"
          aria-label="Services & Capabilities"
        >
          {/* Ambient Champagne Glow Orbs */}
          <div
            className="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-champagne-glow blur-3xl pointer-events-none opacity-40"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-champagne-glow blur-3xl pointer-events-none opacity-30"
            aria-hidden="true"
          />

          <div className="relative page-container space-y-10 md:space-y-14">
            <Reveal distance={20} duration={0.4}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-hairline">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                    <p className="type-label text-champagne-deep">Services &amp; Capabilities</p>
                  </div>
                  <h2 className="type-heading text-ink text-2xl sm:text-3xl md:text-4xl">
                    What we build, maintain, and grow.
                  </h2>
                  <p className="type-body-sm text-muted max-w-2xl leading-relaxed">
                    We engineer reliable digital products from the ground up, and continue helping
                    you optimize, automate, and improve them over time.
                  </p>
                </div>
                <div>
                  <MagneticButton href="/services" dataCursor="explore">
                    <span className="type-nav text-ink inline-flex items-center gap-1.5 hover:text-champagne-deep shrink-0 font-medium transition-colors">
                      View all services &amp; deliverables
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </Reveal>

            {/* Spotlight Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES.map((service) => {
                const IconComponent = service.icon;
                return (
                  <SpotlightCard
                    key={service.name}
                    dataCursor="explore"
                    className="rounded-2xl border border-hairline bg-white/70 backdrop-blur-xs shadow-xs hover:shadow-lg hover:border-champagne/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Link
                      href="/services"
                      className="group flex flex-col items-center text-center p-8 sm:py-10 sm:px-8 h-full"
                    >
                      {/* Frosted Champagne Icon Badge */}
                      <div className="relative w-16 h-16 rounded-full bg-champagne/10 border border-champagne/20 flex items-center justify-center mb-6 shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-champagne/15">
                        <IconComponent className="w-7 h-7 text-champagne-deep" />
                      </div>

                      {/* Title */}
                      <h3 className="type-title text-ink font-semibold tracking-tight mb-2.5 group-hover:text-champagne-deep transition-colors">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="type-body-sm text-muted leading-relaxed max-w-xs">
                        {service.description}
                      </p>

                      {/* View practice subtle indicator */}
                      <div className="mt-5 inline-flex items-center gap-1.5 type-nav text-xs text-champagne-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                        <span>View practice</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </div>
                    </Link>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section C: Final CTA (Wrapped in <Reveal>) */}
        <Reveal distance={24} duration={0.5}>
          <section
            id="contact"
            className="bg-surface-alt border-b border-hairline section-spacing"
            aria-label="Start a Conversation"
          >
            <div className="page-container">
              <div className="max-w-4xl space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  <p className="type-label text-champagne-deep">Start a Conversation</p>
                </div>

                <h2 className="type-heading text-ink text-2xl sm:text-3xl md:text-4xl">
                  Looking for a digital partner you can rely on for the long haul?
                </h2>

                <p className="type-body-sm text-muted text-base max-w-2xl leading-relaxed pt-2">
                  Whether you need to build a new platform from scratch, modernize an
                  existing system that has slowed down, or find dependable ongoing technical
                  support, we are here to help. Tell us about your business goals, and let&apos;s
                  have an open, practical discussion about the best way forward.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <MagneticButton href="/contact" dataCursor="contact">
                    <span className="type-button inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-ink text-bone hover:bg-champagne-deep text-center rounded-full transition-colors shadow-xs">
                      Start a Project
                    </span>
                  </MagneticButton>
                  <Link
                    href="/services"
                    className="type-nav text-ink hover:text-champagne-deep inline-flex items-center gap-1.5 self-center"
                  >
                    Or review our services
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
