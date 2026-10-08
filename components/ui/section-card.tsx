import React, { ReactNode } from "react";

export interface SectionCardProps {
  children: ReactNode;
  index?: number;
  totalSections?: number;
  ariaLabel?: string;
  id?: string;
  className?: string;
  cardClassName?: string;
  surfaceAlt?: boolean;
}

export function SectionCard({
  children,
  index = 0,
  totalSections = 1,
  ariaLabel,
  id,
  className = "",
  cardClassName = "",
  surfaceAlt = false,
}: SectionCardProps) {
  const isLast = index === totalSections - 1;

  return (
    <section
      aria-label={ariaLabel}
      id={id}
      className={`relative w-full ${
        isLast ? "mb-0" : "mb-8 sm:mb-12 md:mb-16"
      } ${className}`}
    >
      <div
        tabIndex={0}
        aria-label={ariaLabel ? `${ariaLabel} content` : undefined}
        className={`mx-3 sm:mx-6 lg:mx-auto max-w-7xl flex flex-col justify-start rounded-[20px] sm:rounded-[26px] lg:rounded-[30px] border border-hairline shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-deep focus-visible:ring-offset-2 ${
          surfaceAlt ? "bg-surface-alt" : "bg-surface"
        } ${cardClassName}`}
      >
        <div className="py-6 px-4 sm:py-8 sm:px-8 md:py-10 md:px-10 lg:py-12 lg:px-12 w-full">
          {children}
        </div>
      </div>
    </section>
  );
}

// Backward-compatible alias for existing views
export const StackedCardSection = SectionCard;
