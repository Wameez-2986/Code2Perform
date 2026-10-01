"use client";

import { motion } from "motion/react";
import { MOTION } from "@/lib/motion";

import { useShouldAnimate } from "./useMotionPreferences";

interface WordRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export function WordReveal({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
}: WordRevealProps) {
  const shouldAnimate = useShouldAnimate();

  if (!shouldAnimate) {
    return <Component className={className}>{text}</Component>;
  }

  const words = text.split(" ");

  return (
    <Component className={`flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease: MOTION.easings.trp,
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
