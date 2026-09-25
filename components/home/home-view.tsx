import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    name: "Web & Digital Development",
    build:
      "Custom, high-speed websites and web applications built with Next.js and TypeScript for instant page loads and dependable uptime.",
    ongoing:
      "After launch, we can support you with ongoing website maintenance, technical updates, and SEO & content structure so your site stays fast and visible.",
  },
  {
    number: "02",
    name: "UI/UX & Product Design",
    build:
      "Straightforward, intuitive digital interfaces. We design natural user flows, typography, and clear layouts that make complex tools easy to use.",
    ongoing:
      "As real users interact with your product, we can continue with performance and conversion optimization to remove friction and improve engagement.",
  },
  {
    number: "03",
    name: "Mobile App Development",
    build:
      "Cross-platform mobile applications for iOS and Android, engineered with a unified codebase for consistent behavior and fast performance.",
    ongoing:
      "Post-launch, we handle App Store updates, OS version compatibility, and feature enhancements to keep your mobile app running smoothly.",
  },
  {
    number: "04",
    name: "SaaS & Custom Platforms",
    build:
      "Bespoke cloud software, client portals, and internal tools designed specifically around your operational processes and data workflows.",
    ongoing:
      "When appropriate, we can integrate CRM and business automation systems, monitor database health, and expand features as your operations scale.",
  },
  {
    number: "05",
    name: "E-Commerce Solutions",
    build:
      "Direct, reliable online stores with frictionless checkout experiences, clean product presentation, and robust payment integrations.",
    ongoing:
      "Beyond delivery, we can assist with checkout optimization, inventory workflows, and digital marketing support to help turn visitors into loyal customers.",
  },
  {
    number: "06",
    name: "AI & Business Automation",
    build:
      "Sensible automation workflows and custom AI integrations that eliminate repetitive manual tasks and connect your everyday business software.",
    ongoing:
      "We can also deploy and maintain intelligent chatbot solutions, automated inquiry triage, and internal search tools tailored to your workflows.",
  },
];

export function HomeView() {
  return (
    <div className="w-full">
      {/* =====================================================================
          1. HERO SECTION
          Positioned around long-term partnership, craft, and business utility
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Hero">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Top Row: Editorial Label & Status */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">
                Code2Perform — Digital Design, Engineering &amp; Long-Term Growth
              </p>
            </div>
            <p className="type-legal text-muted">
              Accepting Select Engagements
            </p>
          </div>

          {/* Strong Main Heading */}
          <div className="max-w-5xl">
            <h1 className="type-display text-ink">
              We design, build, and support fast digital products for businesses that value a dependable partner.
            </h1>
          </div>

          {/* Middle Two-Column Grid: Human Narrative & Action Triggers */}
          <div className="pt-8 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="type-body text-ink font-medium text-lg leading-relaxed">
                Code2Perform is an independent digital agency. We don&apos;t just build a
                website or an application and disappear. We work closely with founders,
                growing businesses, and established brands to understand their operational
                needs, engineer reliable software, and stay by their side to support,
                optimize, and grow their platforms over time.
              </p>
              <p className="type-body text-muted leading-relaxed">
                When generic templates, slow loading speeds, and fragile code hold your
                business back, we step in. Through direct senior-level collaboration,
                disciplined software engineering, and ongoing technical guidance, we make
                sure your digital presence actually performs—from day one and for years to come.
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

          {/* Lower Tripartite Editorial Rubric: 3 Core Client Commitments */}
          <div className="pt-8 border-t border-hairline grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="type-label text-champagne-deep">01 / Understand</p>
              <p className="type-body-sm text-ink">
                We Listen First — Grounding every project in your actual business workflows and customer needs.
              </p>
            </div>

            <div className="space-y-2">
              <p className="type-label text-champagne-deep">02 / Build &amp; Launch</p>
              <p className="type-body-sm text-ink">
                Disciplined Craft — Delivering fast, maintainable websites and applications without fragile shortcuts.
              </p>
            </div>

            <div className="space-y-2">
              <p className="type-label text-champagne-deep">03 / Support &amp; Grow</p>
              <p className="type-body-sm text-ink">
                Long-Term Care — Staying engaged after launch with proactive maintenance, optimization, and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. WHAT WE DO
          Editorial layout: Long-term partnership thesis & 3 substantive commitments
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
              Digital solutions built around your business—and supported for the long term.
            </h2>

            <p className="type-body text-muted text-lg max-w-3xl leading-relaxed">
              Most agencies deliver a project, hand over the files, and walk away.
              When your business grows or needs evolve, you are left on your own.
              We work differently. We partner with you from day one to understand your
              real challenges, engineer software people rely on every day, and provide
              continuous support so your digital presence keeps pace with your growth.
            </p>
          </div>

          {/* Asymmetric 2-Part Editorial Split */}
          <div className="pt-8 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Partnership Philosophy */}
            <div className="lg:col-span-5 space-y-4">
              <p className="type-label text-champagne">Our Working Model</p>
              <h3 className="type-heading text-2xl md:text-3xl text-ink">
                An agency that stays in your corner.
              </h3>
              <p className="type-body text-muted leading-relaxed">
                A digital product is not a one-time transaction; it is an active foundation
                for your business. We measure our success by how reliably your software
                performs over months and years. That means listening carefully from our first
                conversation, building with durability and clean code, and remaining available
                whenever your team needs guidance or new capabilities.
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
                <p className="type-body-sm text-muted leading-relaxed">
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
                <p className="type-body-sm text-muted leading-relaxed">
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
                <p className="type-body-sm text-muted leading-relaxed">
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
          <div className="divide-y divide-hairline border-t border-b border-hairline">
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
      </section>

      {/* =====================================================================
          4. SERVICES OVERVIEW
          Editorial directory ledger across the 6 exact service practices
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Services Overview">
        <div className="page-container space-y-12 md:space-y-16">
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
                className="type-nav text-ink inline-flex items-center gap-1.5 hover:text-champagne-deep shrink-0"
              >
                View all services &amp; deliverables
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Editorial Index Ledger (Not a boxed card grid) */}
          <div className="divide-y divide-hairline border-b border-hairline">
            {SERVICES.map((service) => (
              <div
                key={service.name}
                className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group"
              >
                <div className="lg:col-span-1">
                  <span className="type-label text-champagne-deep font-medium">
                    {service.number}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="type-heading text-2xl text-ink font-medium">
                    {service.name}
                  </h3>
                </div>

                <div className="lg:col-span-5 space-y-2">
                  <p className="type-body-sm text-ink leading-relaxed">
                    {service.build}
                  </p>
                  <p className="type-body-sm text-muted leading-relaxed">
                    {service.ongoing}
                  </p>
                </div>

                <div className="lg:col-span-2 lg:text-right pt-2 lg:pt-0">
                  <Link
                    href="/services"
                    aria-label={`Learn more about ${service.name}`}
                    className="type-nav text-ink hover:text-champagne-deep inline-flex items-center gap-1.5"
                  >
                    View practice
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
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
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
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
