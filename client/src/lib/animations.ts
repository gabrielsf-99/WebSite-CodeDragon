import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideInFromTop: Variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const floatingAnimation: Variants = {
  animate: {
    y: [-20, 0, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const glowAnimation: Variants = {
  animate: {
    boxShadow: [
      "0 0 20px hsl(12, 100%, 60%), 0 0 30px hsl(12, 100%, 60%), 0 0 40px hsl(12, 100%, 60%)",
      "0 0 30px hsl(346, 100%, 55%), 0 0 40px hsl(346, 100%, 55%), 0 0 50px hsl(346, 100%, 55%)",
      "0 0 20px hsl(12, 100%, 60%), 0 0 30px hsl(12, 100%, 60%), 0 0 40px hsl(12, 100%, 60%)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const flameAnimation: Variants = {
  animate: {
    scale: [1, 1.05, 1.1, 1.05, 1],
    rotate: [0, 1, -1, 1, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const circuitAnimation: Variants = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
