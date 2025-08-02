import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Admitly - Find Your Child's Perfect Private School",
  description: "AI-powered private school admissions guidance at 90% less cost than traditional consulting. Find, prepare, and succeed with personalized support.",
  keywords: "private school admissions, school search, K-12 education, admissions consulting, school matching",
  authors: [{ name: "Admitly Team" }],
  creator: "Admitly",
  publisher: "Admitly",
  openGraph: {
    title: "Admitly - Find Your Child's Perfect Private School",
    description: "AI-powered private school admissions guidance at 90% less cost than traditional consulting.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admitly - Find Your Child's Perfect Private School",
    description: "AI-powered private school admissions guidance at 90% less cost than traditional consulting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
