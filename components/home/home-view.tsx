import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Palette,
  Smartphone,
  Layers,
  ShoppingBag,
  Cpu,
} from "lucide-react";

const SERVICES = [
  {
    number: "01",
    name: "Web & Digital Development",
    icon: Globe,
    description:
      "Custom, high-speed websites and web applications built with Next.js and TypeScript. Clean code, sub-second page loads, and dependable uptime.",
  },
  {
    number: "02",
    name: "UI/UX & Product Design",
    icon: Palette,
    description:
      "Straightforward, intuitive digital interfaces. We focus on clear typography, natural user flows, and purposeful layouts that make complex tools easy to use.",
  },
  {
    number: "03",
    name: "Mobile App Development",
    icon: Smartphone,
    description:
      "Cross-platform mobile applications for iOS and Android. Engineered with a unified codebase for consistent behavior, fast performance, and simple maintenance.",
  },
  {
    number: "04",
    name: "SaaS & Custom Platforms",
    icon: Layers,
    description:
      "Bespoke cloud software, client portals, and internal business tools designed specifically around your operational processes and data workflows.",
  },
  {
    number: "05",
    name: "E-Commerce Solutions",
    icon: ShoppingBag,
    description:
      "Direct, reliable online stores with frictionless checkout experiences, clean product presentation, and robust payment and inventory integrations.",
  },
  {
    number: "06",
    name: "AI & Business Automation",
    icon: Cpu,
    description:
      "Sensible automation workflows and AI integrations that eliminate repetitive manual tasks and connect your everyday business software seamlessly.",
  },
];

