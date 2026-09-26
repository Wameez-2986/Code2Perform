export const MOTION = {
  durations: {
    fast: 0.2,
    base: 0.5,
    slow: 0.9,
  },
  easings: {
    trp: [0.22, 1, 0.36, 1] as const,
    spring: {
      stiffness: 250,
      damping: 20,
      mass: 0.5,
    },
  },
  reveal: {
    distance: 24,
    stagger: 0.08,
  },
};
