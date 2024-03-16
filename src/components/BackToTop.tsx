"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const BackToTop = () => {
  const [isShowing, setIsShowing] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isShowing && latest > 200) {
      setIsShowing(true);
    } else if (isShowing && latest <= 200) {
      setIsShowing(false);
    }
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: isShowing ? 1 : 0 }}
      transition={{ duration: 0.1 }}
      className={`fixed bottom-16 right-5 z-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-amber-300 bg-white/10 p-2 shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-md`}
      onClick={scrollTop}
    >
      <div className="text-white">
        <MdKeyboardDoubleArrowUp />
      </div>
    </motion.div>
  );
};

export default BackToTop;
