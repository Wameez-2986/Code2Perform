import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AboutView() {
  return (
    <div className="w-full">
      {/* =====================================================================
          1. ABOUT HERO
          Positioning: Understanding the business behind every project
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
            We are a practical digital partner built on understanding the business behind every project.
          </h1>

          {/* Lower Split: Narrative & Focus Sidebar */}
          <div className="pt-8 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-4">
              <p className="type-body text-ink font-medium text-lg leading-relaxed">
                Too many software projects fail not because of poor coding, but because the
                agency never took the time to understand the business they were building for.
                Code2Perform works differently. We are an independent digital agency that acts
                as a reliable partner to founders, growing teams, and established businesses.
              </p>
              <p className="type-body text-muted leading-relaxed">
                We don&apos;t treat software as a disconnected list of technical tickets. We dig into
                how your company actually operates, who your customers are, and what commercial
                goals you need to hit. Then we design, engineer, and support digital products
                that solve real problems—and stick around to help them evolve over the long term.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4 pt-6 lg:pt-1 lg:pl-6 border-t lg:border-t-0 lg:border-l border-hairline">
              <div className="space-y-1">
                <p className="type-label text-champagne-deep">Our Role</p>
                <p className="type-body-sm text-ink">Practical Digital Partner</p>
              </div>
              <div className="space-y-1">
                <p className="type-label text-champagne-deep">Our Focus</p>
                <p className="type-body-sm text-ink">Understanding the Business First</p>
              </div>
              <div className="space-y-1">
                <p className="type-label text-champagne-deep">Our Model</p>
                <p className="type-body-sm text-ink">Direct Collaboration &amp; Long-Term Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. BEYOND CONTRACTING: HOW WE PARTNER
          Presenting the agency as a practical partner rather than a software contractor
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Our Working Philosophy">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading Anchor */}
            <div className="lg:col-span-5 space-y-4">
              <p className="type-label text-champagne-deep">Our Working Philosophy</p>
              <h2 className="type-heading text-ink">
                We work as an extension of your business, not a transactional software contractor.
              </h2>
            </div>

            {/* Right Column: Narrative & What Clients Can Expect */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <p className="type-body text-ink font-medium leading-relaxed">
                  A typical software contractor takes a scope document, writes code to
                  match the bullet points, and hands over an invoice. If the product is
                  confusing for your customers or fails to solve your operational bottleneck,
                  it is no longer their concern.
                </p>
                <p className="type-body text-muted leading-relaxed">
                  We approach client relationships with direct personal accountability. You work
                  directly with experienced practitioners who take the time to understand your
                  business context. If an idea adds unnecessary complexity or cost without
                  delivering real value, we tell you openly and recommend a simpler, more durable path.
                </p>
              </div>

              {/* 4 Cornerstones of Our Client Relationships */}
              <div className="pt-6 border-t border-hairline space-y-4">
                <p className="type-label text-champagne-deep">How We Approach Client Relationships</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <h3 className="type-title text-ink font-medium text-base">
                      1. Business-first counsel
                    </h3>
                    <p className="type-body-sm text-muted">
                      We examine how digital choices impact your operational workflows,
                      customer retention, and bottom line before writing a line of code.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="type-title text-ink font-medium text-base">
                      2. Direct practitioner access
                    </h3>
                    <p className="type-body-sm text-muted">
                      You communicate directly with the designers and engineers building
                      your product, avoiding sales intermediaries and lost details.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="type-title text-ink font-medium text-base">
                      3. Complete ownership &amp; freedom
                    </h3>
                    <p className="type-body-sm text-muted">
                      You own 100% of your source code, design files, and deployment
                      credentials from day one, with zero proprietary lock-in.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="type-title text-ink font-medium text-base">
                      4. Long-term availability
                    </h3>
                    <p className="type-body-sm text-muted">
                      We remain available to help your product evolve when your business needs
                      it, without forcing you into expensive, mandatory retainers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. OUR APPROACH: 6 PRACTICAL STEPS
          Understand business, problem, build, launch, stay available, improve
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Our Approach">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Our Approach</p>
            </div>
            <h2 className="type-heading text-ink">
              How we guide your project from first conversation to long-term growth.
            </h2>
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              We treat digital engineering as a thoughtful, disciplined craft. Here are
              the six foundational stages that guide how we work with every business.
            </p>
          </div>

          {/* 6-Stage Editorial Ledger */}
          <div className="border-t border-b border-hairline">
            <div className="divide-y divide-hairline">
            {/* Step 1: Understand the business */}
            <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">01</span>
                <span className="type-label text-champagne-deep">Discovery</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium text-xl">
                  Understand the business
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted leading-relaxed">
                  We begin by learning how your business operates, how you serve your
                  customers, and what commercial goals drive your team. Software only
                  succeeds when it aligns directly with your business model.
                </p>
              </div>
            </div>

            {/* Step 2: Understand the problem */}
            <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">02</span>
                <span className="type-label text-champagne-deep">Diagnosis</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium text-xl">
                  Understand the problem
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted leading-relaxed">
                  Before recommending tools or technology, we identify the specific
                  friction points holding your business back—whether it is an outdated
                  website, slow load speeds, or manual operational bottlenecks.
                </p>
              </div>
            </div>

            {/* Step 3: Build the right digital solution */}
            <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">03</span>
                <span className="type-label text-champagne-deep">Execution</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium text-xl">
                  Build the right digital solution
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted leading-relaxed">
                  We design straightforward user interfaces and write lightweight, strictly
                  typed code using Next.js and TypeScript. We build only what your business
                  genuinely needs, avoiding bloated themes and fragile plugins.
                </p>
              </div>
            </div>

            {/* Step 4: Launch it properly */}
            <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">04</span>
                <span className="type-label text-champagne-deep">Deployment</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium text-xl">
                  Launch it properly
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted leading-relaxed">
                  We handle hosting setup, domain routing, performance audits, and security
                  verification. We walk your team through the system so everyone feels
                  prepared and confident for day-one traffic.
                </p>
              </div>
            </div>

            {/* Step 5: Stay available after launch */}
            <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">05</span>
                <span className="type-label text-champagne-deep">Continuity</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium text-xl">
                  Stay available after launch
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted leading-relaxed">
                  Launch day is not the end of our partnership. We remain available to answer
                  questions, monitor uptime, maintain code libraries, and ensure your digital
                  assets continue running smoothly in the real world.
                </p>
              </div>
            </div>

            {/* Step 6: Improve and expand the solution when the business needs it */}
            <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="type-label text-champagne font-medium">06</span>
                <span className="type-label text-champagne-deep">Evolution</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="type-title text-ink font-medium text-xl">
                  Improve and expand when you need it
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="type-body-sm text-muted leading-relaxed">
                  As your company grows, your digital tools must grow too. When you are ready,
                  we can assist with conversion optimization, workflow automation, SEO and
                  content refinement, or new features—working on your timeline with zero forced contracts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* =====================================================================
          4. WHAT WE BELIEVE
          Core convictions: Clarity, Speed, Utility, Durability
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
              Most digital initiatives fail not from a lack of visual decoration,
              but from a lack of focus. Here are four foundational convictions that
              guide how we evaluate every project.
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
                A digital product must clearly explain its purpose within seconds of arrival.
                If visitors are confused by ambiguous marketing slogans or cluttered navigation,
                the design has failed. We structure information for immediate understanding.
              </p>
            </div>

            {/* Belief 02 */}
            <div className="p-8 md:p-10 border-r border-b border-hairline space-y-3">
              <span className="type-label text-champagne-deep font-medium">02 / Speed</span>
              <h3 className="type-title text-ink font-medium text-xl">
                Speed is respect for your user
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                Every second a person waits for a screen to load is a test of their patience.
                Fast page loads build credibility, trust, and business conversions.
                We engineer for instant response times from the foundation up.
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
                customers book a service, purchase a product, or access critical data
                without hindrance. If a feature does not serve a clear purpose, we leave it out.
              </p>
            </div>

            {/* Belief 04 */}
            <div className="p-8 md:p-10 border-r border-b border-hairline space-y-3">
              <span className="type-label text-champagne-deep font-medium">04 / Longevity</span>
              <h3 className="type-title text-ink font-medium text-xl">
                Simple code is durable code
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                The best software is the simplest code that completely solves the problem.
                We avoid fragile page builders and unnecessary libraries so your digital
                systems stay secure, fast, and easy for your team to maintain over the long haul.
              </p>
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
              <p className="type-label text-champagne-deep">Start a Conversation</p>
            </div>

            <h2 className="type-heading text-ink">
              Looking for a digital partner who understands your business?
            </h2>

            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              Whether you need to build a new platform from scratch, fix an existing
              system that has slowed down, or find dependable ongoing technical guidance,
              we would love to talk. Tell us what your business is aiming for, and let&apos;s
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
