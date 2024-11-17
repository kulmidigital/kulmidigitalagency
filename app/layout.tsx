import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppButton from "@/components/WhatsAppButton";
import "@/styles/blog.css";
import Providers from './providers'
import GoogleAnalytics from '@/components/GoogleAnalytics'

// Google Font: Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "Kulmi Digital Agency",
  description:
    "We're Digital Specialists helping ambitious brands in Africa and globally push boundaries and drive impact.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${plusJakartaSans.variable} w-[100%]`} suppressHydrationWarning>
        <GoogleAnalytics />
        <Navbar />
        <Providers>
          {children}
        </Providers>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
