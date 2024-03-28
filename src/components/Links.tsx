"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { IoHome, IoInformationCircle } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";

const Links = () => {
  const controls = useAnimation();
  const buttonControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const scale = 1 / window.devicePixelRatio;
      if (divRef.current) {
        divRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // pause rotation the links when hovered
  useEffect(() => {
    if (isHovered) {
      controls.stop();
      buttonControls.stop();
    } else {
      controls.start({
        rotate: 360,
        transition: { ease: "linear", duration: 60, repeat: Infinity },
      });
      buttonControls.start({
        rotate: -360,
        transition: { ease: "linear", duration: 60, repeat: Infinity },
      });
    }
  }, [isHovered, controls, buttonControls]);

  return (
    <div className="pointer-events-none absolute start-1/2 top-1/2 flex h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/3 items-center justify-center overflow-hidden sm:h-[600px] sm:w-[600px]">
      <div className="" ref={divRef}>
        <motion.div
          className="pointer-events-none relative h-[300px] w-[300px] rounded-full border border-white/10 sm:h-[550px] sm:w-[550px]"
          animate={controls}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Link
            href={"/"}
            className="pointer-events-auto absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border border-amber-400 bg-white/20 text-white shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-sm"
          >
            <motion.div animate={buttonControls}>
              <IoHome className="h-5 w-5" />
            </motion.div>
          </Link>
          <Link
            href={"/about"}
            className="pointer-events-auto absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full border border-amber-400 bg-white/20 text-white shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-sm"
          >
            <motion.div animate={buttonControls}>
              <IoInformationCircle className="h-6 w-6" />
            </motion.div>
          </Link>
          <Link
            href={"/projects"}
            className="pointer-events-auto absolute bottom-0 left-1/2 flex h-10 w-10 -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full border border-amber-400 bg-white/20 text-white shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-sm"
          >
            <motion.div animate={buttonControls}>
              <GrProjects className="h-5 w-5" />
            </motion.div>
          </Link>
          <Link
            href={"/contacts"}
            className="pointer-events-auto absolute left-0 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border border-amber-400 bg-white/20 text-white shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-sm"
          >
            <motion.div animate={buttonControls}>
              <RiContactsFill className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Links;
