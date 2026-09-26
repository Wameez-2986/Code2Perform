"use client";

import { motion, AnimatePresence } from "motion/react";
import { ReactNode } from "react";
import { MOTION } from "@/lib/motion";

interface AnimatedAccordionPanelProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedAccordionPanel({
  isOpen,
  children,
  className = "",
  id,
}: AnimatedAccordionPanelProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={id}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: "auto",
            opacity: 1,
            transition: {
              height: { duration: 0.4, ease: MOTION.easings.trp },
              opacity: { duration: 0.3, delay: 0.1 },
            },
          }}
          exit={{
            height: 0,
            opacity: 0,
            transition: {
              height: { duration: 0.3, ease: MOTION.easings.trp },
              opacity: { duration: 0.2 },
            },
          }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
