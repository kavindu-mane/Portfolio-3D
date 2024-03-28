import { Poppins } from "next/font/google";
import "../globals.css";
import "./errors.css";
import Navbar from "@components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL("https://kavindu.me"),
  title: "404 | Page Not Found",
  icons: "/icons/favicon.ico",
  description: "404 | This page could not be found.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} h-screen overflow-x-hidden bg-white`}
      >
        {/* Google Analytics - Google tag (gtag.js) */}
        <GoogleAnalytics gaId="G-WFY6XPEHSQ" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
