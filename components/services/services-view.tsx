import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function ServicesView() {
  return (
    <div className="w-full">
      {/* =====================================================================
          1. SERVICES HERO
          Editorial opening with practice anchor bar
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Services Hero">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <p className="type-label text-champagne-deep">Services &amp; Capabilities</p>
          </div>

          {/* Heading */}
          <h1 className="type-display text-ink max-w-5xl">
            Disciplined engineering and design for products that need to perform.
          </h1>

          {/* Lower Split */}
          <div className="pt-8 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <p className="type-body text-muted text-lg max-w-3xl leading-relaxed">
                We design, build, and maintain digital products across the web, mobile,
                and cloud. No technical buzzwords, no unnecessary features—just clean,
                reliable systems engineered to support your business goals.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-3 pt-1">
              <p className="type-label text-champagne-deep">Core Practices</p>
              <ul className="space-y-2 text-sm text-ink font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  Web &amp; Digital Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  Product &amp; Application Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  SaaS, Commerce &amp; Automation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. WEB & DIGITAL DEVELOPMENT
          Feature layout: 5:7 asymmetric split with practical client checklist & deliverables
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Web & Digital Development">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Anchor */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="type-label text-champagne-deep font-medium">01 / Practice</span>
              </div>
              <h2 className="type-heading text-ink">
                Web &amp; Digital Development
              </h2>
              <p className="type-body text-ink font-medium text-lg leading-relaxed">
                Fast, reliable business websites built from clean code rather than fragile page builders.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="type-button inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-ink text-bone hover:bg-champagne-deep text-center"
                >
                  Discuss a Web Project
                </Link>
              </div>
            </div>

            {/* Right Explanation, Scope & Deliverables */}
            <div className="lg:col-span-7 space-y-8">
              {/* Simple explanation */}
              <div className="space-y-4">
                <p className="type-body text-muted leading-relaxed">
                  Most company websites are slow, difficult to update, and bloated with dozens of
                  conflicting plugins that break without warning. When a prospective client visits,
                  every second of delay causes them to lose patience and leave.
                </p>
                <p className="type-body text-muted leading-relaxed">
                  We build custom websites that load almost instantly and look sharp on every device.
                  Every page is structured so search engines can read it easily and your visitors can
                  find what they need without confusion.
                </p>
              </div>

              {/* What Code2Perform can help with */}
              <div className="pt-6 border-t border-hairline space-y-4">
                <p className="type-label text-champagne-deep">What Code2Perform Can Help With</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-1" />
                    <p className="type-body-sm text-ink">
                      Building new company websites from the ground up
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-1" />
                    <p className="type-body-sm text-ink">
                      Redesigning slow, outdated, or hard-to-maintain sites
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-1" />
                    <p className="type-body-sm text-ink">
                      Improving page load speed, responsiveness, and SEO structure
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-1" />
                    <p className="type-body-sm text-ink">
                      Setting up simple editing tools so your team can update content safely
                    </p>
                  </div>
                </div>
              </div>

              {/* Structured Deliverables Specification */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-ink">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Production-ready website codebase</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Responsive mobile &amp; desktop layout</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Content management configuration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Domain &amp; production hosting setup</span>
                  </li>
                  <li className="flex items-center gap-2.5 sm:col-span-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Core Web Vitals, accessibility &amp; SEO audit checklist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. PRODUCT & APPLICATION DEVELOPMENT
          2-column magazine spread: UI/UX & Product Design + Mobile App Development
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Product & Application Development">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Practice Area 02</p>
            </div>
            <h2 className="type-heading text-ink">
              Product &amp; Application Development
            </h2>
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              We design and engineer digital interfaces and mobile apps focused on clarity,
              everyday usability, and consistent performance across screens.
            </p>
          </div>

          {/* 2-Column Spread: UI/UX & Product Design + Mobile App Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-b border-hairline divide-y lg:divide-y-0 lg:divide-x divide-hairline">
            {/* Service 2: UI/UX & Product Design */}
            <div className="py-10 lg:pr-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="type-label text-champagne-deep font-medium">02 / Design</span>
                </div>
                <h3 className="type-heading text-2xl md:text-3xl text-ink">
                  UI/UX &amp; Product Design
                </h3>
                <p className="type-body text-muted leading-relaxed">
                  Design is not decoration; it is how easily a person can accomplish what they came
                  to do. We design interfaces that feel straightforward from the first click,
                  removing visual clutter and guiding users toward their goals without confusion.
                </p>
              </div>

              {/* What Code2Perform can help with */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <p className="type-label text-champagne-deep">What Code2Perform Can Help With</p>
                <ul className="space-y-2.5 text-sm text-ink">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Mapping out clear user journeys so visitors do not get lost</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Auditing existing products to fix confusing steps and drop-off points</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Creating clean visual layouts with legible typography and balanced spacing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Building reusable component libraries for reliable engineering handoff</span>
                  </li>
                </ul>
              </div>

              {/* Structured Deliverables Specification */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Interactive clickable prototypes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Screen-by-screen wireframes &amp; user flows</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Figma design system &amp; reusable UI kit</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Developer specification notes &amp; visual assets</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3: Mobile App Development */}
            <div className="py-10 lg:pl-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="type-label text-champagne-deep font-medium">03 / Mobile</span>
                </div>
                <h3 className="type-heading text-2xl md:text-3xl text-ink">
                  Mobile App Development
                </h3>
                <p className="type-body text-muted leading-relaxed">
                  Most customers interact with digital services on their phones. We build smooth,
                  reliable mobile apps that run consistently across both iPhone and Android devices.
                  You get one unified product without paying twice for separate development teams.
                </p>
              </div>

              {/* What Code2Perform can help with */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <p className="type-label text-champagne-deep">What Code2Perform Can Help With</p>
                <ul className="space-y-2.5 text-sm text-ink">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Developing mobile applications that work on both iOS and Android</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Connecting mobile apps to your existing web systems and customer accounts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Optimizing apps for fast performance even on spotty cellular connections</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Managing the submission process for the Apple App Store and Google Play</span>
                  </li>
                </ul>
              </div>

              {/* Structured Deliverables Specification */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Native-ready iOS and Android app packages</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Secure login and user authentication system</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>App Store &amp; Google Play listing configuration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Complete source code repository &amp; maintenance guide</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. SAAS, COMMERCE & AUTOMATION
          3-tier horizontal bands: SaaS & Custom Platforms, E-Commerce Solutions, AI & Business Automation
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="SaaS, Commerce & Automation">
        <div className="page-container space-y-12 md:space-y-16">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Practice Area 03</p>
            </div>
            <h2 className="type-heading text-ink">
              SaaS, Commerce &amp; Automation
            </h2>
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              We engineer custom software platforms, dependable online stores, and
              practical automated workflows that remove operational bottlenecks.
            </p>
          </div>

          {/* 3-Tier Horizontal Bands */}
          <div className="divide-y divide-hairline border-t border-b border-hairline">
            {/* Service 4: SaaS & Custom Platforms */}
            <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Identifier */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="type-label text-champagne-deep font-medium">04 / Platforms</span>
                </div>
                <h3 className="type-title text-ink font-medium text-2xl">
                  SaaS &amp; Custom Platforms
                </h3>
                <p className="type-label text-muted">Web Applications &amp; Internal Systems</p>
              </div>

              {/* Right Content Breakdown */}
              <div className="lg:col-span-8 space-y-6">
                {/* Simple explanation */}
                <p className="type-body text-muted leading-relaxed">
                  When off-the-shelf software cannot handle your company&apos;s unique workflow, or when
                  you want to launch a subscription software product of your own, we build custom web
                  platforms. We engineer stable, secure systems that can handle real daily work,
                  manage large databases, and grow alongside your company.
                </p>

                {/* What Code2Perform can help with */}
                <div className="pt-4 border-t border-hairline space-y-3">
                  <p className="type-label text-champagne-deep">What Code2Perform Can Help With</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Building secure customer portals where clients can log in and view their data
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Developing internal staff dashboards to replace messy spreadsheets
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Setting up recurring subscription billing and customer account management
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Engineering reliable databases with automated daily backups
                      </span>
                    </div>
                  </div>
                </div>

                {/* Structured Deliverables Specification */}
                <div className="pt-4 border-t border-hairline space-y-2.5">
                  <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-ink">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Custom web application with role-based permissions</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Subscription billing integration (e.g. Stripe)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Administrative dashboard &amp; reporting screens</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Secure database schema and API documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 5: E-Commerce Solutions */}
            <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Identifier */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="type-label text-champagne-deep font-medium">05 / Commerce</span>
                </div>
                <h3 className="type-title text-ink font-medium text-2xl">
                  E-Commerce Solutions
                </h3>
                <p className="type-label text-muted">Digital Storefronts &amp; Purchasing</p>
              </div>

              {/* Right Content Breakdown */}
              <div className="lg:col-span-8 space-y-6">
                {/* Simple explanation */}
                <p className="type-body text-muted leading-relaxed">
                  Selling products or services online requires speed, trust, and a friction-free checkout.
                  If an online store takes seconds to load or has a confusing payment form, buyers leave.
                  We build fast, dependable digital stores that present your products cleanly and make
                  purchasing simple for your customers.
                </p>

                {/* What Code2Perform can help with */}
                <div className="pt-4 border-t border-hairline space-y-3">
                  <p className="type-label text-champagne-deep">What Code2Perform Can Help With</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Building tailored online storefronts designed around your specific products
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Simplifying shopping carts and checkouts to reduce abandoned purchases
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Connecting secure payment processors, Apple Pay, Google Pay, and credit cards
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Syncing inventory counts, automated order receipts, and shipping notifications
                      </span>
                    </div>
                  </div>
                </div>

                {/* Structured Deliverables Specification */}
                <div className="pt-4 border-t border-hairline space-y-2.5">
                  <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-ink">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Fast-loading storefront and product catalog</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>One-page streamlined checkout flow</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Payment gateway integration with automated tax</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Order management and inventory sync pipeline</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 6: AI & Business Automation */}
            <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Identifier */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="type-label text-champagne-deep font-medium">06 / Automation</span>
                </div>
                <h3 className="type-title text-ink font-medium text-2xl">
                  AI &amp; Business Automation
                </h3>
                <p className="type-label text-muted">Workflow Engineering &amp; Time Savings</p>
              </div>

              {/* Right Content Breakdown */}
              <div className="lg:col-span-8 space-y-6">
                {/* Simple explanation */}
                <p className="type-body text-muted leading-relaxed">
                  Many teams spend dozens of hours every week manually copying information between
                  different tools, sorting emails, and updating records. We set up practical automated
                  connections between your everyday software so routine tasks handle themselves,
                  reducing human errors and giving your team time back.
                </p>

                {/* What Code2Perform can help with */}
                <div className="pt-4 border-t border-hairline space-y-3">
                  <p className="type-label text-champagne-deep">What Code2Perform Can Help With</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Connecting separate software tools so customer data updates automatically
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Automating customer inquiry intake and routing messages to the right person
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Extracting information from invoices, receipts, and intake forms automatically
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Building private internal search tools trained on your company handbooks
                      </span>
                    </div>
                  </div>
                </div>

                {/* Structured Deliverables Specification */}
                <div className="pt-4 border-t border-hairline space-y-2.5">
                  <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-ink">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Automated connectors between CRM, email, and databases</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Inquiry intake and automated triage pipeline</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Document data-extraction scripts with validation checks</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Error notification and workflow status dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PROJECT CTA
          Warm editorial invitation band on surface-alt
          ===================================================================== */}
      <section className="bg-surface-alt border-b border-hairline section-spacing" aria-label="Start a Project">
        <div className="page-container">
          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Start a Project</p>
            </div>

            <h2 className="type-heading text-ink">
              Not sure which service matches your project? Let&apos;s talk it through.
            </h2>

            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              You do not need a complete technical blueprint before reaching out. Tell us
              what your business is trying to accomplish, and we will help you figure out
              the simplest, most cost-effective way to build it.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="type-button inline-flex items-center justify-center w-full sm:w-auto px-7 py-4 bg-ink text-bone hover:bg-champagne-deep text-center"
              >
                Start a Conversation
              </Link>
              <Link
                href="/about"
                className="type-nav text-ink hover:text-champagne-deep inline-flex items-center justify-center sm:justify-start gap-1.5"
              >
                Learn how we work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
