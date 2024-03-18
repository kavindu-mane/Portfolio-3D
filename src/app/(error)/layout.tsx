import { Poppins } from "next/font/google";
import "../globals.css";
import "./errors.css";
import Navbar from "@components/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
