"use client";

import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

const Loader = () => {
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
    <Html>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="loading h-28 w-28"
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
    </Html>
  );
};

export default Loader;
