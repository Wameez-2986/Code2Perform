"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { MOTION } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
}

export function Reveal({
  children,
  className = "",
  distance = 20,
  duration = 0.45,
  delay = 0,
  threshold = 0.05,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: MOTION.easings.trp,
      }}
      className={`transform-gpu will-change-[transform,opacity] ${className}`}
    >
      {children}
    </motion.div>
  );
}
