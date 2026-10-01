"use client";

import { motion } from "motion/react";
import { useShouldAnimate } from "./useMotionPreferences";

export function HeroGlow() {
  const shouldAnimate = useShouldAnimate();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Primary Champagne Orb */}
      <motion.div
        animate={
          shouldAnimate
            ? {
                x: [0, 30, -20, 0],
                y: [0, -20, 30, 0],
                scale: [1, 1.1, 0.95, 1],
              }
            : undefined
        }
        transition={
          shouldAnimate
            ? {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className="absolute -top-24 left-1/4 h-72 md:h-96 w-72 md:w-96 rounded-full bg-champagne-glow blur-2xl md:blur-3xl opacity-40 md:opacity-60 will-change-transform transform-gpu"
      />

      {/* Secondary Ambient Orb */}
      <motion.div
        animate={
          shouldAnimate
            ? {
                x: [0, -30, 20, 0],
                y: [0, 30, -15, 0],
                scale: [1, 0.92, 1.08, 1],
              }
            : undefined
        }
        transition={
          shouldAnimate
            ? {
                duration: 24,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className="absolute top-1/3 -right-20 h-64 md:h-128 w-64 md:w-lg rounded-full bg-champagne-glow blur-2xl md:blur-3xl opacity-30 md:opacity-40 will-change-transform transform-gpu"
      />
    </div>
  );
}
