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
  // Ascending z-index: each subsequent card sits physically above all previous cards
  const zIndex = (index + 1) * 10;

  // Responsive sticky top position using global design tokens:
  // Mobile (<640px): 4.25rem base + index * 14px
  // Tablet (640px-1023px): 4.75rem base + index * 20px
  // Desktop (>=1024px): 5.25rem base + index * 24px
  const stickyTop = `calc(var(--card-base-top, 4.25rem) + ${index} * var(--card-stack-offset, 14px))`;
  const maxCardHeight = `calc(100dvh - ${stickyTop} - 1.25rem)`;

  const isLast = index === totalSections - 1;

  return (
    <section
      ref={undefined}
      aria-label={ariaLabel}
      id={id}
      style={{
        zIndex,
        top: stickyTop,
      }}
      className={`sticky will-change-transform ${
        isLast ? "mb-0" : "mb-8 sm:mb-12 lg:mb-16"
      } ${className}`}
    >
      <div
        className={`mx-3 sm:mx-6 lg:mx-auto max-w-7xl min-h-fit sm:min-h-[44vh] lg:min-h-[48vh] overflow-y-auto flex flex-col justify-start rounded-[20px] sm:rounded-[26px] lg:rounded-[30px] border border-hairline shadow-[0_-2px_16px_rgba(22,21,15,0.03),0_12px_36px_-8px_rgba(22,21,15,0.08),0_2px_8px_-2px_rgba(22,21,15,0.04)] transition-[box-shadow,border-color] duration-300 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          surfaceAlt ? "bg-surface-alt" : "bg-surface"
        } ${cardClassName}`}
        style={{
          maxHeight: maxCardHeight,
        }}
      >
        <div className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 lg:py-7 lg:px-10 w-full">
          {children}
        </div>
      </div>
    </section>
  );
}

// Backward-compatible alias
export const ScrollCardSection = StackedCardSection;
