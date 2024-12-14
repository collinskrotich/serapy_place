import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Mobilenav from "./components/navbar/Mobilnav";


export const metadata: Metadata = {
  title: "Serapy Place",
  description: "Serapy place",
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
      </body>
    </html>
  );
}
