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

const WebDevCard = () => {
  return (
    <SlideReveal direction='up' duration={0.7}>
      <div className='group relative p-6 h-[300px] rounded-2xl bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/20 dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-1'>
        <div className='relative z-10 h-full flex flex-col'>
          <div className='flex-grow'>
            <Image
              src='/icons/code.svg'
              alt='Web Development'
              width={60}
              height={60}
              className='sm:w-70 sm:h-70 dark:invert-[0.15] transition-transform duration-300 group-hover:scale-110'
            />
            <h3
              className={`${clashDisplay.className} text-[24px] sm:text-[26px] font-bold text-black dark:text-white mb-2`}>
              Web Development
            </h3>
            <p className='text-gray-600 dark:text-gray-300 text-[16px] sm:text-[18px] leading-relaxed'>
              Custom websites and CMS solutions built with modern technologies
              to deliver exceptional user experiences.
            </p>
          </div>
          <div className='mt-auto'>
            <button
              onClick={() => (window.location.href = "/webdevelopment")}
              type='button'
              aria-label='Learn more about our web development services'
              className='text-left my-2'>
              <Badge
                variant='outline'
                className={`${clashDisplay.className} text-[12px] sm:text-[12px] w-[140px] 
                bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-violet-400/20 
                dark:from-blue-400/30 dark:via-indigo-400/30 dark:to-violet-400/30 
                hover:from-blue-400/30 hover:via-indigo-400/30 hover:to-violet-400/30
                dark:hover:from-blue-400/40 dark:hover:via-indigo-400/40 dark:hover:to-violet-400/40
                cursor-pointer shadow-lg dark:text-white transition-all duration-300 
                hover:scale-105 dark:hover:scale-105`}>
                See about web dev
              </Badge>
            </button>
          </div>
        </div>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-100/0 to-blue-100/0 dark:from-blue-500/0 dark:to-blue-500/0 rounded-2xl transition-all duration-300 group-hover:from-blue-100/10 group-hover:to-blue-100/30 dark:group-hover:from-blue-500/5 dark:group-hover:to-blue-500/10'></div>
      </div>
    </SlideReveal>
  );
};

export default WebDevCard;
