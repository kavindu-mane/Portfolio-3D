import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";
import "./main.css";
import Navbar from "@components/Navbar";
import MusicPreference from "@components/MusicPreference";
import BackToTop from "@components/BackToTop";
import Head from "next/head";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kavindu.me"),
  title: "Kavindu Manahara",
  icons: "/icons/favicon.ico",
  description: "Undergraduate | Frontend Developer",
  category: "Personal Portfolio",
  keywords: ["Kavindu Manahara", "Frontend Developer", "Undergraduate"],
  creator: "Kavindu Manahara",
  publisher: "Kavindu Manahara",
  authors: [{ name: "Kavindu Manahara" }],
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kavindu.me",
    siteName: "Kavindu Manahara",
    title: "Kavindu Manahara",
    description: "Undergraduate | Frontend Developer",
    countryName: "Sri Lanka",
    images: [
      {
        url: "/webimg.png",
        width: 1831,
        height: 861,
        alt: "Kavindu Manahara",
      },
      {
        url: "/logo192.png",
        width: 192,
        height: 192,
        alt: "Kavindu Manahara",
      },
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "Kavindu Manahara",
      },
    ],
  },
  twitter: {
    creator: "@kavindu_mane",
    site: "https://kavindu.me",
    card: "summary_large_image",
    images: [
      {
        url: "/webimg.png",
        width: 1831,
        height: 861,
        alt: "Kavindu Manahara",
      },
      {
        url: "/logo192.png",
        width: 192,
        height: 192,
        alt: "Kavindu Manahara",
      },
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "Kavindu Manahara",
      },
    ],
    creatorId: "kavindu_mane",
    title: "Kavindu Manahara",
  },
};

// json + ld
function addProductJsonLd() {
  return {
    __html: `
      {
        "@context": "https://www.kavindu.me/",
        "@type": "Website",
        "name": "Portfolio website of Kavindu Manahara",
        "author": {
          "@type": "Person",
          "name": "Kavindu Manahara"
        },
        "datePublished": "2023-04-10T22:10:00+05:30",
        "dateModified": "2023-08-16T10:10:00+05:30",
        "description": "Portfolio website of Kavindu Manahara. I'm Sri Lankan CS Undergraduate and Tech Enthusiast.",
        "image": "https://www.kavindu.me/webimg.png"
      }
      `,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* LD + Json */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <body className={`${poppins.className} overflow-x-hidden bg-slate-950`}>
        {/* Google Analytics - Google tag (gtag.js) */}
        <GoogleAnalytics gaId="G-WFY6XPEHSQ" />
        <main>
          <Navbar />
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

          {children}
        </main>
      </body>
    </html>
  );
}
