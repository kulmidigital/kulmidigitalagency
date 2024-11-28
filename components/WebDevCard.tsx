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
      <div className='flex flex-col text-left p-4 sm:p-6 space-y-4'>
        <div className='text-[#F56E0F] mb-4'>
          <Image
            src='/icons/code.svg'
            alt='Web Development'
            width={60}
            height={60}
            className='sm:w-70 sm:h-70'
          />
        </div>
        <h3
          className={`${clashDisplay.className} text-[24px] sm:text-[26px] font-bold text-black mb-2`}>
          Web Development
        </h3>
        <p className='text-gray-600 text-[16px] sm:text-[18px] leading-relaxed'>
          Custom websites and CMS solutions built with modern technologies to deliver exceptional user experiences.
        </p>
        <div className="flex justify-start">
          <Link href="/webdevelopment">
            <Badge
              variant='outline'
              className={`${clashDisplay.className} text-[12px] sm:text-[12px] w-[140px] bg-gradient-to-br from-blue-300/20 to-purple-400/20 cursor-pointer hover:bg-gray-100 shadow-lg`}>
              See about web dev
            </Badge>
          </Link>
        </div>
      </div>
    </SlideReveal>
  );
};

export default WebDevCard; 