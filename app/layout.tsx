import type { Metadata } from "next";
import "./globals.css";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { FloatingShapes } from "@/components/ui/ParallaxElements";
import PageLoader from "@/components/ui/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Harshit Singhal | Android Developer | Custom Android App Development",
  description: "Freelance Android developer specializing in custom native Android apps, UI/UX design, and app modernization. 4+ years experience, 12+ apps delivered. Starting at $1,000.",
  keywords: ["Android Developer", "Freelance", "Android App Development", "Kotlin", "Jetpack Compose", "Harshit Singhal"],
  authors: [{ name: "Harshit Singhal" }],
  openGraph: {
    title: "Harshit Singhal | Android Developer | Custom Android App Development",
    description: "Freelance Android developer specializing in custom native Android apps. 3+ years experience, 12+ apps delivered.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Singhal | Android Developer",
    description: "Freelance Android developer specializing in custom native Android apps",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <PageLoader />
        <CustomCursor />
        <ScrollProgress />
        <FloatingShapes />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
