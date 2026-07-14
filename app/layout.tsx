import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NAK — The Future of Social Connection",
  description:
    "Share moments. Build communities. Discover people. Experience NAK.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
  className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen overflow-x-hidden bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}