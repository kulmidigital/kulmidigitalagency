import React from "react";
import SlideReveal from "@/components/ui/slidereveal";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const clashDisplay = localFont({
  src: [
    {
      path: "../../app/fonts/ClashDisplay-Medium.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const Hero = () => {
  return (
    <div className={`${clashDisplay.className} relative dark:bg-gray-900`}>
      <div className="relative w-full min-h-[90vh] bg-[url('/images/estatebax-hero.webp')] px-0 md:px-10 bg-cover bg-center">
        <div className='absolute inset-0 bg-black/90'></div>

        <div className='relative z-10 w-[96%] md:container mx-auto px-0 md:px-4 py-20 flex flex-col justify-center min-h-[90vh]'>
          <div className='md:max-w-[70%] lg:max-w-[60%]'>
            <SlideReveal direction='up' duration={0.7}>
              <Badge
                variant='outline'
                className='mb-6 text-[#F56E0F] border-[#F56E0F] hover:bg-[#F56E0F] hover:text-white transition-colors duration-300'>
                OFFICIAL PARTNER
              </Badge>
              <h1 className='text-4xl md:text-6xl lg:text-7xl text-white font-bold'>
                All-in-one Real Estate CRM & Marketing Solution
              </h1>
            </SlideReveal>

            <SlideReveal direction='up' duration={0.7} delay={0.2}>
              <p className='mt-6 text-lg md:text-xl text-gray-200'>
                Streamline your real estate business with our comprehensive CRM,
                marketing tools, and free website builder - everything you need
                in one place.
              </p>
            </SlideReveal>

            <SlideReveal direction='up' duration={0.7} delay={0.4}>
              <div className='mt-10 flex flex-col sm:flex-row gap-4'>
                <Link
                  href='https://estatebax.app/?ref=kulmidigital/register'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-[#F56E0F] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#E55D00] transition-colors duration-300 text-center'>
                  Get Started For Free
                </Link>
              </div>
            </SlideReveal>

            <SlideReveal direction='up' duration={0.7} delay={0.6}>
              <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-white'>
                {[
                  ["1000+", "Active Users"],
                  ["50K+", "Properties Listed"],
                  ["98%", "Customer Satisfaction"],
                  ["24/7", "Customer Support"],
                ].map(([stat, label]) => (
                  <div
                    key={label}
                    className='text-center md:text-left whitespace-nowrap'>
                    <div className='text-3xl md:text-4xl font-bold text-[#F56E0F]'>
                      {stat}
                    </div>
                    <div className='mt-2 text-sm md:text-base text-gray-300'>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </SlideReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
