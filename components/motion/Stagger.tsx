"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { MOTION } from "@/lib/motion";

import { useShouldAnimate } from "./useMotionPreferences";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  interval?: number;
  delay?: number;
}

export function Stagger({
  children,
  className = "",
  interval = 0.08,
  delay = 0.05,
}: StaggerProps) {
  const shouldAnimate = useShouldAnimate();

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: interval,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  distance = 24,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const shouldAnimate = useShouldAnimate();

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: MOTION.easings.trp,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
