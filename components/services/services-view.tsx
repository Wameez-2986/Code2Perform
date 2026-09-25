import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

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
            Disciplined engineering, practical design, and dependable ongoing support.
          </h1>

          {/* Lower Split */}
          <div className="pt-8 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <p className="type-body text-ink font-medium text-lg leading-relaxed">
                We design, build, and support digital products that solve real business problems.
                Whether you need a high-speed company website, a custom web platform, or a unified
                mobile app, we focus on what actually moves your business forward.
              </p>
              <p className="type-body text-muted leading-relaxed">
                Launch day is only the beginning. When appropriate, we can continue supporting
                your team with website maintenance, search visibility, workflow automation,
                and performance optimization—giving you a dependable digital partner without
                forced retainers or proprietary lock-in.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-3 pt-1 lg:pl-6 border-t lg:border-t-0 lg:border-l border-hairline">
              <p className="type-label text-champagne-deep">Six Primary Practices</p>
              <ol className="space-y-2 text-sm text-ink font-medium">
                <li className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium text-xs">01</span>
                  <span>Web &amp; Digital Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium text-xs">02</span>
                  <span>UI/UX &amp; Product Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium text-xs">03</span>
                  <span>Mobile App Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium text-xs">04</span>
                  <span>SaaS &amp; Custom Platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium text-xs">05</span>
                  <span>E-Commerce Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium text-xs">06</span>
                  <span>AI &amp; Business Automation</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. WEB & DIGITAL DEVELOPMENT
          Feature layout: 5:7 asymmetric split with practical client checklist,
          deliverables & natural post-launch capabilities
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

            {/* Right Explanation, Scope, Deliverables & Post-Launch Support */}
            <div className="lg:col-span-7 space-y-8">
              {/* Plain-English explanation */}
              <div className="space-y-4">
                <p className="type-body text-muted leading-relaxed">
                  Most company websites are slow, difficult to update, and weighed down with dozens of
                  conflicting plugins that break unexpectedly. When prospective clients visit,
                  every second of delay causes them to lose patience and navigate elsewhere.
                </p>
                <p className="type-body text-muted leading-relaxed">
                  We build custom websites using Next.js and TypeScript that load almost instantly and
                  look sharp on every screen. Every page is structured so search engines can index it easily
                  and your visitors can understand your value proposition without confusion.
                </p>
              </div>

              {/* What Code2Perform can actually deliver */}
              <div className="pt-6 border-t border-hairline space-y-4">
                <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-1" />
                    <p className="type-body-sm text-ink">
                      Custom business websites engineered from the ground up for speed and stability
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-1" />
                    <p className="type-body-sm text-ink">
                      Complete redesigns of slow, outdated, or hard-to-maintain websites
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-1" />
                    <p className="type-body-sm text-ink">
                      Responsive mobile, tablet, and desktop layouts with strong typography
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-1" />
                    <p className="type-body-sm text-ink">
                      Straightforward content editing setups so your team can update text safely
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
                    <span>Production-ready website codebase with full ownership</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Fully responsive layout tested across device sizes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Domain, SSL security, and production hosting setup</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Technical SEO, accessibility, and Core Web Vitals audit</span>
                  </li>
                </ul>
              </div>

              {/* Natural Post-Launch Support Connection */}
              <div className="pt-6 border-t border-hairline space-y-2">
                <p className="type-label text-champagne-deep">Post-Launch Support Areas We Can Discuss</p>
                <p className="type-body-sm text-muted leading-relaxed">
                  After launch, we can assist with ongoing website maintenance, code updates, security
                  monitoring, and bug fixes. When your business needs to expand its reach, we can also discuss
                  search visibility improvements, content updates, and dedicated campaign landing pages.
                </p>
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
          <div className="border-t border-b border-hairline">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-hairline">
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
                  Design is not decoration; it is how easily a customer can accomplish what they came
                  to do. We design interfaces that feel intuitive from the first click,
                  removing visual clutter and guiding users toward their goals without friction.
                </p>
              </div>

              {/* What Code2Perform can deliver */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                <ul className="space-y-2.5 text-sm text-ink">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Mapping out clear user journeys so visitors never feel confused</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Auditing existing products to uncover and fix confusing drop-off points</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Creating clean screen layouts with legible typography and balanced spacing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Building reusable component libraries for seamless engineering handoff</span>
                  </li>
                </ul>
              </div>

              {/* Structured Deliverables Specification */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Interactive clickable prototypes to test flows before building</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Screen-by-screen wireframes &amp; user journey maps</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Figma design system &amp; reusable UI component kit</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Developer specifications, responsive rules, and visual assets</span>
                  </li>
                </ul>
              </div>

              {/* Post-Launch Capabilities */}
              <div className="pt-6 border-t border-hairline space-y-2">
                <p className="type-label text-champagne-deep">Post-Launch Areas We Can Support</p>
                <p className="type-body-sm text-muted leading-relaxed">
                  As real customers use the product, we can help analyze user feedback, perform UX
                  audits, and design conversion improvements to optimize key interaction points.
                </p>
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

              {/* What Code2Perform can deliver */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                <ul className="space-y-2.5 text-sm text-ink">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Mobile applications that perform reliably on both iOS and Android</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Connecting mobile apps to your existing web systems and customer accounts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Optimizing apps for fast response times even on spotty cellular connections</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                    <span>Guiding and managing submissions to the Apple App Store and Google Play</span>
                  </li>
                </ul>
              </div>

              {/* Structured Deliverables Specification */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Production iOS and Android application packages</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Secure login, token storage, and customer authentication</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>App Store &amp; Google Play listing configuration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Full codebase ownership with deployment and maintenance documentation</span>
                  </li>
                </ul>
              </div>

              {/* Post-Launch Capabilities */}
              <div className="pt-6 border-t border-hairline space-y-2">
                <p className="type-label text-champagne-deep">Post-Launch Areas We Can Support</p>
                <p className="type-body-sm text-muted leading-relaxed">
                  We remain available to help keep apps compatible with new mobile OS releases, resolve
                  edge-case bugs, and roll out feature updates when your business is ready.
                </p>
              </div>
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
          <div className="border-t border-b border-hairline">
            <div className="divide-y divide-hairline">
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
                {/* Plain-English explanation */}
                <p className="type-body text-muted leading-relaxed">
                  When off-the-shelf software cannot handle your company&apos;s unique operations, or when
                  you want to launch a subscription software product of your own, we build custom web
                  platforms. We engineer stable, secure systems that can handle real daily work,
                  manage large databases, and scale alongside your business.
                </p>

                {/* What Code2Perform can deliver */}
                <div className="pt-4 border-t border-hairline space-y-3">
                  <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Secure customer portals where clients can log in and access their data
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Internal staff dashboards to replace messy spreadsheets and manual processes
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Recurring subscription billing, customer invoicing, and account management
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Reliable relational databases with automated daily backups and data integrity
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
                      <span>Subscription billing integration (e.g., Stripe)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Administrative dashboard &amp; business reporting screens</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Secure database schema and developer API documentation</span>
                    </li>
                  </ul>
                </div>

                {/* Post-Launch Capabilities */}
                <div className="pt-4 border-t border-hairline space-y-2">
                  <p className="type-label text-champagne-deep">Post-Launch Areas We Can Support</p>
                  <p className="type-body-sm text-muted leading-relaxed">
                    We can support ongoing platform health, database performance, security reviews, and
                    technical support. When you identify new business requirements, we can discuss developing
                    additional feature modules on your timeline.
                  </p>
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
                {/* Plain-English explanation */}
                <p className="type-body text-muted leading-relaxed">
                  Selling products or services online requires speed, trust, and a friction-free checkout.
                  If an online store takes seconds to load or has a confusing payment form, buyers leave.
                  We build fast, dependable digital stores that present your offerings cleanly and make
                  purchasing simple for your customers.
                </p>

                {/* What Code2Perform can deliver */}
                <div className="pt-4 border-t border-hairline space-y-3">
                  <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Tailored online storefronts designed around your specific products or services
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Simplified shopping carts and checkout flows to reduce abandoned purchases
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Integration with credit cards, Apple Pay, Google Pay, and localized gateways
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Automated order confirmation receipts, tax calculations, and shipping notifications
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
                      <span>Fast-loading storefront and organized product catalog</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Streamlined, friction-free checkout flow</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Payment processor configuration with automated tax support</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Order management and inventory synchronization pipeline</span>
                    </li>
                  </ul>
                </div>

                {/* Post-Launch Capabilities */}
                <div className="pt-4 border-t border-hairline space-y-2">
                  <p className="type-label text-champagne-deep">Post-Launch Areas We Can Support</p>
                  <p className="type-body-sm text-muted leading-relaxed">
                    Following store launch, we can support conversion rate optimization, promotional
                    campaign landing pages, checkout speed audits, and ongoing digital store maintenance.
                  </p>
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
                {/* Plain-English explanation */}
                <p className="type-body text-muted leading-relaxed">
                  Many teams spend dozens of hours every week manually copying information between
                  different tools, sorting emails, and updating records. We build practical automated
                  bridges between your everyday software so routine tasks handle themselves,
                  reducing human errors and giving your team valuable time back.
                </p>

                {/* What Code2Perform can deliver */}
                <div className="pt-4 border-t border-hairline space-y-3">
                  <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Connecting separate business tools so customer and sales data updates automatically
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Automating customer inquiry intake and routing messages to the right staff member
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Extracting structured information from invoices, receipts, and intake forms automatically
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                      <span className="type-body-sm text-ink">
                        Setting up internal AI assistants grounded strictly in your company documentation
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
                      <span>Automated connectors between CRM, email, forms, and databases</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Inquiry intake, validation, and automated triage pipeline</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Data-extraction scripts with validation and error-checking</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      <span>Notification triggers and automated workflow status dashboard</span>
                    </li>
                  </ul>
                </div>

                {/* Post-Launch Capabilities */}
                <div className="pt-4 border-t border-hairline space-y-2">
                  <p className="type-label text-champagne-deep">Post-Launch Areas We Can Support</p>
                  <p className="type-body-sm text-muted leading-relaxed">
                    As your business workflows evolve, we can maintain API connectors, introduce customer
                    support automation, and build additional internal AI assistants to automate new manual bottlenecks.
                  </p>
                </div>
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
              <p className="type-label text-champagne-deep">Start a Conversation</p>
            </div>

            <h2 className="type-heading text-ink">
              Not sure which service matches your project? Let&apos;s talk it through.
            </h2>

            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              You do not need a complete technical blueprint before reaching out. Tell us
              what your business is trying to accomplish, and we will help you figure out
              the simplest, most cost-effective way to build it—and how to keep it performing over time.
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
                Learn how we partner with clients
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
