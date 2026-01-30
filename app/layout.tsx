import type { Metadata } from "next";
import { Bebas_Neue, Pacifico, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bat & Barrel Brand Guide",
  description: "Brand identity guidelines for Bat & Barrel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${pacifico.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
