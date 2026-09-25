import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export function TermsView() {
  return (
    <div className="w-full">
      {/* =====================================================================
          1. TERMS HERO / HEADER
          Editorial document header with metadata
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing-sm" aria-label="Terms of Service Header">
        <div className="page-container space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <p className="type-label text-champagne-deep">Legal Documentation</p>
          </div>

          <h1 className="type-display text-ink max-w-4xl">
            Terms of Service
          </h1>

          <div className="pt-4 border-t border-hairline flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
            <p>
              <strong className="text-ink font-medium">Effective Date:</strong>{" "}
              [January 1, 2026]
            </p>
            <span className="text-hairline">•</span>
            <p>
              <strong className="text-ink font-medium">Last Updated:</strong>{" "}
              [January 1, 2026]
            </p>
            <span className="text-hairline">•</span>
            <p>
              <strong className="text-ink font-medium">Entity:</strong>{" "}
              [Code2Perform Legal Entity Name]
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. DOCUMENT CONTENT
          Clean, human-readable editorial document layout
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Terms of Service Content">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Quick Table of Contents */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="p-6 bg-surface-alt border border-hairline space-y-4">
                <p className="type-label text-champagne-deep">Agreement Sections</p>
                <nav aria-label="Terms of Service Table of Contents">
                  <ol className="space-y-2 text-xs text-ink">
                    <li>
                      <a href="#introduction" className="hover:text-champagne-deep">
                        01. Introduction
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="hover:text-champagne-deep">
                        02. Services &amp; Engagements
                      </a>
                    </li>
                    <li>
                      <a href="#client-responsibilities" className="hover:text-champagne-deep">
                        03. Client Responsibilities
                      </a>
                    </li>
                    <li>
                      <a href="#project-scope" className="hover:text-champagne-deep">
                        04. Project Scope &amp; Revisions
                      </a>
                    </li>
                    <li>
                      <a href="#payments" className="hover:text-champagne-deep">
                        05. Payments &amp; Invoicing
                      </a>
                    </li>
                    <li>
                      <a href="#intellectual-property" className="hover:text-champagne-deep">
                        06. Intellectual Property
                      </a>
                    </li>
                    <li>
                      <a href="#third-party-services" className="hover:text-champagne-deep">
                        07. Third-Party Services
                      </a>
                    </li>
                    <li>
                      <a href="#confidentiality" className="hover:text-champagne-deep">
                        08. Confidentiality
                      </a>
                    </li>
                    <li>
                      <a href="#limitation-of-liability" className="hover:text-champagne-deep">
                        09. Limitation of Liability
                      </a>
                    </li>
                    <li>
                      <a href="#termination" className="hover:text-champagne-deep">
                        10. Termination
                      </a>
                    </li>
                    <li>
                      <a href="#changes-to-terms" className="hover:text-champagne-deep">
                        11. Changes to Terms
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:text-champagne-deep">
                        12. Contact
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="px-1 space-y-2">
                <p className="type-legal text-muted">
                  Questions about this agreement? Reach us directly at{" "}
                  <a
                    href="mailto:legal@code2perform.com"
                    className="text-ink font-medium hover:text-champagne-deep"
                  >
                    legal@code2perform.com
                  </a>
                </p>
              </div>
            </aside>

            {/* Right Column: Terms Text */}
            <div className="lg:col-span-8 max-w-3xl space-y-12 text-ink">
              {/* 01. Introduction */}
              <article id="introduction" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">01</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Introduction
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    These Terms of Service (&quot;Terms&quot;) govern the use of the website operated
                    by Code2Perform (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and define the
                    general framework under which we provide digital design and software engineering
                    services to clients.
                  </p>
                  <p>
                    By accessing our website ([www.code2perform.com]) or engaging our agency for
                    services, you agree to be bound by these Terms. If you are entering into this
                    agreement on behalf of a company or other legal entity, you represent that you
                    have the authority to bind that entity.
                  </p>
                </div>
              </article>

              {/* 02. Services & Engagements */}
              <article id="services" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">02</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Services &amp; Engagements
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    Code2Perform provides digital engineering and design services across six core
                    practices:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>Web &amp; Digital Development</li>
                    <li>UI/UX &amp; Product Design</li>
                    <li>Mobile App Development</li>
                    <li>SaaS &amp; Custom Platforms</li>
                    <li>E-Commerce Solutions</li>
                    <li>AI &amp; Business Automation</li>
                  </ul>
                  <p>
                    Specific deliverables, milestones, schedules, and fee arrangements for client
                    engagements are documented in separate written proposals, Statements of Work
                    (&quot;SOW&quot;), or service agreements mutually approved by both parties. In
                    the event of any direct conflict between these general Terms and an individual
                    SOW, the specific terms of the SOW will take precedence for that project.
                  </p>
                </div>
              </article>

              {/* 03. Client Responsibilities */}
              <article id="client-responsibilities" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">03</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Client Responsibilities
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    Successful digital engineering relies on active collaboration. To ensure projects
                    progress according to schedule, clients agree to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>Designate a primary contact authorized to make decisions and approvals</li>
                    <li>Provide necessary content, brand assets, credentials, and technical access in a timely manner</li>
                    <li>Provide constructive, consolidated feedback on deliverables within the agreed review windows</li>
                    <li>Ensure that all materials provided to us do not infringe upon any third-party intellectual property or rights</li>
                  </ul>
                  <p>
                    Delays resulting from late approvals, missing assets, or unavailable client personnel
                    may require adjustments to project delivery schedules.
                  </p>
                </div>
              </article>

              {/* 04. Project Scope & Revisions */}
              <article id="project-scope" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">04</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Project Scope &amp; Revisions
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    Every project is scoped with defined boundaries to maintain quality and budget
                    discipline. Work included in the scope is explicitly stated in the relevant
                    project agreement.
                  </p>
                  <p>
                    If you request features, architectural changes, or revisions that fall outside the
                    defined scope, we will evaluate the request and provide a clear written estimate
                    detailing any additional costs or schedule impacts before performing the additional
                    work. We do not begin out-of-scope work or bill surprise fees without prior
                    written approval.
                  </p>
                </div>
              </article>

              {/* 05. Payments & Invoicing */}
              <article id="payments" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">05</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Payments &amp; Invoicing
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    Payment terms, billing schedules, and project milestone structures are defined
                    in each project agreement.
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>Fixed-scope projects generally require an initial deposit prior to work commencement, with subsequent payments linked to agreed milestone deliverables.</li>
                    <li>Time-and-materials or retainer engagements are invoiced according to agreed periodic billing cycles.</li>
                    <li>Invoices are due upon receipt or within the payment window specified in the project agreement ([e.g. Net 15 or Net 30 days]).</li>
                  </ul>
                  <p>
                    In the event of overdue invoices, we reserve the right to pause active development
                    work until payments are brought up to date, with written notice provided.
                  </p>
                </div>
              </article>

              {/* 06. Intellectual Property */}
              <article id="intellectual-property" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">06</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Intellectual Property
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    We believe in complete ownership for our clients:
                  </p>
                  <div className="space-y-2">
                    <h3 className="type-body text-ink font-medium">Client Ownership</h3>
                    <p>
                      Upon receipt of full payment for the relevant deliverables, all right, title,
                      and interest in the custom code, designs, and visual assets created specifically
                      for your project transfer entirely to you.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="type-body text-ink font-medium">Pre-Existing &amp; Open Source Tools</h3>
                    <p>
                      Code2Perform retains ownership of its pre-existing proprietary frameworks,
                      general developer utilities, and knowledge base. Open-source libraries incorporated
                      into your project remain subject to their respective open-source licenses
                      (e.g., MIT, Apache 2.0).
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="type-body text-ink font-medium">Portfolio Rights</h3>
                    <p>
                      Unless explicitly agreed otherwise in a non-disclosure agreement, Code2Perform
                      reserves the right to reference the work completed in professional portfolio
                      displays and case studies once the product is publicly launched.
                    </p>
                  </div>
                </div>
              </article>

              {/* 07. Third-Party Services */}
              <article id="third-party-services" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">07</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Third-Party Services
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    Modern web and software projects often rely on third-party services such as hosting
                    providers, payment processors (e.g. Stripe), email notification tools, and domain
                    registrars.
                  </p>
                  <p>
                    Whenever possible, third-party accounts are established directly in the client&apos;s
                    name so that you retain direct ownership and control. We are not responsible for
                    interruptions, fee changes, or policy alterations made by third-party platform
                    operators.
                  </p>
                </div>
              </article>

              {/* 08. Confidentiality */}
              <article id="confidentiality" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">08</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Confidentiality
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    Both parties agree to treat as confidential any proprietary, technical, financial,
                    or business information disclosed during discussions or throughout the project.
                  </p>
                  <p>
                    Neither party will disclose confidential information to any third party without
                    prior written consent, except to employees, contractors, or legal advisors who need
                    to know such information and are bound by equivalent confidentiality obligations.
                  </p>
                </div>
              </article>

              {/* 09. Limitation of Liability */}
              <article id="limitation-of-liability" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">09</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Limitation of Liability
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    To the maximum extent permitted by applicable law, neither party will be liable
                    to the other for any indirect, incidental, special, consequential, or punitive
                    damages, including lost profits or business interruption, arising out of or in
                    connection with our services.
                  </p>
                  <p>
                    Except in cases of gross negligence, willful misconduct, or breach of
                    confidentiality, our total aggregate liability arising under any project agreement
                    will not exceed the total fees paid by the client to Code2Perform under the specific
                    Statement of Work giving rise to the claim.
                  </p>
                </div>
              </article>

              {/* 10. Termination */}
              <article id="termination" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">10</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Termination
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    Either party may terminate an active service agreement under the terms established
                    in the Statement of Work, or by providing written notice if the other party commits
                    a material breach of these Terms and fails to cure that breach within [30 days] of
                    written notice.
                  </p>
                  <p>
                    Upon termination, the client agrees to pay Code2Perform for all completed milestones
                    and approved work performed up to the effective termination date. Upon receipt of
                    payment, we will transfer all completed deliverables and source code in our
                    possession.
                  </p>
                </div>
              </article>

              {/* 11. Changes to Terms */}
              <article id="changes-to-terms" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">11</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Changes to Terms
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    We may revise these Terms of Service periodically to reflect changes in our
                    practices or legal requirements. When revisions occur, we will update the
                    &quot;Last Updated&quot; date at the top of this page.
                  </p>
                  <p>
                    Continued use of our website or services following any updates signifies your
                    acceptance of the revised Terms.
                  </p>
                </div>
              </article>

              {/* 12. Contact & Legal Details */}
              <article id="contact" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">12</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Contact &amp; Legal Details
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-4">
                  <p>
                    For inquiries concerning these Terms of Service, notices, or project agreements,
                    please contact us:
                  </p>
                  <div className="p-6 bg-surface-alt border border-hairline space-y-3 text-sm">
                    <p className="font-medium text-ink">[Code2Perform Legal Entity Name]</p>
                    <p className="text-muted">
                      Attn: Legal &amp; Contracts<br />
                      [Mailing Address / Business Location]<br />
                      [City, Postal Code, Country]
                    </p>
                    <p className="type-legal text-muted">
                      Governing Jurisdiction: [Applicable Country / State Jurisdiction as specified in SOW]
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-ink">
                      <Mail className="h-4 w-4 text-champagne-deep shrink-0" />
                      <a
                        href="mailto:legal@code2perform.com"
                        className="hover:text-champagne-deep font-medium break-all"
                      >
                        legal@code2perform.com
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              {/* Navigation Footer */}
              <div className="pt-10 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                  href="/home"
                  className="type-nav text-ink hover:text-champagne-deep inline-flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Return to Home
                </Link>
                <Link
                  href="/contact"
                  className="type-nav text-ink hover:text-champagne-deep"
                >
                  Start a project conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
