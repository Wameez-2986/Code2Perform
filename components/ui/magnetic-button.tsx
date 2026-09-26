"use client";

import { useRef, ReactNode } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  dataCursor?: string;
  role?: string;
  "aria-label"?: string;
}

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 0.35,
  dataCursor,
  ...props
}: MagneticProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Zero mobile overhead: Only compute on fine pointer devices
    if (window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches) return;

    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(el, {
      x: deltaX,
      y: deltaY,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1.1, 0.4)",
    });
  };

  const interactiveClasses = `inline-block will-change-transform active:scale-95 transition-transform duration-150 ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        ref={(node) => {
          containerRef.current = node;
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={interactiveClasses}
        data-cursor={dataCursor}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={(node) => {
        containerRef.current = node;
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={interactiveClasses}
      data-cursor={dataCursor}
      {...props}
    >
      {children}
    </button>
  );
}
