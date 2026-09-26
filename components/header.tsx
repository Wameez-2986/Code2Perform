"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";

const NAV_ITEMS = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Scroll compaction listener (>10px)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 w-full border-b border-hairline transition-all duration-300 ${
        isScrolled
          ? "bg-bone/90 backdrop-blur-md shadow-xs py-1"
          : "bg-bone py-3 md:py-4"
      }`}
    >
      <div
        className={`page-container flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center"
          aria-label="Code2Perform Home"
        >
          <Image
            src="/logo.png"
            alt="Code2Perform - Digital Design and Web Engineering"
            width={300}
            height={252}
            priority
            className={`h-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? "w-20 md:w-24" : "w-24 md:w-28"
            }`}
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
                className={`type-nav relative py-1 transition-colors duration-200 group ${
                  isActive
                    ? "text-ink font-semibold"
                    : "text-muted hover:text-ink"
                }`}
              >
                <span>{item.label}</span>
                {/* Hairline expanding underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-champagne-deep origin-left transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center">
          <MagneticButton href="/contact" dataCursor="contact">
            <span className="type-button inline-flex items-center justify-center px-6 py-2.5 bg-ink text-bone hover:bg-champagne-deep text-center rounded-full transition-colors shadow-xs">
              Start a Project
            </span>
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
          className="md:hidden p-2 -mr-2 text-ink hover:text-champagne-deep focus:outline-none focus:ring-2 focus:ring-champagne transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-b border-hairline bg-bone px-4 pt-2 pb-6 space-y-3"
          role="navigation"
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
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive ? "text-ink font-semibold" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center px-5 py-3 bg-ink text-bone hover:bg-champagne-deep text-center rounded-full transition-colors text-sm font-medium"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
