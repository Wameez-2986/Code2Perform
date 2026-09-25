import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AboutView() {
  return (
    <div className="w-full">
      {/* =====================================================================
          1. ABOUT HERO
          What Code2Perform is: direct, human, editorial opening
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="About Hero">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <p className="type-label text-champagne-deep">About Code2Perform</p>
          </div>

          {/* Main Display Heading */}
          <h1 className="type-display text-ink max-w-5xl">
            We are an independent digital agency built on clear design and disciplined engineering.
          </h1>

          {/* Lower Split: Narrative & Focus Sidebar */}
          <div className="pt-8 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-4">
              <p className="type-body text-ink font-medium text-lg leading-relaxed">
                Code2Perform exists to solve a common frustration: too many websites
                and digital products are slow, difficult to navigate, and burdened by
                bloated templates or fragile code.
              </p>
              <p className="type-body text-muted leading-relaxed">
                We take a different path. We work with founders, growing companies,
                and established businesses to design and build custom websites, web
                applications, and software tools that work reliably every day. We
                believe that thoughtful craftsmanship, simple human language, and
                clean code create digital experiences that genuinely serve people.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4 pt-6 lg:pt-1 lg:pl-6 border-t lg:border-t-0 lg:border-l border-hairline">
              <div className="space-y-1">
                <p className="type-label text-champagne-deep">What We Are</p>
                <p className="type-body-sm text-ink">Independent Digital Agency</p>
              </div>
              <div className="space-y-1">
                <p className="type-label text-champagne-deep">What We Build</p>
                <p className="type-body-sm text-ink">Custom Web Platforms &amp; Applications</p>
              </div>
              <div className="space-y-1">
                <p className="type-label text-champagne-deep">How We Work</p>
                <p className="type-body-sm text-ink">Direct Senior-Level Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. WHO CODE2PERFORM IS
          What clients can expect: direct practitioner model without middle layers
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Who We Are">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading Anchor */}
            <div className="lg:col-span-5 space-y-4">
              <p className="type-label text-champagne-deep">Who We Are</p>
              <h2 className="type-heading text-ink">
                No account managers or junior handoffs. You work directly with the people building your product.
              </h2>
            </div>

            {/* Right Column: Narrative & What Clients Can Expect */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <p className="type-body text-ink font-medium leading-relaxed">
                  At traditional agencies, client questions get routed through sales
                  representatives, account coordinators, and junior staff before ever
                  reaching an engineer or designer. Important details get lost,
                  timelines drift, and the final result rarely matches what was discussed.
                </p>
                <p className="type-body text-muted leading-relaxed">
                  We work differently. When you partner with Code2Perform, your day-to-day
                  contact is an experienced practitioner who actively designs the interfaces
                  and writes the code. We deliberately keep our team focused so every project
                  receives genuine care, rapid communication, and direct personal accountability.
                </p>
              </div>

              {/* What Clients Can Expect */}
              <div className="pt-6 border-t border-hairline space-y-4">
                <p className="type-label text-champagne-deep">What You Can Expect From Us</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <h3 className="type-title text-ink font-medium text-base">
                      1. Straightforward, honest counsel
                    </h3>
                    <p className="type-body-sm text-muted">
                      If an idea is technically impractical or adds unnecessary expense,
                      we explain why upfront and recommend a simpler path.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="type-title text-ink font-medium text-base">
                      2. Direct practitioner access
                    </h3>
                    <p className="type-body-sm text-muted">
                      You speak directly to the engineers building your software,
                      ensuring clear communication and rapid progress.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="type-title text-ink font-medium text-base">
                      3. Full code ownership
                    </h3>
                    <p className="type-body-sm text-muted">
                      You own 100% of your source code, design assets, and deployment
                      credentials. There is zero proprietary lock-in.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="type-title text-ink font-medium text-base">
                      4. Realistic milestones
                    </h3>
                    <p className="type-body-sm text-muted">
                      We set achievable delivery dates early in the project and stick
                      to them through disciplined, milestone-based execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. WHAT WE BELIEVE
          How the agency thinks & Why clarity and useful digital products matter
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="What We Believe">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">What We Believe</p>
            </div>
            <h2 className="type-heading text-ink">
              Digital products should be simple, fast, and genuinely useful.
            </h2>
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              Most digital projects fail not from a lack of visual polish, but from
              a lack of focus. Here are four foundational convictions that guide our
              thinking on every project.
            </p>
          </div>

          {/* 2x2 Architectural Grid Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-hairline">
            {/* Belief 01 */}
            <div className="p-8 md:p-10 border-r border-b border-hairline space-y-3">
              <span className="type-label text-champagne-deep font-medium">01 / Clarity</span>
              <h3 className="type-title text-ink font-medium text-xl">
                Clarity comes before decoration
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                A website must clearly explain what your business does within seconds
                of arrival. If a visitor is confused by ambiguous slogans, hidden menus,
                or visual clutter, the design has failed. We structure content so people
                instantly grasp your value.
              </p>
            </div>

            {/* Belief 02 */}
            <div className="p-8 md:p-10 border-r border-b border-hairline space-y-3">
              <span className="type-label text-champagne-deep font-medium">02 / Speed</span>
              <h3 className="type-title text-ink font-medium text-xl">
                Speed is respect for your user
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                Every second a person waits for a webpage to load is a test of their
                patience. Fast page loads are not an optional bonus; they are a sign of
                respect for your visitors and a proven driver of trust and conversions.
                We engineer for instant response times.
              </p>
            </div>

            {/* Belief 03 */}
            <div className="p-8 md:p-10 border-r border-b border-hairline space-y-3">
              <span className="type-label text-champagne-deep font-medium">03 / Utility</span>
              <h3 className="type-title text-ink font-medium text-xl">
                Useful products beat flashy gimmicks
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                We build websites and digital applications that solve real tasks—helping
                customers book a service, purchase a product, or find critical information
                without hindrance. If a feature does not serve a clear purpose, we
                leave it out.
              </p>
            </div>

            {/* Belief 04 */}
            <div className="p-8 md:p-10 border-r border-b border-hairline space-y-3">
              <span className="type-label text-champagne-deep font-medium">04 / Longevity</span>
              <h3 className="type-title text-ink font-medium text-xl">
                Simple code is durable code
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                The best software is the simplest code that completely solves the
                problem. We avoid fragile page builders and unnecessary libraries so
                your website remains secure, fast, and easy for your team to maintain
                over the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. HOW WE APPROACH DIGITAL WORK
          How the agency approaches projects: 3-tier architectural bands
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Our Approach">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">How We Approach Projects</p>
            </div>
            <h2 className="type-heading text-ink">
              Disciplined craft at every stage of development.
            </h2>
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              We treat digital engineering as a deliberate discipline. Here is how we
              ensure consistency, stability, and speed across every build.
            </p>
          </div>

          {/* 3-Tier Horizontal Bands */}
          <div className="divide-y divide-hairline border-t border-b border-hairline">
            {/* Band 1 */}
            <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="type-label text-champagne-deep">Stage 01</span>
                <h3 className="type-title text-ink font-medium text-xl mt-2">
                  Technical Foundations
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="type-body text-muted leading-relaxed">
                  Every project starts with a sound technical architecture. We build
                  using modern Next.js and TypeScript standards. We deliberately avoid
                  messy visual site builders, unvetted plugins, and heavy tracking
                  scripts that degrade performance. The result is clean, maintainable
                  code that any competent engineer can inspect and understand.
                </p>
              </div>
            </div>

            {/* Band 2 */}
            <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="type-label text-champagne-deep">Stage 02</span>
                <h3 className="type-title text-ink font-medium text-xl mt-2">
                  Editorial Interface Design
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="type-body text-muted leading-relaxed">
                  We approach visual design with editorial restraint. We prioritize
                  clear typography, generous whitespace, and natural visual hierarchy
                  so your message stands out clearly without gimmicks. We design for
                  all screen sizes from the start, ensuring smooth navigation across
                  phones, tablets, laptops, and large desktop monitors.
                </p>
              </div>
            </div>

            {/* Band 3 */}
            <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="type-label text-champagne-deep">Stage 03</span>
                <h3 className="type-title text-ink font-medium text-xl mt-2">
                  Real-World Verification
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="type-body text-muted leading-relaxed">
                  Before any project goes live, we test it thoroughly against real-world
                  constraints. We test on mobile networks, verify keyboard navigation
                  and accessibility standards, and audit page load speeds. We make
                  sure the site performs smoothly under real user conditions, not just
                  on developer machines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. CTA SECTION
          Warm editorial invitation band on surface-alt
          ===================================================================== */}
      <section className="bg-surface-alt border-b border-hairline section-spacing" aria-label="Start a Project">
        <div className="page-container">
          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Work With Us</p>
            </div>

            <h2 className="type-heading text-ink">
              Looking for an agency that values craftsmanship as much as you do?
            </h2>

            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              Whether you need to build a new website from scratch or rebuild an
              existing platform that has become slow and hard to maintain, we would
              love to talk with you. Tell us what you want to achieve, and let&apos;s
              have an open, practical discussion about the best way forward.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="type-button inline-flex items-center justify-center w-full sm:w-auto px-7 py-4 bg-ink text-bone hover:bg-champagne-deep text-center"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="type-nav text-ink hover:text-champagne-deep inline-flex items-center justify-center sm:justify-start gap-1.5"
              >
                Explore our services
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
