import Loading from "./loading";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import "../globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kavindu.me"),
  title: "React Percentage Bar",
  icons: "/icons/rpb/favicon.ico",
  description:
    "A simple React component to display a percentage bars and circles.",
  category: "NPM Package | React Component | Documentation",
  keywords: [
    "React",
    "Percentage Bar",
    "React Component",
    "React Circle",
    "Percentage Circle",
    "Progress Bar",
  ],
  creator: "Kavindu Manahara",
  publisher: "Kavindu Manahara",
  authors: [{ name: "Kavindu Manahara" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kavindu.me/projects/react-percentage-bar",
    siteName: "React Percentage Bar",
    title: "React Percentage Bar",
    description:
      "A simple React component to display a percentage bars and circles.",
    countryName: "Sri Lanka",
    images: [
      {
        url: "/rpb/webimg.png",
        width: 1201,
        height: 631,
        alt: "React Percentage Bar",
      },
    ],
  },
  twitter: {
    creator: "@kavindu_mane",
    site: "https://kavindu.me/projects/react-percentage-bar",
    card: "summary_large_image",
    description:
      "A simple React component to display a percentage bars and circles.",
    images: [
      {
        url: "/rpb/webimg.png",
        width: 1201,
        height: 631,
        alt: "React Percentage Bar",
      },
    ],
    creatorId: "kavindu_mane",
    title: "React Percentage Bar",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} h-screen overflow-x-hidden bg-white`}
      >
        {/* Google Analytics - Google tag (gtag.js) */}
        <GoogleAnalytics gaId="G-WFY6XPEHSQ" />
        <main>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
