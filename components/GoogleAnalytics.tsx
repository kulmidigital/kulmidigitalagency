'use client';

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
  
  return null;
} 