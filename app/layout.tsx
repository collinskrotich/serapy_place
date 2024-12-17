import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Mobilenav from "./components/navbar/Mobilnav";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Serapy Place",
  description: "A compassionate space for growth, healing, and self-discovery.",
  keywords: [
    "therapy",
    "self-discovery",
    "growth",
    "healing",
    "compassion",
    "mental health",
    "serapy place",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.serapyplace.com",
    languages: {
      "en-US": "https://www.serapyplace.com/en",
      "es-ES": "https://www.serapyplace.com/es",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.serapyplace.com",
    title: "Serapy Place - Growth, Healing, and Self-Discovery",
    description: "Explore a compassionate space dedicated to your mental health, growth, and healing journey.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Serapy Place - Growth, Healing, and Self-Discovery",
      },
    ],
    siteName: "Serapy Place",
    locale: "en_US",
  },
  metadataBase: new URL("https://serapy-place.vercel.app/"),
  icons: {
    icon: {
      url: "/logo.png",
      type: "image/x-icon",
      sizes: "180x180",
    },
    apple: {
      url: "/logo.png",
      type: "image/png",
      sizes: "180x180",
    }
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar />
        <Mobilenav />
        <div className="lg:pt-28 pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
