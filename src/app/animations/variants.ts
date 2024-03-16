import { Variants } from "framer-motion";

// transition variants for the header
export const headerVariants: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

// transition variants for the card
export const cardVariants: Variants = {
  offscreen: {
    x: 2000,
  },
  onscreen: {
    x: 0,
    transition: {
      ease: "easeOut",
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};
