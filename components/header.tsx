"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isHomeActive = pathname === "/" || pathname === "/home";

  return (
    <header className="sticky top-0 z-50 w-full bg-bone border-b border-hairline">
      <div className="page-container flex h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center"
          aria-label="Code2Perform Home"
        >
          <Image
            src="/logo.png"
            alt="Code2Perform"
            width={160}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/home"
                ? isHomeActive
                : pathname === item.href || pathname?.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`type-nav ${
                  isActive
                    ? "text-ink font-medium"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="type-button inline-flex items-center justify-center px-5 py-2.5 bg-ink text-bone hover:bg-champagne-deep text-center"
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
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-hairline bg-bone px-6 py-6">
          <nav
            className="flex flex-col space-y-4"
            aria-label="Mobile Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/home"
                  ? isHomeActive
                  : pathname === item.href || pathname?.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`type-nav py-2 ${
                    isActive
                      ? "text-ink font-medium"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-hairline">
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
