"use client";

import { motion } from "framer-motion";

export default function Loading() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="loading h-40 w-40"
      >
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 50l-25 25 -25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
            fill: {
              duration: 2,
              ease: [1, 0, 0.8, 1],
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
      </motion.svg>
    </div>
  );
}
