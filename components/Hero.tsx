"use client";
import React from "react";
import localFont from "next/font/local";
import SlideReveal from "@/components/ui/slidereveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            <h1
              className={`text-[28px] font-bold text-white mb-4 sm:text-[40px] lg:text-[50px] ${clashDisplay.className}`}>
              We&apos;re a digital agency <br /> with a{" "}
              <span className='text-[#FF8730]'>strategic focus</span>
            </h1>
            <p
              className={`text-[16px] text-white mb-6 sm:text-[18px] lg:text-[19px] ${clashDisplay.className}`}>
              With consumers spending more time online than ever before, having
              a strong digital presence is essential for businesses to succeed.
            </p>
            <Link href='/contact' passHref>
              <Button 
                variant="default" 
                size="lg"
                className="bg-[#F56E0F] text-white border border-[#F56E0F] rounded-full font-semibold hover:bg-transparent hover:border-white transition duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </SlideReveal>
      </div>
    </section>
  );
};

export default Hero;
