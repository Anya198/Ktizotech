import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const dmSerifDisplay = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'KtizoTech — Create. Automate. Scale.',
  description: 'KtizoTech builds precision AI automation workflows that cut costs, automate business processes, and keep your operations secure. Book a free consultation.',
  openGraph: {
    title: 'KtizoTech — Create. Automate. Scale.',
    description: 'AI-powered business process automation. Cut costs, automate workflows, stay secure.',
    url: 'https://www.ktizotech.com',
    siteName: 'KtizoTech',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KtizoTech' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KtizoTech — Create. Automate. Scale.',
    description: 'AI-powered business process automation.',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://www.ktizotech.com'),
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
