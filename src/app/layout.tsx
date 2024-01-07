import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";

const poppins = Poppins({
	weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Kavindu Manahara",
	description: "Undergraduate | Frontend Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} bg-slate-300/20`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
