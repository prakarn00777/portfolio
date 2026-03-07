import type { Metadata } from "next";
import { Space_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });

export const metadata: Metadata = {
  title: "Prakarn Janloy — Star System Portfolio",
  description: "Interactive 3D solar system portfolio — Application Support & Healthcare IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
