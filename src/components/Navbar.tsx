"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link
        href={"/"}
        className="flex h-10 w-28 items-center justify-center rounded-lg border border-amber-400 bg-white/10 font-semibold shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-sm"
      >
        <p className="text-amber-300">Kavindu M.</p>
      </Link>

      {/* show home button if not in the home page */}
      {pathname !== "/" && (
        <Link
          href={"/"}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-lg border border-amber-400 bg-white/10 text-white shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-sm"
        >
          <IoHome className="h-5 w-5" />
        </Link>
      )}
    </header>
  );
};

export default Navbar;
