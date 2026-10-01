"use client";

import { useSyncExternalStore } from "react";

function subscribePointerFine(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getPointerFineSnapshot() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(pointer: fine)").matches;
}

function getPointerFineServerSnapshot() {
  return true;
}

export function usePointerFine() {
  return useSyncExternalStore(
    subscribePointerFine,
    getPointerFineSnapshot,
    getPointerFineServerSnapshot
  );
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

function subscribeDesktopOrTablet(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(min-width: 768px)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getDesktopOrTabletSnapshot() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(min-width: 768px)").matches;
}

function getDesktopOrTabletServerSnapshot() {
  return true;
}

/**
 * Returns true if the device is a Tablet or Desktop (>= 768px).
 * Returns false on Mobile phones (< 768px).
 */
export function useIsDesktopOrTablet() {
  return useSyncExternalStore(
    subscribeDesktopOrTablet,
    getDesktopOrTabletSnapshot,
    getDesktopOrTabletServerSnapshot
  );
}

/**
 * Returns true on Mobile phones (< 768px).
 */
export function useIsMobile() {
  const isDesktopOrTablet = useIsDesktopOrTablet();
  return !isDesktopOrTablet;
}

/**
 * Core animation gate: animations ONLY run on desktop & tablet (>= 768px)
 * and when reduced motion is not explicitly requested.
 * On mobile phones, this returns false so the website remains normal without animations.
 */
export function useShouldAnimate() {
  const isDesktopOrTablet = useIsDesktopOrTablet();
  const prefersReduced = usePrefersReducedMotion();
  return isDesktopOrTablet && !prefersReduced;
}

