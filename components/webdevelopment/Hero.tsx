"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SlideReveal from "@/components/ui/slidereveal";
import localFont from "next/font/local";
import { ArrowRight } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";
import { WorldMap } from "@/components/ui/world-map";

const clashDisplay = localFont({
  src: [
    {
      path: "../../app/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const Hero = () => {
  const connectionPoints = [
    {
      start: { lat: 1.2921, lng: 36.8219 }, // Nairobi
      end: { lat: 51.5074, lng: -0.1278 }, // London
    },
    {
      start: { lat: 1.2921, lng: 36.8219 }, // Nairobi
      end: { lat: 40.7128, lng: -74.006 }, // New York
    },
    {
      start: { lat: 1.2921, lng: 36.8219 }, // Nairobi
      end: { lat: 25.2048, lng: 55.2708 }, // Dubai
    },
    {
      start: { lat: 1.2921, lng: 36.8219 }, // Nairobi
      end: { lat: 1.3521, lng: 103.8198 }, // Singapore
    },
    {
      start: { lat: 1.2921, lng: 36.8219 }, // Nairobi
      end: { lat: -33.8688, lng: 151.2093 }, // Sydney
    },
  ];

  return (
    <section className='relative bg-[#0F172A] dark:bg-black min-h-[80vh] sm:min-h-screen flex items-center overflow-hidden'>
      {/* World Map Background */}
      <div className='absolute inset-0 w-full h-full opacity-70 sm:opacity-100'>
        <WorldMap dots={connectionPoints} lineColor='#F56E0F' />
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 sm:px-6 relative z-10'>
        <div className='max-w-5xl'>
          {/* Subtitle */}
          <SlideReveal direction='up' duration={0.7}>
            <div className='inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[#1E293B] dark:bg-black/50 rounded-full mb-4 sm:mb-8'>
              <span
                className={`${clashDisplay.className} text-[#F56E0F] font-semibold tracking-wider text-xs sm:text-sm`}>
                WEB DEVELOPMENT SERVICES
              </span>
            </div>
          </SlideReveal>

          {/* Main Title */}
          <SlideReveal direction='up' duration={0.7} delay={0.1}>
            <h1
              className={`${clashDisplay.className} flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold mb-4 sm:mb-8`}>
              <span className='text-white'>Building</span>
              <span className='text-neutral-400'>Digital</span>
              <span className='text-[#F56E0F]'>Excellence</span>
            </h1>
          </SlideReveal>

          {/* Description */}
          <SlideReveal direction='up' duration={0.7} delay={0.2}>
            <p
              className={`${clashDisplay.className} text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-12`}>
              From custom code to content management systems, we create{" "}
              <span className='text-white'>powerful websites</span> that drive
              results and exceed expectations.
            </p>
          </SlideReveal>

          {/* Stats */}
          <SlideReveal direction='up' duration={0.7} delay={0.3}>
            <div className='grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mb-8 sm:mb-12'>
              <div>
                <div
                  className={`${clashDisplay.className} text-[#F56E0F] text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2`}>
                  100+
                </div>
                <div
                  className={`${clashDisplay.className} text-neutral-400 text-xs sm:text-sm`}>
                  Projects Delivered
                </div>
              </div>
              <div>
                <div
                  className={`${clashDisplay.className} text-[#F56E0F] text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2`}>
                  99%
                </div>
                <div
                  className={`${clashDisplay.className} text-neutral-400 text-xs sm:text-sm`}>
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div
                  className={`${clashDisplay.className} text-[#F56E0F] text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2`}>
                  5+
                </div>
                <div
                  className={`${clashDisplay.className} text-neutral-400 text-xs sm:text-sm`}>
                  Years Experience
                </div>
              </div>
            </div>
          </SlideReveal>

          {/* CTA Buttons */}
          <SlideReveal direction='up' duration={0.7} delay={0.4}>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link href='/website-packages'>
                <Button
                  className={`${clashDisplay.className} w-full sm:w-auto bg-[#F56E0F] text-white px-6 sm:px-10 py-5 sm:py-7 rounded-full text-base sm:text-lg hover:bg-[#E55D00] transition-all duration-300 shadow-lg hover:shadow-[#F56E0F]/20 hover:shadow-2xl group`}>
                  View Packages
                  <ArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
                </Button>
              </Link>
              <CalendlyButton
                className={`${clashDisplay.className} w-full sm:w-auto bg-white/10 dark:bg-white/5 backdrop-blur-sm text-white border border-white/20 px-6 sm:px-10 py-5 sm:py-7 rounded-full text-base sm:text-lg hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300`}
              />
            </div>
          </SlideReveal>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className='absolute inset-0 bg-gradient-to-t from-[#0F172A] dark:from-black via-transparent to-transparent pointer-events-none' />
    </section>
  );
};

export default Hero;
