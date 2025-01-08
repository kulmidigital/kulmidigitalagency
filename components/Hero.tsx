"use client";
import React from "react";
import localFont from "next/font/local";
import SlideReveal from "@/components/ui/slidereveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";
import Image from "next/image";

// Import Clash Display Font
const clashDisplay = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const Hero = () => {
  return (
    <section className='relative h-[100vh] w-full flex items-center justify-start overflow-hidden'>
      {/* Background Image with Next/Image for optimization */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/kulmidigital.webp'
          alt='Kulmi Digital Agency Background'
          fill
          priority
          fetchPriority='high'
          quality={75}
          className='object-cover'
          sizes='100vw'
        />
      </div>

      {/* Dark mode overlay */}
      <div className='absolute inset-0 bg-black/0 dark:bg-black/40 transition-colors duration-300 z-10' />

      {/* Main Content - Prioritized */}
      <div className='relative z-20 bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-[20px] px-[20px] py-[20px] w-[90%] mt-[50px] ml-4 md:w-[75%] md:py-[40px] md:px-[35px] md:mt-[100px] md:ml-8 lg:w-[55%] lg:mt-[150px] lg:ml-16 xl:w-[45%] shadow-lg'>
        <div>
          <h1
            className={`${clashDisplay.className} text-[28px] font-bold text-white mb-4 sm:text-[40px] lg:text-[50px] drop-shadow-md`}>
            We&apos;re a digital agency <br /> with a{" "}
            <span className='text-[#F56E0F] dark:text-[#FF7A1F] drop-shadow-sm'>
              strategic focus
            </span>
          </h1>
          <p
            className={`${clashDisplay.className} text-[16px] text-white/90 dark:text-white/80 mb-8 sm:text-[18px] lg:text-[19px] drop-shadow-sm`}>
            With consumers spending more time online than ever before, having a
            strong digital presence is essential for businesses to succeed.
          </p>

          {/* Buttons wrapped in SlideReveal for animation after main content loads */}
          <SlideReveal direction='up' duration={0.7}>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link href='/contact'>
                <Button
                  aria-label='Get started with our digital services'
                  className={`${clashDisplay.className} w-full sm:w-auto bg-[#F56E0F] dark:bg-[#FF7A1F] text-white px-6 sm:px-10 py-5 sm:py-7 rounded-full text-base sm:text-lg 
                    hover:bg-[#E55D00] dark:hover:bg-[#E55D00] 
                    transition-all duration-300 
                    shadow-lg hover:shadow-[#F56E0F]/20 dark:hover:shadow-[#FF7A1F]/20 
                    hover:shadow-2xl 
                    dark:shadow-xl dark:shadow-black/20
                    group`}>
                  Get Started
                  <ArrowRight
                    className='ml-2 group-hover:translate-x-1 transition-transform'
                    aria-hidden='true'
                  />
                </Button>
              </Link>

              <CalendlyButton
                aria-label='Schedule a consultation'
                className={`${clashDisplay.className} w-full sm:w-auto 
                  bg-white/10 dark:bg-white/5 
                  backdrop-blur-sm 
                  text-white 
                  border border-white/20 dark:border-white/10 
                  px-6 sm:px-10 py-5 sm:py-7 
                  rounded-full 
                  text-base sm:text-lg 
                  hover:bg-white/20 dark:hover:bg-white/10 
                  transition-all duration-300
                  shadow-lg dark:shadow-xl dark:shadow-black/20`}
              />
            </div>
          </SlideReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
