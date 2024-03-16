import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";
import MusicPreference from "@components/MusicPreference";
import BackToTop from "@components/BackToTop";
import Loading from "./loading";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavindu Manahara",
  description: "Undergraduate | Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden bg-slate-950`}>
        <Navbar />
        {children}
        <div
          style={{
            backgroundImage: "url(/assets/images/background.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: "0.5",
            position: "fixed",
            top: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
            zIndex: "-10",
          }}
        />

        {/* music preference notification */}
        <MusicPreference />

        {/* back top button */}
        <BackToTop />
      </body>
    </html>
  );
}
