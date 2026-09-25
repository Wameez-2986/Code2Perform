import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-surface-alt border-t border-hairline text-ink">
      <div className="page-container py-14 md:py-16">
        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
          {/* Identity & Human Description */}
          <div className="max-w-md space-y-4">
            <Link
              href="/"
              className="inline-block"
              aria-label="Code2Perform Home"
            >
              <Image
                src="/logo.png"
                alt="Code2Perform"
                width={150}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="type-body text-muted">
              Code2Perform builds clear, reliable, high-performance websites and
              digital products. Thoughtfully designed, engineered for
              performance, and built to last.
            </p>
          </div>

          {/* Navigation & Contact CTA */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-10 md:gap-16">
            {/* Main Navigation */}
            <div className="space-y-3">
              <p className="type-label text-champagne-deep">Navigation</p>
              <nav
                className="flex flex-col space-y-2.5"
                aria-label="Footer Navigation"
              >
                <Link
                  href="/home"
                  className="type-nav text-muted hover:text-ink"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="type-nav text-muted hover:text-ink"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="type-nav text-muted hover:text-ink"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="type-nav text-muted hover:text-ink"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Direct Contact CTA */}
            <div className="space-y-3 max-w-xs">
              <p className="type-label text-champagne-deep">Inquiries</p>
              <p className="type-body-sm text-muted">
                Have a project or partnership in mind? Let&apos;s discuss what
                we can build together.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="type-button inline-flex items-center justify-center px-5 py-2.5 bg-ink text-bone hover:bg-champagne-deep text-center"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="type-legal text-muted">
            © 2026 Code2Perform. All rights reserved.
          </p>

          <nav
            className="flex items-center gap-6"
            aria-label="Legal Navigation"
          >
            <Link
              href="/privacy"
              className="type-legal text-muted hover:text-ink"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="type-legal text-muted hover:text-ink"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
