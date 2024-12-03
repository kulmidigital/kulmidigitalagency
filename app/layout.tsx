import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import dynamic from 'next/dynamic'
import { Toaster } from "@/components/ui/toaster";
import "@/styles/blog.css";
import Providers from './providers'
import GoogleTagManager from '@/components/GoogleTagManager'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { websiteStructuredData, organizationStructuredData } from '@/lib/structuredData'

// Google Font: Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
  display: 'swap',
  preload: true,
  adjustFontFallback: true
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  title: "Kulmi Digital Agency",
  description:
    "We're Digital Specialists helping ambitious brands in Africa and globally push boundaries and drive impact.",
  icons: {
    icon: "/logo.svg",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://kulmi.digital'),
};

const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), {
  loading: () => null,
  ssr: false
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='theme-color' content='#F56E0F' />
        <link rel='preconnect' href='https://www.googletagmanager.com' />
        <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <GoogleTagManager />
        <GoogleAnalytics />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} w-[100%]`}
        suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58V89S63"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
