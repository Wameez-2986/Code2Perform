"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-bone border-b border-hairline">
      <div className="page-container flex h-20 md:h-24 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Code2Perform Logo"
            width={160}
            height={48}
            priority
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Main Navigation">
          <Link href="/about" className="type-nav text-muted hover:text-ink">
            About
          </Link>
          <Link href="/services" className="type-nav text-muted hover:text-ink">
            Services
          </Link>
          <Link href="/contact" className="type-nav text-muted hover:text-ink">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="type-button inline-flex items-center justify-center px-5 py-2.5 bg-ink text-bone hover:bg-champagne-deep"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden p-2 text-ink"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-hairline bg-bone px-6 py-6">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            <Link
              href="/about"
              onClick={closeMenu}
              className="type-nav text-ink py-2"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="type-nav text-ink py-2"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="type-nav text-ink py-2"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="type-button flex w-full items-center justify-center px-5 py-3 bg-ink text-bone hover:bg-champagne-deep text-center"
              >
                Start a Project
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
