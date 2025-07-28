import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alburaq Express - Fast, Reliable, and Efficient Delivery Solutions",
  description: "Alburaq Express provides fast, reliable, and efficient delivery solutions across UAE. Last-mile delivery, supply chain management, and logistics services.",
  keywords: "delivery services, logistics, UAE, last-mile delivery, supply chain, Alburaq Express",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
