"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
	const pathname = usePathname();
	const navLinks = ["About", "Project", "Contact"];

	return (
		<header className="header">
			<Link
				href={"/"}
				className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-semibold shadow-md">
				<p className="blue-gradient_text">KM</p>
			</Link>
			<nav className="flex gap-7 font-semibold">
				{navLinks.map((link, key) => {
					const isActive = pathname.startsWith("/" + link.toLowerCase());
					return (
						<Link
							href={"/" + link.toLowerCase()}
							key={key}
							className={`${key === 2 ? "hidden sm:block" : ""} ${
								isActive ? "text-blue-500" : "text-slate-950"
							}`}>
							<p className="">{link}</p>
						</Link>
					);
				})}
			</nav>
		</header>
	);
};

export default Navbar;
