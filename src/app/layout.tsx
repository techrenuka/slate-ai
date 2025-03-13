import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Slate AI Solutions | Leading Enterprise AI Transformation Agency",
  description: "Transform your business with enterprise-grade AI solutions. 20+ years of digital innovation expertise. Trusted by Fortune 500 companies. Get started with a free consultation.",
  keywords: "AI agency, enterprise AI solutions, AI consulting, machine learning, digital transformation, business automation, AI services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
