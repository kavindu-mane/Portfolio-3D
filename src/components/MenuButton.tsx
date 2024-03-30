"use client";

import { menuVariants } from "@animations/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { IoHome, IoInformationCircle, IoCloseSharp } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
// menu items
const menuItems = [
  {
    link: "/",
    icon: <IoHome className="h-5 w-5" />,
    name: "Home",
  },
  {
    link: "/about",
    icon: <IoInformationCircle className="h-5 w-5" />,
    name: "About",
  },
  {
    link: "/projects",
    icon: <GrProjects className="h-5 w-5" />,
    name: "Projects",
  },
  {
    link: "/contacts",
    icon: <RiContactsFill className="h-5 w-5" />,
    name: "Contacts",
  },
];

const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      {/* menu */}
      <motion.div
        initial="offscreen"
        animate={isMenuOpen ? "onscreen" : "offscreen"}
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className={`fixed start-1/2 top-1/2 ${isMenuOpen ? "z-50" : "-z-10"} w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-2`}
        >
          <motion.div variants={menuVariants}>
            <div className="grid grid-cols-2 gap-2 rounded-md border border-amber-300 bg-black/10 p-5 shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-md">
              {
                // menu items
                menuItems.map((item, index) => {
                  return (
                    <Link
                      href={item.link}
                      key={index}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-x-3 rounded-md border border-amber-400 bg-white/10 p-2 text-white shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-md"
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })
              }
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* button */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed bottom-5 start-5 z-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-amber-300 bg-white/10 p-2 shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-md"
      >
        <div className="h-4 w-4 scale-125 text-white">
          {isMenuOpen ? <IoCloseSharp /> : <CgMenuGridO />}
        </div>
      </div>
    </div>
  );
};

export default MenuButton;
