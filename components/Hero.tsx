"use client";
import React from "react";
import localFont from "next/font/local";
import SlideReveal from "@/components/ui/slidereveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

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
    <section className="relative bg-[url('/images/kulmidigital.jpeg')] bg-cover bg-center h-[100vh] w-full flex items-center justify-start">
      {/* Glassy Text Section */}
      <div className='relative bg-white/10 backdrop-blur-lg border border-white/30 rounded-[20px] px-[20px] py-[20px] w-[90%] mt-[50px] ml-4 md:w-[75%] md:py-[40px] md:px-[35px] md:mt-[100px] md:ml-8 lg:w-[55%] lg:mt-[150px] lg:ml-16 xl:w-[45%] shadow-lg'>
        <SlideReveal direction='up' duration={0.7}>
          <div>
            <h1 className={`${clashDisplay.className} text-[28px] font-bold text-white mb-4 sm:text-[40px] lg:text-[50px]`}>
              We&apos;re a digital agency <br /> with a{" "}
              <span className='text-[#F56E0F]'>strategic focus</span>
            </h1>
            <p className={`${clashDisplay.className} text-[16px] text-white mb-8 sm:text-[18px] lg:text-[19px]`}>
              With consumers spending more time online than ever before, having
              a strong digital presence is essential for businesses to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href='/contact'>
                <Button className={`${clashDisplay.className} w-full sm:w-auto bg-[#F56E0F] text-white px-6 sm:px-10 py-5 sm:py-7 rounded-full text-base sm:text-lg hover:bg-[#E55D00] transition-all duration-300 shadow-lg hover:shadow-[#F56E0F]/20 hover:shadow-2xl group`}>
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <CalendlyButton className={`${clashDisplay.className} w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 sm:px-10 py-5 sm:py-7 rounded-full text-base sm:text-lg hover:bg-white/20 transition-all duration-300`} />
            </div>
          </div>
        </SlideReveal>
      </div>
    </section>
  );
};

export default Hero;
