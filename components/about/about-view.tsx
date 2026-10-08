import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionCard as StackedCardSection } from "@/components/ui/section-card";

export function AboutView() {
  return (
    <div className="relative w-full pt-4 sm:pt-6 pb-16 md:pb-24">
      {/* =====================================================================
          1. ABOUT HERO
          Positioning: Understanding the business behind every project
          ===================================================================== */}
      <StackedCardSection
        index={0}
        totalSections={5}
        ariaLabel="About Hero"
        id="about-hero"
      >
        <div className="page-container space-y-6 md:space-y-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <p className="type-label text-champagne-deep">About Code2Perform</p>
          </div>

          {/* Main Display Heading */}
          <h1 className="type-display text-ink max-w-5xl">
            We’re a digital partner focused on your business.
          </h1>

          {/* Lower Split: Narrative & Focus Sidebar */}
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-8 space-y-3">
              <p className="type-body text-ink font-medium text-base sm:text-lg leading-relaxed">
                Too many software projects fail not because of poor coding, but because the
                agency never took the time to understand the business they were building for.
                Code2Perform works differently. We are an independent digital agency that acts
                as a reliable partner to founders, growing teams, and established businesses.
              </p>
              <p className="type-body text-muted text-sm sm:text-base leading-relaxed">
                We don&apos;t treat software as a disconnected list of technical tickets. We dig into
                how your company actually operates, who your customers are, and what commercial
                goals you need to hit. Then we design, engineer, and support digital products
                that solve real problems—and stick around to help them evolve over the long term.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-3 pt-4 lg:pt-1 lg:pl-6 border-t lg:border-t-0 lg:border-l border-hairline">
              <div className="space-y-0.5">
                <p className="type-label text-champagne-deep">Our Role</p>
                <p className="type-body-sm text-ink font-medium">Practical Digital Partner</p>
              </div>
              <div className="space-y-0.5">
                <p className="type-label text-champagne-deep">Our Focus</p>
                <p className="type-body-sm text-ink font-medium">Understanding the Business First</p>
              </div>
              <div className="space-y-0.5">
                <p className="type-label text-champagne-deep">Our Model</p>
                <p className="type-body-sm text-ink font-medium">Direct Collaboration &amp; Long-Term Support</p>
              </div>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          2. BEYOND CONTRACTING: HOW WE PARTNER
          Presenting the agency as a practical partner rather than a software contractor
          ===================================================================== */}
      <StackedCardSection
        index={1}
        totalSections={5}
        ariaLabel="Our Working Philosophy"
        id="our-working-philosophy"
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Heading Anchor & Mission */}
            <div className="lg:col-span-5 space-y-3">
              <p className="type-label text-champagne-deep">Our Working Philosophy</p>
              <h2 className="type-heading text-ink">
                We work as an extension of your business, not a transactional software contractor.
              </h2>
              <p className="type-body text-muted text-xs sm:text-sm leading-relaxed">
                A typical software contractor takes a scope document and leaves when the invoice is paid.
                We approach client relationships with direct personal accountability—giving honest counsel,
                recommending simpler solutions, and protecting your bottom line.
              </p>
            </div>

            {/* Right Column: 4 Cornerstones */}
            <div className="lg:col-span-7 space-y-2.5">
              <p className="type-label text-champagne-deep">How We Approach Client Relationships</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                <div className="space-y-0.5">
                  <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                    1. Business-first counsel
                  </h3>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    We examine how digital choices impact your operational workflows,
                    customer retention, and bottom line before writing a line of code.
                  </p>
                </div>

                <div className="space-y-0.5">
                  <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                    2. Direct practitioner access
                  </h3>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    You communicate directly with the designers and engineers building
                    your product, avoiding sales intermediaries and lost details.
                  </p>
                </div>

                <div className="space-y-0.5">
                  <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                    3. Complete ownership &amp; freedom
                  </h3>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    You own 100% of your source code, design files, and deployment
                    credentials from day one, with zero proprietary lock-in.
                  </p>
                </div>

                <div className="space-y-0.5">
                  <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                    4. Long-term availability
                  </h3>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    We remain available to help your product evolve when your business needs
                    it, without forcing you into expensive, mandatory retainers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          3. WHAT WE BELIEVE
          Core convictions: Clarity, Speed, Utility, Durability
          ===================================================================== */}
      <StackedCardSection
        index={2}
        totalSections={5}
        ariaLabel="What We Believe"
        id="what-we-believe"
      >
        <div className="page-container space-y-3 sm:space-y-4">
          {/* Section Header */}
          <div className="max-w-3xl space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">What We Believe</p>
            </div>
            <h2 className="type-heading text-ink text-xl sm:text-2xl lg:text-3xl">
              Digital products should be simple, fast, and genuinely useful.
            </h2>
            <p className="type-body text-muted text-xs sm:text-sm max-w-2xl leading-relaxed">
              Most digital initiatives fail not from a lack of visual decoration,
              but from a lack of focus. Here are four foundational convictions that
              guide how we evaluate every project.
            </p>
          </div>

          {/* 4-Item Grid Matrix: Single row on desktop (lg:grid-cols-4) so it never overflows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-hairline">
            {/* Belief 01 */}
            <div className="p-3 sm:p-4 border-r border-b border-hairline space-y-1">
              <span className="type-label text-champagne-deep font-medium">01 / Clarity</span>
              <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                Clarity comes before decoration
              </h3>
              <p className="type-body-sm text-muted text-xs leading-relaxed">
                A digital product must clearly explain its purpose within seconds of arrival.
                If visitors are confused by ambiguous marketing slogans or cluttered navigation,
                the design has failed. We structure information for immediate understanding.
              </p>
            </div>

            {/* Belief 02 */}
            <div className="p-3 sm:p-4 border-r border-b border-hairline space-y-1">
              <span className="type-label text-champagne-deep font-medium">02 / Speed</span>
              <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                Speed is respect for your user
              </h3>
              <p className="type-body-sm text-muted text-xs leading-relaxed">
                Every second a person waits for a screen to load is a test of their patience.
                Fast page loads build credibility, trust, and business conversions.
                We engineer for instant response times from the foundation up.
              </p>
            </div>

            {/* Belief 03 */}
            <div className="p-3 sm:p-4 border-r border-b border-hairline space-y-1">
              <span className="type-label text-champagne-deep font-medium">03 / Utility</span>
              <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                Useful products beat flashy gimmicks
              </h3>
              <p className="type-body-sm text-muted text-xs leading-relaxed">
                We build websites and digital applications that solve real tasks—helping
                customers book a service, purchase a product, or access critical data
                without hindrance. If a feature does not serve a clear purpose, we leave it out.
              </p>
            </div>

            {/* Belief 04 */}
            <div className="p-3 sm:p-4 border-r border-b border-hairline space-y-1">
              <span className="type-label text-champagne-deep font-medium">04 / Longevity</span>
              <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                Simple code is durable code
              </h3>
              <p className="type-body-sm text-muted text-xs leading-relaxed">
                The best software is the simplest code that completely solves the problem.
                We avoid fragile page builders and unnecessary libraries so your digital
                systems stay secure, fast, and easy for your team to maintain over the long haul.
              </p>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          4. HOW WE APPROACH DIGITAL WORK
          Understand business, problem, build, launch, stay available, improve
          ===================================================================== */}
      <StackedCardSection
        index={3}
        totalSections={5}
        ariaLabel="How We Approach Digital Work"
        id="how-we-approach"
      >
        <div className="page-container space-y-5 md:space-y-6">
          {/* Header */}
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">How We Approach Digital Work</p>
            </div>
            <h2 className="type-heading text-ink">
              How we take your project from idea to growth.
            </h2>
            <p className="type-body text-muted text-sm sm:text-base max-w-2xl leading-relaxed pt-1">
              We believe in building digital products with care and a clear process. These six simple steps guide how we work with every business.
            </p>
          </div>

          {/* 6-Stage Grid: 2-column format on desktop for compact viewport fit */}
          <div className="border-t border-b border-hairline">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-hairline">
              {/* Left Column: Steps 1-3 */}
              <div className="divide-y divide-hairline md:pr-6">
                {/* Step 1 */}
                <div className="py-3.5 space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="type-label text-champagne font-medium">01</span>
                    <span className="type-label text-champagne-deep">Discovery</span>
                    <span className="text-muted/40 text-xs">•</span>
                    <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                      Understand the business
                    </h3>
                  </div>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    We begin by learning how your business operates, how you serve your
                    customers, and what commercial goals drive your team.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="py-3.5 space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="type-label text-champagne font-medium">02</span>
                    <span className="type-label text-champagne-deep">Diagnosis</span>
                    <span className="text-muted/40 text-xs">•</span>
                    <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                      Understand the problem
                    </h3>
                  </div>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    Before recommending tools, we identify specific friction points holding your business back—slow speeds, poor UX, or manual bottlenecks.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="py-3.5 space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="type-label text-champagne font-medium">03</span>
                    <span className="type-label text-champagne-deep">Execution</span>
                    <span className="text-muted/40 text-xs">•</span>
                    <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                      Build the right digital solution
                    </h3>
                  </div>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    We design clear user interfaces and write lightweight, strictly typed code using Next.js and TypeScript tailored strictly to your needs.
                  </p>
                </div>
              </div>

              {/* Right Column: Steps 4-6 */}
              <div className="divide-y divide-hairline md:pl-6">
                {/* Step 4 */}
                <div className="py-3.5 space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="type-label text-champagne font-medium">04</span>
                    <span className="type-label text-champagne-deep">Deployment</span>
                    <span className="text-muted/40 text-xs">•</span>
                    <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                      Launch it properly
                    </h3>
                  </div>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    We handle hosting setup, domain routing, performance audits, and security verification so your team feels prepared for day-one traffic.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="py-3.5 space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="type-label text-champagne font-medium">05</span>
                    <span className="type-label text-champagne-deep">Continuity</span>
                    <span className="text-muted/40 text-xs">•</span>
                    <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                      Stay available after launch
                    </h3>
                  </div>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    Launch day is not the end. We remain available to answer questions, monitor uptime, maintain code, and ensure steady performance.
                  </p>
                </div>

                {/* Step 6 */}
                <div className="py-3.5 space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="type-label text-champagne font-medium">06</span>
                    <span className="type-label text-champagne-deep">Evolution</span>
                    <span className="text-muted/40 text-xs">•</span>
                    <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                      Improve and expand when needed
                    </h3>
                  </div>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    As your company grows, we can assist with conversion optimization, workflow automation, SEO, and new features on your timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          5. CTA SECTION
          Warm editorial invitation band on surface-alt
          ===================================================================== */}
      <StackedCardSection
        index={4}
        totalSections={5}
        ariaLabel="Start a Project"
        id="start-a-project"
        surfaceAlt
      >
        <div className="page-container">
          <div className="max-w-4xl space-y-5 md:space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Start a Conversation</p>
            </div>

            <h2 className="type-heading text-ink">
              Looking for a digital partner who understands your business?
            </h2>

            <p className="type-body text-muted text-sm sm:text-base max-w-2xl leading-relaxed pt-1">
              Whether you need to build a new platform from scratch, fix an existing
              system that has slowed down, or find dependable ongoing technical guidance,
              we would love to talk. Tell us what your business is aiming for, and let&apos;s
              have an open, practical discussion about the best way forward.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="type-button inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-ink text-bone hover:bg-champagne-deep text-center"
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
      </StackedCardSection>
    </div>
  );
}
