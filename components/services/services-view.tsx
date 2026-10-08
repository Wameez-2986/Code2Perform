import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionCard as StackedCardSection } from "@/components/ui/section-card";

export function ServicesView() {
  return (
    <div className="relative w-full pt-4 sm:pt-6 pb-16 md:pb-24">
      {/* =====================================================================
          1. SERVICES HERO
          Editorial opening with practice anchor bar
          ===================================================================== */}
      <StackedCardSection
        index={0}
        totalSections={8}
        ariaLabel="Services Hero"
        id="services-hero"
      >
        <div className="page-container space-y-6 md:space-y-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <p className="type-label text-champagne-deep">Services &amp; Capabilities</p>
          </div>

          {/* Heading */}
          <h1 className="type-display text-ink max-w-5xl">
            Disciplined engineering, practical design, and dependable ongoing support.
          </h1>

          {/* Lower Split */}
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-8 space-y-3">
              <p className="type-body text-ink font-medium text-base sm:text-lg leading-relaxed">
                We design, build, and support digital products that solve real business problems.
                Whether you need a high-speed company website, a custom web platform, or a unified
                mobile app, we focus on what actually moves your business forward.
              </p>
              <p className="type-body text-muted text-sm sm:text-base leading-relaxed">
                Launch day is only the beginning. When appropriate, we can continue supporting
                your team with website maintenance, search visibility, workflow automation,
                and performance optimization—giving you a dependable digital partner without
                forced retainers or proprietary lock-in.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-2.5 pt-4 lg:pt-1 lg:pl-6 border-t lg:border-t-0 lg:border-l border-hairline">
              <p className="type-label text-champagne-deep">Six Primary Practices</p>
              <ol className="space-y-1.5 text-xs sm:text-sm text-ink font-medium">
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
      </StackedCardSection>

      {/* =====================================================================
          2. WEB & DIGITAL DEVELOPMENT (CARD 1)
          ===================================================================== */}
      <StackedCardSection
        index={1}
        totalSections={8}
        ariaLabel="Web & Digital Development"
        id="web-digital-development"
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Anchor & Narrative */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="type-label text-champagne-deep font-medium">01 / Practice</span>
              </div>
              <h2 className="type-heading text-ink text-xl sm:text-2xl">
                Web &amp; Digital Development
              </h2>
              <p className="type-body text-ink font-medium text-xs sm:text-sm leading-relaxed">
                Fast, reliable business websites built from clean code rather than fragile page builders.
              </p>
              <p className="type-body text-muted text-xs sm:text-sm leading-relaxed">
                Most company websites are slow, difficult to update, and weighed down with fragile plugins. We build custom websites using Next.js and TypeScript that load instantly, rank cleanly on search engines, and convert visitors without friction.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="type-button inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-ink text-bone hover:bg-champagne-deep text-center text-xs sm:text-sm"
                >
                  Discuss a Web Project
                </Link>
              </div>
            </div>

            {/* Right Deliverables, Scope & Post-Launch Support */}
            <div className="lg:col-span-7 space-y-3">
              {/* What Code2Perform Delivers */}
              <div className="space-y-1.5">
                <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Custom websites engineered for speed and stability
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Complete redesigns of outdated, hard-to-maintain sites
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Responsive mobile, tablet, and desktop layouts
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Straightforward setups so your team can update text safely
                    </p>
                  </div>
                </div>
              </div>

              {/* Structured Deliverables Specification */}
              <div className="pt-2.5 border-t border-hairline space-y-1.5">
                <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1 text-xs sm:text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Production-ready codebase with full ownership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Fully responsive layout tested across devices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Domain, SSL security, and hosting setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Technical SEO, accessibility &amp; Web Vitals audit</span>
                  </li>
                </ul>
              </div>

              {/* Natural Post-Launch Support Connection */}
              <div className="pt-2 border-t border-hairline space-y-0.5">
                <p className="type-label text-champagne-deep">Post-Launch Support</p>
                <p className="type-body-sm text-muted text-xs leading-relaxed">
                  After launch, we assist with ongoing website maintenance, code updates, security monitoring, search visibility improvements, and dedicated campaign landing pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          3. UI/UX & PRODUCT DESIGN (CARD 2)
          ===================================================================== */}
      <StackedCardSection
        index={2}
        totalSections={8}
        ariaLabel="UI/UX & Product Design"
        id="ui-ux-product-design"
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Anchor & Narrative */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="type-label text-champagne-deep font-medium">02 / Design</span>
              </div>
              <h2 className="type-heading text-ink text-xl sm:text-2xl">
                UI/UX &amp; Product Design
              </h2>
              <p className="type-body text-ink font-medium text-xs sm:text-sm leading-relaxed">
                Intuitive digital interfaces focused on clarity, user retention, and friction-free user journeys.
              </p>
              <p className="type-body text-muted text-xs sm:text-sm leading-relaxed">
                Design is not decoration; it is how easily a customer accomplishes their goals. We design interfaces that feel intuitive from the first click, balancing typography and visual hierarchies to eliminate user drop-off points.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="type-button inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-ink text-bone hover:bg-champagne-deep text-center text-xs sm:text-sm"
                >
                  Discuss a Design Project
                </Link>
              </div>
            </div>

            {/* Right Deliverables, Scope & Post-Launch Support */}
            <div className="lg:col-span-7 space-y-3">
              {/* What Code2Perform Delivers */}
              <div className="space-y-1.5">
                <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Mapping out clear user journeys so visitors never feel lost
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Auditing products to uncover and fix drop-off friction points
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Clean layouts with legible typography and balanced spacing
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Building reusable component libraries for seamless engineering
                    </p>
                  </div>
                </div>
              </div>

              {/* Structured Deliverables Specification */}
              <div className="pt-2.5 border-t border-hairline space-y-1.5">
                <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1 text-xs sm:text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Interactive clickable prototypes to test flows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Wireframes &amp; user journey maps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Figma design system &amp; reusable UI kit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Developer specifications, responsive rules &amp; assets</span>
                  </li>
                </ul>
              </div>

              {/* Post-Launch Capabilities */}
              <div className="pt-2 border-t border-hairline space-y-0.5">
                <p className="type-label text-champagne-deep">Post-Launch Support</p>
                <p className="type-body-sm text-muted text-xs leading-relaxed">
                  As real customers use the product, we help analyze user feedback, perform UX audits, and design conversion rate improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          4. MOBILE APP DEVELOPMENT (CARD 3)
          ===================================================================== */}
      <StackedCardSection
        index={3}
        totalSections={8}
        ariaLabel="Mobile App Development"
        id="mobile-app-development"
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Anchor & Narrative */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="type-label text-champagne-deep font-medium">03 / Mobile</span>
              </div>
              <h2 className="type-heading text-ink text-xl sm:text-2xl">
                Mobile App Development
              </h2>
              <p className="type-body text-ink font-medium text-xs sm:text-sm leading-relaxed">
                Smooth, reliable mobile applications engineered for iOS and Android from a unified codebase.
              </p>
              <p className="type-body text-muted text-xs sm:text-sm leading-relaxed">
                Most customers interact with digital services on their phones. We build smooth, dependable mobile apps running consistently across iPhone and Android, connecting natively to your cloud APIs without paying for separate development teams.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="type-button inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-ink text-bone hover:bg-champagne-deep text-center text-xs sm:text-sm"
                >
                  Discuss a Mobile Project
                </Link>
              </div>
            </div>

            {/* Right Deliverables, Scope & Post-Launch Support */}
            <div className="lg:col-span-7 space-y-3">
              {/* What Code2Perform Delivers */}
              <div className="space-y-1.5">
                <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Applications that perform reliably on both iOS and Android
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Connecting mobile apps to existing web systems and accounts
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Optimizing apps for fast response on cellular networks
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Managing submissions to Apple App Store and Google Play
                    </p>
                  </div>
                </div>
              </div>

              {/* Structured Deliverables Specification */}
              <div className="pt-2.5 border-t border-hairline space-y-1.5">
                <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1 text-xs sm:text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Production iOS and Android application packages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Secure login, token storage, and authentication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>App Store &amp; Google Play listing configuration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Full codebase ownership with deployment guides</span>
                  </li>
                </ul>
              </div>

              {/* Post-Launch Capabilities */}
              <div className="pt-2 border-t border-hairline space-y-0.5">
                <p className="type-label text-champagne-deep">Post-Launch Support</p>
                <p className="type-body-sm text-muted text-xs leading-relaxed">
                  We remain available to keep apps compatible with new mobile OS releases, resolve edge-case bugs, and deploy feature updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          5. SAAS & CUSTOM PLATFORMS (CARD 4)
          ===================================================================== */}
      <StackedCardSection
        index={4}
        totalSections={8}
        ariaLabel="SaaS & Custom Platforms"
        id="saas-custom-platforms"
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Anchor & Narrative */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="type-label text-champagne-deep font-medium">04 / Platforms</span>
              </div>
              <h2 className="type-heading text-ink text-xl sm:text-2xl">
                SaaS &amp; Custom Platforms
              </h2>
              <p className="type-body text-ink font-medium text-xs sm:text-sm leading-relaxed">
                Web applications and internal software platforms engineered for stability, security, and growth.
              </p>
              <p className="type-body text-muted text-xs sm:text-sm leading-relaxed">
                When off-the-shelf software cannot handle your operations or you want to launch a SaaS product, we build stable, scalable web platforms with multi-tenant data architecture and automated billing to protect your data.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="type-button inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-ink text-bone hover:bg-champagne-deep text-center text-xs sm:text-sm"
                >
                  Discuss a Platform
                </Link>
              </div>
            </div>

            {/* Right Deliverables, Scope & Post-Launch Support */}
            <div className="lg:col-span-7 space-y-3">
              {/* What Code2Perform Delivers */}
              <div className="space-y-1.5">
                <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Secure customer portals where clients log in to access data
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Internal staff dashboards to replace messy spreadsheets
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Recurring subscription billing, invoicing &amp; accounts
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Reliable relational databases with automated daily backups
                    </p>
                  </div>
                </div>
              </div>

              {/* Structured Deliverables Specification */}
              <div className="pt-2.5 border-t border-hairline space-y-1.5">
                <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1 text-xs sm:text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Custom web application with role-based permissions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Subscription billing integration (e.g., Stripe)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Administrative dashboard &amp; reporting screens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Secure database schema &amp; API documentation</span>
                  </li>
                </ul>
              </div>

              {/* Post-Launch Capabilities */}
              <div className="pt-2 border-t border-hairline space-y-0.5">
                <p className="type-label text-champagne-deep">Post-Launch Support</p>
                <p className="type-body-sm text-muted text-xs leading-relaxed">
                  We support ongoing platform health, database performance, security reviews, and build additional feature modules on your timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          6. E-COMMERCE SOLUTIONS (CARD 5)
          ===================================================================== */}
      <StackedCardSection
        index={5}
        totalSections={8}
        ariaLabel="E-Commerce Solutions"
        id="ecommerce-solutions"
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Anchor & Narrative */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="type-label text-champagne-deep font-medium">05 / Commerce</span>
              </div>
              <h2 className="type-heading text-ink text-xl sm:text-2xl">
                E-Commerce Solutions
              </h2>
              <p className="type-body text-ink font-medium text-xs sm:text-sm leading-relaxed">
                Digital storefronts, secure checkout flows, and payment architectures built to maximize conversions.
              </p>
              <p className="type-body text-muted text-xs sm:text-sm leading-relaxed">
                Selling online requires trust, speed, and friction-free payment flows. We build fast, dependable storefronts with top-tier payment gateways, automated tax engines, and inventory sync so purchasing is effortless.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="type-button inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-ink text-bone hover:bg-champagne-deep text-center text-xs sm:text-sm"
                >
                  Discuss a Store
                </Link>
              </div>
            </div>

            {/* Right Deliverables, Scope & Post-Launch Support */}
            <div className="lg:col-span-7 space-y-3">
              {/* What Code2Perform Delivers */}
              <div className="space-y-1.5">
                <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Tailored storefronts designed around your products
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Simplified checkout flows to reduce cart abandonment
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Credit cards, Apple Pay, Google Pay &amp; local gateways
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Automated receipts, tax calculation, and shipping notices
                    </p>
                  </div>
                </div>
              </div>

              {/* Structured Deliverables Specification */}
              <div className="pt-2.5 border-t border-hairline space-y-1.5">
                <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1 text-xs sm:text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Fast-loading storefront and organized catalog</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Streamlined, friction-free checkout flow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Payment processor setup with automated tax support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Order management &amp; inventory synchronization</span>
                  </li>
                </ul>
              </div>

              {/* Post-Launch Capabilities */}
              <div className="pt-2 border-t border-hairline space-y-0.5">
                <p className="type-label text-champagne-deep">Post-Launch Support</p>
                <p className="type-body-sm text-muted text-xs leading-relaxed">
                  Following store launch, we support conversion rate optimization, promotional campaign landing pages, checkout speed audits, and ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          7. AI & BUSINESS AUTOMATION (CARD 6)
          ===================================================================== */}
      <StackedCardSection
        index={6}
        totalSections={8}
        ariaLabel="AI & Business Automation"
        id="ai-business-automation"
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Anchor & Narrative */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="type-label text-champagne-deep font-medium">06 / Automation</span>
              </div>
              <h2 className="type-heading text-ink text-xl sm:text-2xl">
                AI &amp; Business Automation
              </h2>
              <p className="type-body text-ink font-medium text-xs sm:text-sm leading-relaxed">
                Workflow engineering, system integrations, and practical automated bridges that remove bottlenecks.
              </p>
              <p className="type-body text-muted text-xs sm:text-sm leading-relaxed">
                Many teams waste hours manually copying data between tools and sorting emails. We build practical automated connectors and internal assistants grounded strictly in your documentation to give your team valuable time back.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="type-button inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-ink text-bone hover:bg-champagne-deep text-center text-xs sm:text-sm"
                >
                  Discuss Automation
                </Link>
              </div>
            </div>

            {/* Right Deliverables, Scope & Post-Launch Support */}
            <div className="lg:col-span-7 space-y-3">
              {/* What Code2Perform Delivers */}
              <div className="space-y-1.5">
                <p className="type-label text-champagne-deep">What Code2Perform Delivers</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Connecting tools so customer and sales data updates automatically
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Automating customer inquiry intake and routing messages
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Extracting structured info from invoices and forms automatically
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-champagne-deep shrink-0 mt-0.5" />
                    <p className="type-body-sm text-ink text-xs sm:text-sm">
                      Setting up internal AI assistants grounded strictly in your docs
                    </p>
                  </div>
                </div>
              </div>

              {/* Structured Deliverables Specification */}
              <div className="pt-2.5 border-t border-hairline space-y-1.5">
                <p className="type-label text-champagne-deep">Tangible Deliverables</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1 text-xs sm:text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Automated connectors for CRM, email, forms &amp; DBs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Inquiry intake, validation &amp; automated triage pipeline</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Data-extraction scripts with error-checking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                    <span>Notification triggers &amp; workflow status dashboard</span>
                  </li>
                </ul>
              </div>

              {/* Post-Launch Capabilities */}
              <div className="pt-2 border-t border-hairline space-y-0.5">
                <p className="type-label text-champagne-deep">Post-Launch Support</p>
                <p className="type-body-sm text-muted text-xs leading-relaxed">
                  As your workflows evolve, we maintain API connectors, introduce customer support automation, and build additional internal AI assistants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          8. PROJECT CTA (CARD 7)
          Warm editorial invitation band on surface-alt
          ===================================================================== */}
      <StackedCardSection
        index={7}
        totalSections={8}
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
              Not sure which service matches your project? Let&apos;s talk it through.
            </h2>

            <p className="type-body text-muted text-sm sm:text-base max-w-2xl leading-relaxed pt-1">
              You do not need a complete technical blueprint before reaching out. Tell us
              what your business is trying to accomplish, and we will help you figure out
              the simplest, most cost-effective way to build it—and how to keep it performing over time.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="type-button inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-ink text-bone hover:bg-champagne-deep text-center"
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
      </StackedCardSection>
    </div>
  );
}
