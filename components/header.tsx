"use client";

import { useState, useEffect } from "react";
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

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
        const toggleBtn = document.getElementById("mobile-menu-toggle");
        toggleBtn?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const isHomeActive = pathname === "/" || pathname === "/home";

  return (
    <header className="sticky top-0 z-50 w-full bg-bone border-b border-hairline">
      <div className="page-container flex h-24 items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center"
          aria-label="Code2Perform Home"
        >
          <Image
            src="/logo.png"
            alt="Code2Perform - Digital Design and Web Engineering"
            width={300}
            height={252}
            priority
            className="w-[90px] md:w-[120px] h-auto object-contain"
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
                aria-current={isActive ? "page" : undefined}
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
          id="mobile-menu-toggle"
          type="button"
          onClick={toggleMenu}
          className="md:hidden p-2 text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-deep"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-hairline bg-bone px-6 py-6"
        >
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
                  aria-current={isActive ? "page" : undefined}
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
