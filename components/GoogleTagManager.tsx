'use client';

import Script from 'next/script'

export default function GoogleTagManager() {
  return (
    <>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GT-NS4BQ3N"
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
          gtag('config', 'GT-NS4BQ3N');
        `}
      </Script>
    </>
  )
} 