import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AboutView() {
  return (
    <div className="w-full">
      {/* =====================================================================
          1. ABOUT HERO
          Positioning: Understanding the business behind every project
          ===================================================================== */}
      <section
        aria-label="About Hero"
        id="about-hero"
        className="w-full py-16 sm:py-20 md:py-24 border-b border-hairline bg-bone"
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
            <div className="lg:col-span-8 space-y-4">
              <p className="type-body text-ink font-medium text-base sm:text-lg leading-relaxed">
                Software projects can go wrong when the team building them doesn&apos;t fully understand the business behind them.
              </p>
              <p className="type-body text-muted text-sm sm:text-base leading-relaxed">
                At Code2Perform, we take the time to understand your goals, your customers, and the challenges you&apos;re trying to solve. We work closely with founders and businesses to build digital products that make sense for their needs.
              </p>
              <p className="type-body text-muted text-sm sm:text-base leading-relaxed">
                From the first conversation to launch and beyond, we focus on building things that work, solving real problems, and helping your product grow with your business.
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
      </section>

      {/* =====================================================================
          2. OUR APPROACH
          Presenting how we work with our clients
          ===================================================================== */}
      <section
        aria-label="Our Approach"
        id="our-approach"
        className="w-full py-16 sm:py-20 md:py-24 border-b border-hairline bg-surface"
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Heading Anchor & Mission */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
              <div className="flex flex-col gap-2">
                <p className="type-label text-champagne-deep">Our Approach</p>
                <h2 className="type-heading text-ink">
                  We build products with your business in mind.
                </h2>
              </div>
              <p className="type-body text-muted text-xs sm:text-sm leading-relaxed">
                We believe good software comes from understanding the people and business behind it. We take responsibility for our work, communicate openly, and focus on solutions that make sense for your business—not just the project brief.
              </p>
            </div>

            {/* Right Column: 4 Cornerstones */}
            <div className="lg:col-span-7 space-y-2.5">
              <p className="type-label text-champagne-deep">How We Work With Our Clients</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                <div className="space-y-0.5">
                  <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                    1. Understand the business first
                  </h3>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    We take time to understand your goals, your customers, and the problems you&apos;re trying to solve before deciding what to build.
                  </p>
                </div>

                <div className="space-y-0.5">
                  <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                    2. Work directly with our team
                  </h3>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    You speak directly with the designers and developers working on your product, so conversations stay clear and decisions don&apos;t get lost along the way.
                  </p>
                </div>

                <div className="space-y-0.5">
                  <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                    3. You own what we build
                  </h3>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    Your code, design files, and project assets belong to you. We build with transparency, so you can manage and grow your product on your own terms.
                  </p>
                </div>

                <div className="space-y-0.5">
                  <h3 className="type-title text-ink font-medium text-sm sm:text-base">
                    4. Support beyond launch
                  </h3>
                  <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                    Our work doesn&apos;t have to end when your product goes live. We&apos;re available to help improve features, fix issues, and adapt the product as your needs change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. WHAT WE BELIEVE
          Core convictions: 01 / CLARITY, 02 / PERFORMANCE, 03 / PURPOSE, 04 / MAINTAINABILITY
          ===================================================================== */}
      <section
        aria-label="What We Believe"
        id="what-we-believe"
        className="w-full py-16 sm:py-20 md:py-24 border-b border-hairline bg-surface-alt"
      >
        <div className="page-container space-y-8 md:space-y-10">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep uppercase tracking-wider text-xs font-medium">
                WHAT WE BELIEVE
              </p>
            </div>
            <h2 className="type-heading text-ink text-2xl sm:text-3xl lg:text-4xl">
              Good software solves problems without making things complicated.
            </h2>
            <p className="type-body text-muted text-sm sm:text-base max-w-2xl leading-relaxed pt-1">
              A digital product doesn&apos;t need to do everything. It needs to do the right things well. That&apos;s what guides us when we design and build products for our clients.
            </p>
          </div>

          {/* 4-Item Grid Matrix: Single row on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-hairline">
            {/* Belief 01 */}
            <div className="p-6 md:p-7 border-r border-b border-hairline flex flex-col justify-start">
              <span className="type-label text-champagne-deep font-medium mb-2 uppercase tracking-wider text-xs">
                01 / CLARITY
              </span>
              <h3 className="type-title text-ink font-medium text-base sm:text-lg mb-2.5">
                Make it easy to understand
              </h3>
              <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                People shouldn&apos;t have to figure out how your product works. We keep the layout clear, the navigation simple, and the important information easy to find.
              </p>
            </div>

            {/* Belief 02 */}
            <div className="p-6 md:p-7 border-r border-b border-hairline flex flex-col justify-start">
              <span className="type-label text-champagne-deep font-medium mb-2 uppercase tracking-wider text-xs">
                02 / PERFORMANCE
              </span>
              <h3 className="type-title text-ink font-medium text-base sm:text-lg mb-2.5">
                Every second counts
              </h3>
              <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                Nobody likes waiting for a page to load. We focus on building responsive, reliable products that feel fast and make everyday tasks easier for the people using them.
              </p>
            </div>

            {/* Belief 03 */}
            <div className="p-6 md:p-7 border-r border-b border-hairline flex flex-col justify-start">
              <span className="type-label text-champagne-deep font-medium mb-2 uppercase tracking-wider text-xs">
                03 / PURPOSE
              </span>
              <h3 className="type-title text-ink font-medium text-base sm:text-lg mb-2.5">
                Every feature should have a reason
              </h3>
              <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                We build around what your users actually need, whether that&apos;s booking a service, buying a product, or managing their work. If something doesn&apos;t add value, it probably doesn&apos;t need to be there.
              </p>
            </div>

            {/* Belief 04 */}
            <div className="p-6 md:p-7 border-r border-b border-hairline flex flex-col justify-start">
              <span className="type-label text-champagne-deep font-medium mb-2 uppercase tracking-wider text-xs">
                04 / MAINTAINABILITY
              </span>
              <h3 className="type-title text-ink font-medium text-base sm:text-lg mb-2.5">
                Build for today. Leave room for tomorrow.
              </h3>
              <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                Your product shouldn&apos;t become harder to manage as it grows. We write code that&apos;s organised, maintainable, and easier to update when your business needs something new.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. HOW WE APPROACH DIGITAL WORK
          Understand business, problem, build, launch, stay available, improve
          ===================================================================== */}
      <section
        aria-label="How We Approach Digital Work"
        id="how-we-approach"
        className="w-full py-16 sm:py-20 md:py-24 border-b border-hairline bg-surface"
      >
        <div className="page-container space-y-6 md:space-y-8">
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
      </section>

      {/* =====================================================================
          5. CTA SECTION
          Warm editorial invitation band on surface-alt
          ===================================================================== */}
      <section
        aria-label="Start a Project"
        id="start-a-project"
        className="w-full py-16 sm:py-20 md:py-24 border-b border-hairline bg-bone"
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

            <p className="type-body text-muted text-sm sm:text-base max-w-2xl leading-relaxed mt-5 sm:mt-6 pt-2">
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
      </section>
    </div>
  );
}
