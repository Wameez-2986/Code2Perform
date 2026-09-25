import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
                <ArrowUpRight className="h-4 w-4" />
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
          Editorial split: Left anchor, Right stacked hairline-divided rows
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="What We Do">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Section Identity */}
            <div className="lg:col-span-4 space-y-4">
              <p className="type-label text-champagne-deep">What We Do</p>
              <h2 className="type-heading text-ink">
                Built for speed, clarity, and scale.
              </h2>
              <p className="type-body text-muted">
                Our capabilities focus on core web engineering disciplines where
                performance and craftsmanship directly impact business outcomes.
              </p>
            </div>

            {/* Right Column: Stacked Architectural Rows */}
            <div className="lg:col-span-8 divide-y divide-hairline border-t border-b border-hairline">
              {/* Row 01 */}
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2">
                  <span className="type-label text-champagne">01</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="type-title text-ink">Modern Web Platforms</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="type-body-sm text-muted">
                    Next.js applications and responsive web systems engineered for
                    instant loading, uptime resilience, and clean maintainability.
                  </p>
                </div>
              </div>

              {/* Row 02 */}
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2">
                  <span className="type-label text-champagne">02</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="type-title text-ink">Digital Experience Design</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="type-body-sm text-muted">
                    Restrained, typography-driven user interfaces tailored for
                    distinction, legible hierarchy, and effortless cross-device usability.
                  </p>
                </div>
              </div>

              {/* Row 03 */}
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2">
                  <span className="type-label text-champagne">03</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="type-title text-ink">Performance Engineering</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="type-body-sm text-muted">
                    Comprehensive optimization across bundle size, rendering
                    pipelines, Core Web Vitals, and backend integration layers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. HOW WE WORK
          Continuous 4-column linear architectural process matrix
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="How We Work">
        <div className="page-container space-y-12">
          {/* Header */}
          <div className="max-w-2xl space-y-3">
            <p className="type-label text-champagne-deep">How We Work</p>
            <h2 className="type-heading text-ink">
              A transparent, disciplined process.
            </h2>
            <p className="type-body text-muted">
              We eliminate ambiguity through structured milestones, direct communication,
              and continuous validation from day one.
            </p>
          </div>

          {/* Process Grid: 4-part continuous matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-hairline divide-y md:divide-y-0 md:divide-x divide-hairline">
            {/* Step 01 */}
            <div className="py-8 md:px-6 md:first:pl-0 space-y-4">
              <span className="type-label text-champagne-deep">Phase 01</span>
              <h3 className="type-title text-ink">Discovery &amp; Scope</h3>
              <p className="type-body-sm text-muted">
                Uncovering technical requirements, architectural constraints, and
                strategic goals to define an unambiguous project roadmap.
              </p>
            </div>

            {/* Step 02 */}
            <div className="py-8 md:px-6 space-y-4">
              <span className="type-label text-champagne-deep">Phase 02</span>
              <h3 className="type-title text-ink">Architecture &amp; System</h3>
              <p className="type-body-sm text-muted">
                Establishing the typography hierarchy, layout foundation, and
                component models before writing production code.
              </p>
            </div>

            {/* Step 03 */}
            <div className="py-8 md:px-6 space-y-4">
              <span className="type-label text-champagne-deep">Phase 03</span>
              <h3 className="type-title text-ink">Engineering &amp; Review</h3>
              <p className="type-body-sm text-muted">
                Iterative implementation with clean TypeScript standards, continuous
                audits, and multi-device responsive validation.
              </p>
            </div>

            {/* Step 04 */}
            <div className="py-8 md:px-6 md:last:pr-0 space-y-4">
              <span className="type-label text-champagne-deep">Phase 04</span>
              <h3 className="type-title text-ink">Optimization &amp; Launch</h3>
              <p className="type-body-sm text-muted">
                Rigorous performance profiling, accessibility verification, and
                clean handover with zero operational surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. SERVICES OVERVIEW
          Two-column alternating open editorial catalog
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Services Overview">
        <div className="page-container space-y-12">
          {/* Section Header with Direct Link */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-hairline">
            <div className="space-y-3">
              <p className="type-label text-champagne-deep">Services Overview</p>
              <h2 className="type-heading text-ink">
                Our core agency practices.
              </h2>
            </div>
            <div>
              <Link
                href="/services"
                className="type-nav text-ink inline-flex items-center gap-1.5 hover:text-champagne-deep"
              >
                View all services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* 2-Column Editorial Catalog */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Service Block 01 */}
            <div className="space-y-6 pt-6 border-t border-hairline">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne">Engineering</span>
                <span className="type-label text-muted">01</span>
              </div>
              <h3 className="type-subheading text-ink">
                Next.js &amp; Frontend Systems
              </h3>
              <p className="type-body text-muted">
                Custom web applications built on modern React and Next.js App Router
                foundations, delivering sub-second response times and rock-solid reliability.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="type-nav text-ink underline underline-offset-4 hover:text-champagne-deep"
                >
                  Explore engineering scope
                </Link>
              </div>
            </div>

            {/* Service Block 02 */}
            <div className="space-y-6 pt-6 border-t border-hairline">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne">Design</span>
                <span className="type-label text-muted">02</span>
              </div>
              <h3 className="type-subheading text-ink">
                Editorial UI &amp; Brand Systems
              </h3>
              <p className="type-body text-muted">
                Clean typographic systems and responsive agency layouts that cut
                through visual clutter to convey substance and authority.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="type-nav text-ink underline underline-offset-4 hover:text-champagne-deep"
                >
                  Explore design scope
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. FINAL CTA
          Grounded, framed invitation block
          ===================================================================== */}
      <section className="section-spacing" aria-label="Final Call to Action">
        <div className="page-container">
          <div className="bg-surface-alt border border-hairline p-10 md:p-16 lg:p-20">
            <div className="max-w-3xl space-y-6">
              <p className="type-label text-champagne-deep">Start a Conversation</p>
              <h2 className="type-heading text-ink">
                Have an ambitious digital project? Let&apos;s build it with precision.
              </h2>
              <p className="type-body text-muted max-w-xl">
                We accept a limited number of client engagements each quarter to
                ensure dedicated senior engineering and attention to every detail.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link
                  href="/contact"
                  className="type-button inline-flex items-center justify-center px-6 py-3.5 bg-ink text-bone hover:bg-champagne-deep"
                >
                  Start a Project
                </Link>
                <Link
                  href="/services"
                  className="type-nav text-ink underline underline-offset-4 hover:text-champagne-deep"
                >
                  Review Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
