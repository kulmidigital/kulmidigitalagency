'use client';

import Script from 'next/script'
import { useEffect } from 'react'
import { onCLS, onFID, onLCP } from 'web-vitals'

export default function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Report Web Vitals
      onCLS(console.log);
      onFID(console.log);
      onLCP(console.log);
    }
  }, []);
  
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S9MS73NRTQ"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S9MS73NRTQ');
        `}
      </Script>
    </>
  )
} 