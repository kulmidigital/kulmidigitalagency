"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SlideReveal from "@/components/ui/slidereveal";
import localFont from "next/font/local";
import { ArrowRight } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";
import { motion } from "framer-motion";

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
  return (
    <section className='relative bg-[#0F172A] min-h-[100vh] flex items-center justify-center overflow-hidden px-4 sm:px-0'>
      {/* Animated Background */}
      <div className='absolute inset-0 w-full h-full'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900 via-orange-500 to-green-500'>
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className='absolute inset-0 bg-gradient-to-br from-purple-800 via-orange-400 to-green-400 opacity-50 blur-3xl'
            style={{
              backgroundSize: "200% 200%",
            }}
          />
        </div>

        {/* Grain Effect */}
        <div
          className='absolute inset-0 opacity-30 mix-blend-overlay'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full'>
        <div className='max-w-4xl mx-auto text-center'>
          <SlideReveal direction='up' duration={0.7}>
            <div className='inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-black/20 backdrop-blur-lg rounded-full mb-4 sm:mb-6  mt-0 sm:mt-4'>
              <span
                className={`${clashDisplay.className} text-white font-semibold tracking-wider text-[10px] sm:text-xs`}>
                SEARCH ENGINE OPTIMIZATION
              </span>
            </div>
          </SlideReveal>

          <SlideReveal direction='up' duration={0.7} delay={0.1}>
            <h1
              className={`${clashDisplay.className} text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0`}>
              <span className='text-white block'>Dominate Search</span>
              <span className='text-white/90 block text-[1.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]'>
                Results with AI-Powered
              </span>
              <span className='text-white block'>SEO</span>
            </h1>
          </SlideReveal>

          <SlideReveal direction='up' duration={0.7} delay={0.2}>
            <p
              className={`${clashDisplay.className} text-white/80 text-base sm:text-xl md:text-2xl max-w-[280px] sm:max-w-2xl mx-auto mb-6 sm:mb-8 px-1`}>
              Transform your online presence with data-driven SEO strategies
              that deliver measurable results.
            </p>
          </SlideReveal>

          <SlideReveal direction='up' duration={0.7} delay={0.3}>
            <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2'>
              <Link href='/contact' className='w-full sm:w-auto'>
                <Button
                  className={`${clashDisplay.className} w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-4 sm:py-6 rounded-xl text-sm sm:text-base hover:bg-white/90 transition-all duration-300 shadow-lg group`}>
                  Free SEO Audit
                  <ArrowRight className='ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform' />
                </Button>
              </Link>
              <CalendlyButton
                className={`${clashDisplay.className} w-full sm:w-auto bg-black/20 backdrop-blur-lg text-white border border-white/20 px-6 sm:px-8 py-4 sm:py-6 rounded-xl text-sm sm:text-base hover:bg-black/30 transition-all duration-300`}
              />
            </div>
          </SlideReveal>

          <SlideReveal direction='up' duration={0.7} delay={0.4}>
            <div className='grid grid-cols-3 gap-3 sm:gap-8 max-w-[320px] sm:max-w-3xl mx-auto px-1'>
              <div className='text-center'>
                <div
                  className={`${clashDisplay.className} text-white text-2xl sm:text-4xl lg:text-5xl font-bold mb-0.5 sm:mb-2`}>
                  85%
                </div>
                <div
                  className={`${clashDisplay.className} text-white/70 text-xs sm:text-base leading-tight sm:leading-normal`}>
                  Average Traffic Increase
                </div>
                <div
                  className={`${clashDisplay.className} text-white/50 text-[10px] sm:text-xs`}>
                  Within 6 Months
                </div>
              </div>
              <div className='text-center'>
                <div
                  className={`${clashDisplay.className} text-white text-2xl sm:text-4xl lg:text-5xl font-bold mb-0.5 sm:mb-2`}>
                  Top 3
                </div>
                <div
                  className={`${clashDisplay.className} text-white/70 text-xs sm:text-base leading-tight sm:leading-normal`}>
                  Google Rankings
                </div>
                <div
                  className={`${clashDisplay.className} text-white/50 text-[10px] sm:text-xs`}>
                  For Target Keywords
                </div>
              </div>
              <div className='text-center'>
                <div
                  className={`${clashDisplay.className} text-white text-2xl sm:text-4xl lg:text-5xl font-bold mb-0.5 sm:mb-2`}>
                  250+
                </div>
                <div
                  className={`${clashDisplay.className} text-white/70 text-xs sm:text-base leading-tight sm:leading-normal`}>
                  SEO Campaigns
                </div>
                <div
                  className={`${clashDisplay.className} text-white/50 text-[10px] sm:text-xs`}>
                  Successfully Delivered
                </div>
              </div>
            </div>
          </SlideReveal>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className='absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent pointer-events-none' />
    </section>
  );
};

export default Hero; 