export function HomeView() {
  return (
    <div className="w-full">
      {/* =====================================================================
          1. HERO SECTION
          Asymmetric display statement with two-column bottom split
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Hero">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Top Row: Editorial Label & Status */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">
                Code2Perform — Digital Agency &amp; Web Engineering
              </p>
            </div>
            <p className="type-legal text-muted">
              Accepting Select Engagements
            </p>
          </div>

          {/* Strong Main Heading */}
          <div className="max-w-5xl">
            <h1 className="type-display text-ink">
              We design and engineer high-performance websites for companies that refuse to compromise.
            </h1>
          </div>

          {/* Middle Two-Column Grid: Human Narrative & Action Triggers */}
          <div className="pt-8 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="type-body text-ink font-medium text-lg leading-relaxed">
                Code2Perform is an independent digital agency. We build fast, custom
                websites and web platforms for ambitious founders, growing businesses,
                and established brands.
              </p>
              <p className="type-body text-muted leading-relaxed">
                When generic templates, slow loading speeds, and fragile code hold
                your business back, we step in. We combine disciplined software engineering,
                editorial interface design, and direct senior-level collaboration to give
                your company a digital presence that actually performs.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start gap-4 lg:pl-8">
              <Link
                href="/contact"
                className="type-button inline-flex items-center justify-center w-full sm:w-auto lg:w-full px-6 py-4 bg-ink text-bone hover:bg-champagne-deep text-center"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="type-nav inline-flex items-center justify-center gap-2 w-full sm:w-auto lg:w-full px-6 py-3.5 border border-hairline text-ink hover:border-ink text-center"
              >
                Explore Our Services
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Lower Tripartite Editorial Rubric: What, Who, Standard */}
          <div className="pt-8 border-t border-hairline grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="type-label text-champagne-deep">What We Do</p>
              <p className="type-body-sm text-ink">
                Custom Web Applications, High-Performance Marketing Sites, &amp; Technical Architecture.
              </p>
            </div>

            <div className="space-y-2">
              <p className="type-label text-champagne-deep">Who We Help</p>
              <p className="type-body-sm text-ink">
                Founders, Scaling Technology Teams, &amp; Companies Outgrowing Standard Website Builders.
              </p>
            </div>

            <div className="space-y-2">
              <p className="type-label text-champagne-deep">Why Work With Us</p>
              <p className="type-body-sm text-ink">
                Direct Senior Engineering, Zero Bloated Plugins, &amp; Measured Core Web Vitals Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. WHAT WE DO
          Editorial layout: Strong heading, human explanation, 3 supporting points
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="What We Do">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Header Block: Section Label, Main Heading, Human Explanation */}
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">What We Do</p>
            </div>

            <h2 className="type-heading text-ink">
              We turn your ideas and business needs into useful digital products.
            </h2>

            <p className="type-body text-muted text-lg max-w-3xl leading-relaxed">
              Every business has real challenges to solve—whether that means launching
              a new service, fixing a website that feels outdated, or building a custom
              tool your customers can rely on every day. We listen closely to what your
              business actually requires, cut out the clutter, and build clean, fast,
              and dependable software that delivers real value.
            </p>
          </div>

          {/* Supporting Points: Architectural 3-Column Matrix (Not Cards) */}
          <div className="pt-8 border-t border-hairline grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-hairline">
            {/* Point 1 */}
            <div className="py-6 md:py-0 md:pr-8 space-y-3">
              <p className="type-label text-champagne">01 / Understand</p>
              <h3 className="type-title text-ink">Finding the clearest path forward</h3>
              <p className="type-body-sm text-muted">
                Before writing any code, we sit down with you to understand your
                goals, your customers, and your workflows. We make sure we are
                solving the right problem before building anything.
              </p>
            </div>

            {/* Point 2 */}
            <div className="py-6 md:py-0 md:px-8 space-y-3">
              <p className="type-label text-champagne">02 / Build</p>
              <h3 className="type-title text-ink">Crafting tools people actually use</h3>
              <p className="type-body-sm text-muted">
                We design interfaces that are simple to navigate and write clean,
                resilient code underneath. Your users get a fast, intuitive experience,
                and your team gets software that simply works.
              </p>
            </div>

            {/* Point 3 */}
            <div className="py-6 md:py-0 md:pl-8 space-y-3">
              <p className="type-label text-champagne">03 / Maintain</p>
              <h3 className="type-title text-ink">Built to last and easy to manage</h3>
              <p className="type-body-sm text-muted">
                We avoid fragile templates and messy plugins. Everything we build
                follows sound engineering practices so your website stays fast,
                secure, and straightforward to update over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. HOW WE WORK
          Editorial process ledger: 5 clear steps with typography, numbering & dividers
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
              A clear, predictable path from idea to launch.
            </h2>
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              We believe great digital products come from open communication and a
              structured, step-by-step process. Here is how we take every project from an
              initial conversation to a successful deployment.
            </p>
          </div>

          {/* Editorial Process Rows (Not a card grid) */}
          <div className="divide-y divide-hairline border-t border-b border-hairline">
            {/* Step 1: Understand */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">01</span>
                <span className="type-label text-champagne-deep">Understand</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium">
                  We listen to your goals and needs
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted">
                  We begin by learning about your business, who your customers are,
                  and what you want to achieve. This ensures we solve the right problems
                  before writing a single line of code.
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
                  We map out the architecture
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted">
                  We define the structure of your site, choose the right technical
                  stack, and lay out clear milestones so you always know what is
                  happening and when to expect it.
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
                  We engineer clean, fast code
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted">
                  We design refined interfaces and write robust Next.js and TypeScript
                  code. We keep the codebase lightweight and maintainable, ensuring
                  instant loading speeds from day one.
                </p>
              </div>
            </div>

            {/* Step 4: Refine */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">04</span>
                <span className="type-label text-champagne-deep">Refine</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium">
                  We test and polish every detail
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted">
                  We test across phones, tablets, and desktop browsers to verify
                  responsiveness, fix edge cases, and ensure everything feels smooth,
                  fast, and effortless to use.
                </p>
              </div>
            </div>

            {/* Step 5: Launch */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">05</span>
                <span className="type-label text-champagne-deep">Launch</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium">
                  We deliver with zero stress
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted">
                  We handle hosting setup, domain configuration, and deployment.
                  You receive a production-ready website and clear guidance, ready
                  to represent your business with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. SERVICES OVERVIEW
          Compact architectural matrix across the 6 exact service practices
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Services Overview">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Section Header with Direct Link */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-hairline">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <p className="type-label text-champagne-deep">Services Overview</p>
              </div>
              <h2 className="type-heading text-ink">
                What we build for our clients.
              </h2>
            </div>
            <div>
              <Link
                href="/services"
                className="type-nav text-ink inline-flex items-center gap-1.5 hover:text-champagne-deep"
              >
                View all services
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* 3x2 Architectural Matrix (Not generic cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-hairline">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-r border-b border-hairline"
                >
                  <div className="space-y-4">
                    {/* Index & Simple Lucide Icon */}
                    <div className="flex items-center justify-between">
                      <span className="type-label text-champagne-deep font-medium">
                        {service.number}
                      </span>
                      <Icon className="h-5 w-5 text-champagne-deep stroke-[1.5]" aria-hidden="true" />
                    </div>

                    {/* Exact Service Name */}
                    <h3 className="type-title text-ink font-medium text-xl">
                      {service.name}
                    </h3>

                    {/* Short Human Explanation */}
                    <p className="type-body-sm text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Contextual Link */}
                  <div className="mt-8 pt-4 border-t border-hairline/60">
                    <Link
                      href="/services"
                      aria-label={`Learn more about ${service.name}`}
                      className="type-nav text-ink hover:text-champagne-deep inline-flex items-center gap-1.5"
                    >
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. FINAL CTA
          Warm editorial invitation: distinct tonal background, simple human language,
          zero fake urgency or marketing clichés
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
              Let&apos;s talk about what you want to build.
            </h2>

            {/* Short Supporting Text */}
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              Whether you have a fully formed project specification or an early
              idea you want to explore, we are always glad to connect. Tell us
              what you are aiming for, and we will share clear, practical
              advice on the best way forward. No pressure, no aggressive sales
              pitches—just a straightforward conversation between professionals.
            </p>

            {/* Contact CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="type-button inline-flex items-center justify-center w-full sm:w-auto px-7 py-4 bg-ink text-bone hover:bg-champagne-deep text-center"
              >
                Get in Touch
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
