export const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: easePremium },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.9, delay, ease: easePremium },
  }),
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const imageReveal = {
  hidden: { scale: 1.08, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.15, ease: easePremium },
  },
};
