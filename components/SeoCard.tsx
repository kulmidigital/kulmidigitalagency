"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import SlideReveal from "@/components/ui/slidereveal";
import localFont from "next/font/local";

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

const SeoCard = () => {
  return (
    <SlideReveal direction='up' duration={0.7}>
      <div className='group relative p-6 h-[300px] rounded-2xl bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-900/20 dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-1'>
        <div className='relative z-10 h-full flex flex-col'>
          <div className='flex-grow'>
            <Image
              src='/icons/search.svg'
              alt='SEO Services'
              width={60}
              height={60}
              className='sm:w-70 sm:h-70 dark:invert-[0.15] transition-transform duration-300 group-hover:scale-110'
            />
            <h3
              className={`${clashDisplay.className} text-[24px] sm:text-[26px] font-bold text-black dark:text-white mb-2`}>
              Search Engine Optimization (SEO)
            </h3>
            <p className='text-gray-600 dark:text-gray-300 text-[16px] sm:text-[18px] leading-relaxed'>
              Boost your online visibility and drive organic traffic with our
              data-driven SEO strategies and technical expertise.
            </p>
          </div>

          <div className='mt-auto'>
            <button
              onClick={() => (window.location.href = "/seo")}
              type='button'
              aria-label='Learn more about our SEO services'
              className='text-left my-2'>
              <Badge
                variant='outline'
                className={`${clashDisplay.className} text-[12px] sm:text-[12px] w-[140px] 
                bg-gradient-to-r from-purple-400/20 via-fuchsia-400/20 to-pink-400/20 
                dark:from-purple-400/30 dark:via-fuchsia-400/30 dark:to-pink-400/30 
                hover:from-purple-400/30 hover:via-fuchsia-400/30 hover:to-pink-400/30
                dark:hover:from-purple-400/40 dark:hover:via-fuchsia-400/40 dark:hover:to-pink-400/40
                cursor-pointer shadow-lg dark:text-white transition-all duration-300 
                hover:scale-105 dark:hover:scale-105`}>
                See about SEO
              </Badge>
            </button>
          </div>
        </div>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-100/0 to-purple-100/0 dark:from-purple-500/0 dark:to-purple-500/0 rounded-2xl transition-all duration-300 group-hover:from-purple-100/10 group-hover:to-purple-100/30 dark:group-hover:from-purple-500/5 dark:group-hover:to-purple-500/10'></div>
      </div>
    </SlideReveal>
  );
};

export default SeoCard;
