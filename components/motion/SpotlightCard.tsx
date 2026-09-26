"use client";

import { useRef, useState, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  dataCursor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(168, 134, 74, 0.15)",
  dataCursor,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // 10fps - 50fps Mobile Safety: Skip completely on touch screens
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const card = cardRef.current;
    if (!card) return;

    window.requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--spotlight-x", `${x}px`);
      card.style.setProperty("--spotlight-y", `${y}px`);
    });
  };

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor={dataCursor}
      className={`relative overflow-hidden ${className}`}
      style={
        {
          "--spotlight-x": "0px",
          "--spotlight-y": "0px",
        } as React.CSSProperties
      }
    >
      {/* Ambient Radial Spotlight Highlight (Desktop Only) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10 hidden lg:block"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at var(--spotlight-x) var(--spotlight-y), ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
