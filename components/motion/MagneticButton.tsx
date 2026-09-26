"use client";

import { motion } from "motion/react";
import { ReactNode, useRef, useState } from "react";
import Link from "next/link";
import { MOTION } from "@/lib/motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  maxDistance?: number;
  dataCursor?: string;
}

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  maxDistance = 8,
  dataCursor,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Clamp displacement to maxDistance (8px from audit)
    const clampedX = Math.max(-maxDistance, Math.min(maxDistance, middleX * 0.25));
    const clampedY = Math.max(-maxDistance, Math.min(maxDistance, middleY * 0.25));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: MOTION.easings.spring.stiffness,
        damping: MOTION.easings.spring.damping,
        mass: MOTION.easings.spring.mass,
      }}
      className={`inline-block will-change-transform ${className}`}
      data-cursor={dataCursor}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type="button" className="inline-block cursor-pointer">
      {content}
    </button>
  );
}
