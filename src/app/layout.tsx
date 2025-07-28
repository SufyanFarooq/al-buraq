import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alburaq Cargo LLC - Professional Logistics & Delivery Solutions",
  description: "Alburaq Cargo LLC provides professional logistics and delivery solutions across UAE. Last-mile delivery, supply chain management, leasing solutions, and storage facilities.",
  keywords: "logistics, delivery services, UAE, last-mile delivery, supply chain, Alburaq Cargo, cargo services, storage facilities, leasing solutions",
  icons: {
    icon: '/assets/alburaq-cargo-dark-logo.png',
    shortcut: '/assets/alburaq-cargo-dark-logo.png',
    apple: '/assets/alburaq-cargo-dark-logo.png',
  },
  openGraph: {
    title: 'Alburaq Cargo LLC - Professional Logistics & Delivery Solutions',
    description: 'Professional logistics and delivery solutions across UAE. Last-mile delivery, supply chain management, leasing solutions, and storage facilities.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alburaq Cargo LLC - Professional Logistics & Delivery Solutions',
    description: 'Professional logistics and delivery solutions across UAE.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
