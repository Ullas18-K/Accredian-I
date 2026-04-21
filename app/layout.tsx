import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce",
  description: "India's most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>{children}</body>
    </html>
  );
}
