"use client";

import React from "react";

export interface StackedCardSectionProps {
  children: React.ReactNode;
  index: number;
  totalSections: number;
  ariaLabel?: string;
  id?: string;
  className?: string;
  cardClassName?: string;
  surfaceAlt?: boolean;
}

/**
 * StackedCardSection
 *
 * Implements a true physical layered / nested card stack scroll interaction.
 * Each section docks at a computed sticky offset beneath the navbar, allowing
 * subsequent sections to slide upward from below, overlap the previous card,
 * and stop — revealing the exposed top edge/tab of every underlying card to
 * form an authentic stacked deck.
 */
export function StackedCardSection({
  children,
  index,
  totalSections,
  ariaLabel,
  id,
  className = "",
  cardClassName = "",
  surfaceAlt = false,
}: StackedCardSectionProps) {
  // Ascending z-index: each subsequent card sits physically above all previous cards on tablet/desktop
  const zIndex = (index + 1) * 10;

  // Responsive sticky top position using global design tokens:
  // Mobile (<768px): Normal website layout (static/relative, no sticky, no internal scroll)
  // Tablet (768px-1023px): 4.75rem base + index * 20px
  // Desktop (>=1024px): 5.25rem base + index * 24px
  const stickyTop = `calc(var(--card-base-top, 4.75rem) + ${index} * var(--card-stack-offset, 20px))`;
  const maxCardHeight = `calc(100dvh - ${stickyTop} - 1.25rem)`;

  const isLast = index === totalSections - 1;

  return (
    <section
      aria-label={ariaLabel}
      id={id}
      style={{
        ["--stack-z" as string]: zIndex,
        ["--stack-top" as string]: stickyTop,
      } as React.CSSProperties}
      className={`stacked-card-section relative md:sticky md:will-change-transform ${
        isLast ? "mb-0" : "mb-8 sm:mb-12 md:mb-16"
      } ${className}`}
    >
      <div
        tabIndex={0}
        aria-label={ariaLabel ? `${ariaLabel} content` : undefined}
        style={{
          ["--card-max-height" as string]: maxCardHeight,
        } as React.CSSProperties}
        className={`stacked-card-inner mx-3 sm:mx-6 lg:mx-auto max-w-7xl min-h-fit md:min-h-[44vh] lg:min-h-[48vh] flex flex-col justify-start rounded-[20px] sm:rounded-[26px] lg:rounded-[30px] border border-hairline shadow-[0_-2px_16px_rgba(22,21,15,0.03),0_12px_36px_-8px_rgba(22,21,15,0.08),0_2px_8px_-2px_rgba(22,21,15,0.04)] md:transition-[box-shadow,border-color] md:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-deep focus-visible:ring-offset-2 ${
          surfaceAlt ? "bg-surface-alt" : "bg-surface"
        } ${cardClassName}`}
      >
        <div className="py-3.5 px-3.5 sm:py-4 sm:px-6 md:py-4.5 md:px-8 lg:py-4.5 lg:px-8 w-full">
          {children}
        </div>
      </div>
    </section>
  );
}

// Backward-compatible alias
export const ScrollCardSection = StackedCardSection;
