import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export function PrivacyView() {
  return (
    <div className="w-full">
      {/* =====================================================================
          1. PRIVACY HERO / HEADER
          Clean editorial header with document metadata
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing-sm" aria-label="Privacy Policy Header">
        <div className="page-container space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <p className="type-label text-champagne-deep">Legal Documentation</p>
          </div>

          <h1 className="type-display text-ink max-w-4xl">
            Privacy Policy
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
      <section className="border-b border-hairline section-spacing" aria-label="Privacy Policy Content">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Quick Table of Contents */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="p-6 bg-surface-alt border border-hairline space-y-4">
                <p className="type-label text-champagne-deep">Policy Sections</p>
                <nav aria-label="Privacy Policy Table of Contents">
                  <ol className="space-y-2 text-xs text-ink">
                    <li>
                      <a href="#introduction" className="hover:text-champagne-deep">
                        01. Introduction
                      </a>
                    </li>
                    <li>
                      <a href="#information-we-collect" className="hover:text-champagne-deep">
                        02. Information We Collect
                      </a>
                    </li>
                    <li>
                      <a href="#how-we-use-information" className="hover:text-champagne-deep">
                        03. How We Use Information
                      </a>
                    </li>
                    <li>
                      <a href="#cookies" className="hover:text-champagne-deep">
                        04. Cookies &amp; Similar Technologies
                      </a>
                    </li>
                    <li>
                      <a href="#data-sharing" className="hover:text-champagne-deep">
                        05. Data Sharing &amp; Third Parties
                      </a>
                    </li>
                    <li>
                      <a href="#data-security" className="hover:text-champagne-deep">
                        06. Data Security
                      </a>
                    </li>
                    <li>
                      <a href="#data-retention" className="hover:text-champagne-deep">
                        07. Data Retention
                      </a>
                    </li>
                    <li>
                      <a href="#user-rights" className="hover:text-champagne-deep">
                        08. Your Rights
                      </a>
                    </li>
                    <li>
                      <a href="#policy-updates" className="hover:text-champagne-deep">
                        09. Policy Updates
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:text-champagne-deep">
                        10. Contact Us
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="px-1 space-y-2">
                <p className="type-legal text-muted">
                  Questions about your data? Reach us directly at{" "}
                  <a
                    href="mailto:mubeenk710@gmail.com"
                    className="text-ink font-medium hover:text-champagne-deep"
                  >
                    mubeenk710@gmail.com
                  </a>
                </p>
              </div>
            </aside>

            {/* Right Column: Policy Text */}
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
                    Code2Perform (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a digital design
                    and engineering agency. We provide website development, mobile application
                    engineering, SaaS platform architecture, and business automation services.
                  </p>
                  <p>
                    This Privacy Policy explains in straightforward terms how we collect, use,
                    and safeguard information when you visit our website ([www.code2perform.com]),
                    reach out through our contact forms, or communicate with our team. We believe
                    in collecting only the minimum information necessary to conduct genuine business.
                  </p>
                </div>
              </article>

              {/* 02. Information We Collect */}
              <article id="information-we-collect" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">02</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Information We Collect
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-4">
                  <p>
                    We collect information in two simple ways: information you provide directly,
                    and limited technical information gathered automatically when you visit our site.
                  </p>

                  <div className="space-y-2">
                    <h3 className="type-body text-ink font-medium">Information You Provide Directly</h3>
                    <p>
                      When you submit an inquiry through our contact form or send us an email,
                      you may provide:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Your name</li>
                      <li>Your business email address</li>
                      <li>Company or organization name</li>
                      <li>The type of service you are exploring</li>
                      <li>Project descriptions, timelines, and business requirements</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="type-body text-ink font-medium">Information Collected Automatically</h3>
                    <p>
                      When you navigate our website, our hosting infrastructure may record standard,
                      non-identifying technical data in server access logs, such as:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Browser type and operating system</li>
                      <li>Device category (desktop, tablet, mobile)</li>
                      <li>Referring website or search query</li>
                      <li>Pages visited and date/time stamps</li>
                      <li>IP address (used solely for security and network diagnostic purposes)</li>
                    </ul>
                  </div>

                  <p className="type-body-sm text-ink font-medium bg-surface-alt p-4 border border-hairline">
                    We do not buy, sell, or rent personal data. We do not engage in behavioral
                    surveillance advertising or cross-site tracking.
                  </p>
                </div>
              </article>

              {/* 03. How We Use Information */}
              <article id="how-we-use-information" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">03</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    How We Use Information
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>We use the information we collect strictly for legitimate business purposes:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>To evaluate project inquiries and respond with relevant information and proposals</li>
                    <li>To communicate with active clients regarding deliverables, contracts, and invoices</li>
                    <li>To diagnose technical errors, improve website performance, and maintain security</li>
                    <li>To comply with basic legal, tax, and accounting requirements</li>
                  </ul>
                  <p>
                    We will never add your email to automated promotional marketing lists without
                    your explicit consent.
                  </p>
                </div>
              </article>

              {/* 04. Cookies & Similar Technologies */}
              <article id="cookies" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">04</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Cookies &amp; Similar Technologies
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    Cookies are small text files placed on your device to ensure websites function
                    correctly and securely.
                  </p>
                  <p>
                    Our website is engineered for lean performance and relies primarily on essential
                    technical operation. Where basic analytics tools are utilized, they collect
                    aggregated, anonymous traffic metrics to help us understand which pages are
                    helpful to visitors.
                  </p>
                  <p>
                    You can instruct your browser to block or alert you about cookies at any time
                    through your browser settings. Blocking cookies will not prevent you from
                    browsing our website.
                  </p>
                </div>
              </article>

              {/* 05. Data Sharing & Third Parties */}
              <article id="data-sharing" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">05</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Data Sharing &amp; Third Parties
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    We do not sell, rent, or trade your personal information to third parties. We share
                    data only under the following limited circumstances:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>
                      <strong className="text-ink font-medium">Trusted Infrastructure Providers:</strong>{" "}
                      We work with reputable hosting providers and email services that process data
                      solely on our behalf under strict data security and confidentiality agreements.
                    </li>
                    <li>
                      <strong className="text-ink font-medium">Legal Obligations:</strong>{" "}
                      We may disclose information if required to do so by applicable law, regulation,
                      or a valid legal subpoena or court order.
                    </li>
                    <li>
                      <strong className="text-ink font-medium">Business Transfers:</strong>{" "}
                      In the event of a merger, acquisition, or restructuring, client information may
                      be transferred as part of ordinary business assets, subject to standard
                      confidentiality protections.
                    </li>
                  </ul>
                </div>
              </article>

              {/* 06. Data Security */}
              <article id="data-security" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">06</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Data Security
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    We apply reasonable and disciplined technical and organizational measures to
                    protect your information against unauthorized access, alteration, loss, or misuse.
                    All web traffic is transmitted securely over encrypted channels using Transport Layer
                    Security (HTTPS/TLS).
                  </p>
                  <p>
                    While no method of electronic storage or transmission over the internet can
                    guarantee absolute security, we continuously review and update our engineering
                    practices to safeguard your information.
                  </p>
                </div>
              </article>

              {/* 07. Data Retention */}
              <article id="data-retention" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">07</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Data Retention
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    We retain personal information only for as long as necessary to fulfill the
                    purposes outlined in this policy:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>General project inquiries are retained for up to 12 months to follow up on discussions.</li>
                    <li>Client project documents and billing records are kept for the duration of the engagement plus statutory recordkeeping periods required by applicable law.</li>
                    <li>Server security logs are automatically rotated and purged on a regular schedule.</li>
                  </ul>
                </div>
              </article>

              {/* 08. User Rights */}
              <article id="user-rights" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">08</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Your Rights
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    Depending on your location, you may have rights regarding the personal information
                    we hold about you. These rights typically include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>The right to request a copy of the personal data we hold about you</li>
                    <li>The right to request correction of inaccurate or incomplete information</li>
                    <li>The right to request deletion of your information, subject to ongoing legal or contractual recordkeeping requirements</li>
                    <li>The right to object to or restrict certain processing activities</li>
                  </ul>
                  <p>
                    To exercise any of these rights, simply email us at{" "}
                    <a
                      href="mailto:mubeenk710@gmail.com"
                      className="text-ink font-medium hover:text-champagne-deep"
                    >
                      mubeenk710@gmail.com
                    </a>
                    . We will acknowledge and respond to your request promptly.
                  </p>
                </div>
              </article>

              {/* 09. Policy Updates */}
              <article id="policy-updates" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">09</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Policy Updates
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-3">
                  <p>
                    We may update this Privacy Policy from time to time to reflect adjustments in our
                    services, operational practices, or applicable legal standards. When updates occur,
                    we will revise the &quot;Last Updated&quot; date at the top of this document.
                  </p>
                  <p>
                    We encourage you to review this page periodically to stay informed about how we
                    protect your information.
                  </p>
                </div>
              </article>

              {/* 10. Contact Us */}
              <article id="contact" className="pt-8 border-t border-hairline space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <span className="type-label text-champagne font-medium">10</span>
                  <h2 className="type-title text-xl md:text-2xl text-ink font-medium">
                    Contact Us
                  </h2>
                </div>
                <div className="type-body text-muted leading-relaxed space-y-4">
                  <p>
                    If you have questions, concerns, or requests regarding this Privacy Policy or our
                    handling of your personal information, please contact us:
                  </p>
                  <div className="p-6 bg-surface-alt border border-hairline space-y-3 text-sm">
                    <p className="font-medium text-ink">[Code2Perform Legal Entity Name]</p>
                    <p className="text-muted">
                      Attn: Privacy &amp; Data Protection<br />
                      [Mailing Address / Business Location]<br />
                      [City, Postal Code, Country]
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-ink">
                      <Mail className="h-4 w-4 text-champagne-deep shrink-0" aria-hidden="true" />
                      <a
                        href="mailto:mubeenk710@gmail.com"
                        className="hover:text-champagne-deep font-medium break-all"
                      >
                        mubeenk710@gmail.com
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
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Return to Home
                </Link>
                <Link
                  href="/contact"
                  className="type-nav text-ink hover:text-champagne-deep"
                >
                  Have a question? Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
