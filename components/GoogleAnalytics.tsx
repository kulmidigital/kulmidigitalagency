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
      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
      >
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-58V89S63');
        `}
      </Script>
    </>
  )
} 