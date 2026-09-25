import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-surface-alt border-t border-hairline text-ink">
      <div className="page-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Agency Identity */}
          <div className="md:col-span-6 lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Code2Perform Logo"
                width={150}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="type-body-sm text-muted max-w-sm">
              Code2Perform is a digital engineering agency delivering refined web
              applications, scalable platforms, and bespoke digital experiences.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Navigation Links */}
          <div className="md:col-span-3 lg:col-span-2 space-y-4">
            <p className="type-label text-champagne-deep">Navigation</p>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="type-nav text-muted hover:text-ink">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="type-nav text-muted hover:text-ink">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="type-nav text-muted hover:text-ink">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="type-nav text-muted hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <p className="type-label text-champagne-deep">Legal</p>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="type-nav text-muted hover:text-ink">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="type-nav text-muted hover:text-ink">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="type-legal text-muted">
            © 2026 Code2Perform. All rights reserved.
          </p>
          <p className="type-legal text-muted">
            Refined digital engineering.
          </p>
        </div>
      </div>
    </footer>
  );
}
