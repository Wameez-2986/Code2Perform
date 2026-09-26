import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Custom SVG Icons matching the clean outline style from the reference cards, themed in champagne
function UiUxIcon({ className = "w-8 h-8 text-champagne-deep" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {/* Desktop screen */}
      <rect x="2" y="3" width="20" height="13" rx="2" />
      {/* Stand */}
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      {/* Ruler marks */}
      <path d="M5 6v7" />
      <path d="M5 8h2" />
      <path d="M5 11h2" />
      {/* Pencil / ruler divider */}
      <path d="M9 6v7" />
      {/* Pen tool drawing angle */}
      <path d="M14 13l4-4" />
      <path d="M17 7l1.5 1.5" />
    </svg>
  );
}

function WebDevIcon({ className = "w-8 h-8 text-champagne-deep" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {/* Desktop monitor */}
      <rect x="2" y="3" width="20" height="13" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      {/* Cog / Gear */}
      <circle cx="8" cy="9.5" r="2" />
      <path d="M8 6.5v1M8 11.5v1M5 9.5h1M10 9.5h1" />
      {/* Performance graph */}
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
          1. HERO SECTION — Exact reference match
          Centered composition: status pill / headline / paragraph / CTA buttons
          Background: bone color + subtle static dot texture (CSS only)
          ===================================================================== */}
      <section
        className="hero-texture border-b border-hairline"
        aria-label="Hero"
        style={{ paddingTop: "clamp(2.5rem, 5vw, 4.5rem)", paddingBottom: "clamp(4.5rem, 9vw, 8rem)" }}
      >
        <div className="page-container flex flex-col items-center text-center">

          {/* --- Status / Location Pill --- */}
          <div
            className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 px-4 py-2 bg-surface border border-hairline rounded-full shadow-sm mb-8 md:mb-12 max-w-full"
            role="status"
            aria-label="Hyderabad · Remote Worldwide — Accepting New Projects"
          >
            {/* Green status dot */}
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: "#22c55e" }}
              aria-hidden="true"
            />
            <span className="type-label text-ink tracking-widest">
              HYDERABAD · REMOTE WORLDWIDE
            </span>
            {/* Vertical divider — hidden when pill wraps */}
            <span
              className="w-px h-3.5 bg-hairline shrink-0 hidden sm:block"
              aria-hidden="true"
            />
            <span className="type-label text-muted tracking-wide">
              Accepting New Projects
            </span>
          </div>

          {/* --- Main Headline --- */}
          {/*
            TWO-LINE STRUCTURE
            Each line is an explicit display:block span with white-space:nowrap so
            the browser can never wrap within a line. The clamp scales the font
            down as the viewport narrows, preserving both lines for as long
            as possible before mobile reflow.
          */}
          <h1
            className="font-bold text-ink w-full mb-0"
            style={{
              fontSize: "clamp(2.25rem, 5.8vw, 5.25rem)",
              letterSpacing: "-0.03em",
              lineHeight: "1.08",
            }}
          >
          {/* Line 1 — nowrap on lg+, natural wrap on mobile */}
            <span className="block lg:whitespace-nowrap">
              We turn ideas into digital
            </span>
            {/* Line 2 — nowrap on lg+, natural wrap on mobile */}
            <span className="block lg:whitespace-nowrap">
              <span style={{ color: "var(--color-ink)" }}>experiences </span>
              <span style={{ color: "var(--color-champagne)" }}>that perform.</span>
            </span>
          </h1>

          {/* --- Supporting Paragraph --- */}
          <p
            className="text-muted leading-relaxed mt-16 mb-10 md:mb-12 max-w-xl"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
          >
            We combine strategy, design, and modern technology to build digital
            products that help businesses grow, connect, and move forward.
          </p>

          {/* --- CTA Buttons --- */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ink text-white font-medium rounded-full text-base hover:bg-champagne-deep"
            >
              Discuss a Project
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-surface border border-hairline text-ink font-medium rounded-full text-base hover:border-ink"
            >
              View Services
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================================================
          2. WHAT WE DO
          Editorial layout: Long-term partnership thesis & 3 substantive commitments
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="What We Do">
        <div className="page-container space-y-15 md:space-y-16">
          {/* Header Block: Section Label, Main Heading, Human Explanation */}
          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">What We Do</p>
            </div>

            <h2 className="type-heading text-ink">
              Digital solutions built around your business.
            </h2>

            <p className="type-body text-muted text-lg max-w-3xl leading-relaxed mt-8">
              We don’t just deliver projects—we build, support, and grow digital solutions with your business.
            </p>
          </div>

          {/* Asymmetric 2-Part Editorial Split */}
          <div className="pt-8 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Partnership Philosophy */}
            <div className="lg:col-span-5 space-y-10">
              <p className="type-label text-champagne">Our Working Model</p>
              <h3 className="type-heading text-2xl md:text-3xl text-ink">
                An agency that stays in your corner.
              </h3>
              <p className="type-body text-muted leading-relaxed mt-8">
                We build digital products to grow with your business—not just launch and disappear.
              </p>
            </div>

            {/* Right Column: 3 Concrete Pillars (Understand, Build, Support) */}
            <div className="lg:col-span-7 space-y-8 lg:pl-8 lg:border-l border-hairline">
              {/* Point 1: Understand */}
              <div className="space-y-3">
                <span className="type-label text-champagne-deep font-medium">
                  01 / We Understand Your Business Needs
                </span>
                <h4 className="type-title text-ink font-medium text-xl">
                  Solving the right problems before writing code
                </h4>
                <p className="type-body-sm text-muted leading-relaxed mt-3">
                  Before writing code or designing screens, we take the time to learn your
                  operational workflows, customer expectations, and commercial objectives.
                  By aligning on clear goals upfront, every technical decision directly supports
                  your business and eliminates costly rework.
                </p>
              </div>

              {/* Point 2: Build & Launch */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <span className="type-label text-champagne-deep font-medium">
                  02 / We Build &amp; Launch Useful Solutions
                </span>
                <h4 className="type-title text-ink font-medium text-xl">
                  Engineering fast, dependable tools people actually use
                </h4>
                <p className="type-body-sm text-muted leading-relaxed mt-3">
                  We design interfaces that feel natural and write lightweight, maintainable
                  Next.js and TypeScript code. From marketing sites and e-commerce stores to
                  custom client portals, everything we deploy is built for speed, stability,
                  and complete team ownership.
                </p>
              </div>

              {/* Point 3: Support & Grow */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <span className="type-label text-champagne-deep font-medium">
                  03 / We Help You Grow After Launch
                </span>
                <h4 className="type-title text-ink font-medium text-xl">
                  Ongoing maintenance, optimization, and automation
                </h4>
                <p className="type-body-sm text-muted leading-relaxed mt-3">
                  Deployment is only the beginning of our relationship. We monitor system
                  health, keep dependencies up to date, automate repetitive manual workflows,
                  and continuously refine features based on real user feedback as your
                  business expands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. HOW WE WORK
          Editorial process ledger: Understand, Plan, Build, Launch, Grow
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="How We Work">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">How We Work</p>
            </div>
            <h2 className="type-heading text-ink">
              A disciplined delivery process from discovery to launch—and beyond.
            </h2>
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              We believe great digital products come from open communication, sound
              engineering, and a clear step-by-step path. Here is how we collaborate
              from our first conversation through delivery and long-term growth.
            </p>
          </div>

          {/* Editorial Process Rows across the 5 delivery stages */}
          <div className="border-t border-b border-hairline">
            <div className="divide-y divide-hairline">
            {/* Step 1: Understand */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">01</span>
                <span className="type-label text-champagne-deep">Understand</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium">
                  We learn about your business, goals, and users
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted">
                  We begin by getting to the core of your business. We listen to your goals,
                  examine how your users interact with your services, and understand your
                  current technical and operational challenges so we solve the right problems
                  from day one.
                </p>
              </div>
            </div>

            {/* Step 2: Plan */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">02</span>
                <span className="type-label text-champagne-deep">Plan</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium">
                  We define the right solution, scope, and priorities
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted">
                  We define the appropriate technical architecture, establish clear priorities,
                  outline the exact scope of work, and agree on a transparent delivery plan.
                  You always know what is being built, why, and when to expect it.
                </p>
              </div>
            </div>

            {/* Step 3: Build */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">03</span>
                <span className="type-label text-champagne-deep">Build</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium">
                  We handle design, development, and testing
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted">
                  We design intuitive interfaces, write lightweight Next.js and TypeScript
                  code, connect third-party integrations, and test thoroughly across mobile
                  and desktop devices to ensure speed, stability, and accessibility.
                </p>
              </div>
            </div>

            {/* Step 4: Launch */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">04</span>
                <span className="type-label text-champagne-deep">Launch</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium">
                  We deploy and prepare the solution for real use
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted">
                  We manage production hosting setup, domain routing, and final performance
                  checks. We guide your team through the handoff, ensuring everyone is comfortable
                  and ready to run the product with complete confidence.
                </p>
              </div>
            </div>

            {/* Step 5: Grow */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">05</span>
                <span className="type-label text-champagne-deep">Grow</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium">
                  Long-term support and growth—whenever relevant
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted">
                  After launch, we can continue assisting with technical support, performance
                  optimization, workflow automation, SEO and content structure, and custom AI
                  solutions where relevant. We are available as your long-term partner when you
                  need us, with zero mandatory retainers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* =====================================================================
          4. SERVICES OVERVIEW
          Glassmorphism cards following the exact site theme, Satoshi typography,
          champagne accents, and frosted glass aesthetic
          ===================================================================== */}
      <section className="relative border-b border-hairline section-spacing bg-bone overflow-hidden" aria-label="Services & Capabilities">
        {/* Ambient champagne glow orbs to give frosted glass subtle refraction */}
        <div
          className="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-champagne-glow blur-3xl pointer-events-none opacity-60"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-champagne-glow blur-3xl pointer-events-none opacity-50"
          aria-hidden="true"
        />

        <div className="relative page-container space-y-12 md:space-y-16">
          {/* Section Header with Direct Link */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-hairline">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <p className="type-label text-champagne-deep">Services &amp; Capabilities</p>
              </div>
              <h2 className="type-heading text-ink">
                What we build, maintain, and grow.
              </h2>
              <p className="type-body text-muted max-w-2xl leading-relaxed">
                We engineer reliable digital products from the ground up, and when appropriate,
                we continue helping you optimize, automate, and improve them over time.
              </p>
            </div>
            <div>
              <Link
                href="/services"
                className="type-nav text-ink inline-flex items-center gap-1.5 hover:text-champagne-deep shrink-0 font-medium"
              >
                View all services &amp; deliverables
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Glassmorphism Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.name}
                  href="/services"
                  className="group relative flex flex-col items-center text-center p-8 sm:py-12 sm:px-8 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 shadow-[0_8px_32px_0_rgba(22,21,15,0.04)] hover:shadow-[0_16px_40px_rgba(22,21,15,0.08)] hover:bg-white/80 hover:border-champagne/40 hover:-translate-y-1.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 overflow-hidden"
                >
                  {/* Subtle top edge glass light reflection */}
                  <div
                    className="absolute inset-x-0 top-0 h-24 rounded-t-2xl bg-linear-to-b from-white/60 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Frosted Champagne Icon Badge */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-champagne/10 border border-champagne/20 backdrop-blur-sm flex items-center justify-center mb-6 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-champagne/15">
                    <IconComponent className="w-8 h-8 text-champagne-deep" />
                  </div>

                  {/* Title (Satoshi Type-Title) */}
                  <h3 className="type-title text-xl sm:text-2xl text-ink font-semibold tracking-tight mb-3 group-hover:text-champagne-deep transition-colors">
                    {service.name}
                  </h3>

                  {/* Centered Description (Satoshi Type-Body-Sm) */}
                  <p className="type-body-sm text-muted leading-relaxed max-w-xs">
                    {service.description}
                  </p>

                  {/* View practice subtle indicator */}
                  <div className="mt-5 inline-flex items-center gap-1.5 type-nav text-xs text-champagne-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    <span>View practice</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. FINAL CTA
          Warm editorial invitation: distinct tonal background, simple human language,
          emphasizing long-term partnership and honest consultation
          ===================================================================== */}
      <section className="bg-surface-alt border-b border-hairline section-spacing" aria-label="Start a Conversation">
        <div className="page-container">
          <div className="max-w-4xl space-y-8">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Start a Conversation</p>
            </div>

            {/* Strong Heading */}
            <h2 className="type-heading text-ink">
              Looking for a digital partner you can rely on for the long haul?
            </h2>

            {/* Short Supporting Text */}
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed pt-3 md:pt-5">
              Whether you need to build a new platform from scratch, modernize an
              existing system that has slowed down, or find dependable ongoing technical
              support, we are here to help. Tell us about your business goals, and let&apos;s
              have an open, practical discussion about the best way forward. No pressure,
              no aggressive sales pitches—just an honest conversation between professionals.
            </p>

            {/* Contact CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="type-button inline-flex items-center justify-center w-full sm:w-auto px-7 py-4 bg-ink text-bone hover:bg-champagne-deep text-center"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="type-nav text-ink hover:text-champagne-deep inline-flex items-center gap-1.5"
              >
                Or review our services
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
