import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import SlideReveal from "@/components/ui/slidereveal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
});

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

interface ServiceCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const ServiceCard = ({ iconSrc, title, description }: ServiceCardProps) => {
  return (
    <SlideReveal direction='up' duration={0.7}>
      <div className='group relative p-6 h-[300px] rounded-2xl bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-1'>
        <div className='relative z-10'>
          <Image
            src={iconSrc}
            alt={title}
            width={60}
            height={60}
            className='sm:w-70 sm:h-70 dark:invert-[0.15] transition-transform duration-300 group-hover:scale-110'
          />
          <h2
            className={`${clashDisplay.className} text-[24px] sm:text-[26px] font-bold text-black dark:text-white mb-2`}>
            {title}
          </h2>
          <p
            className={`${plusJakartaSans.className} text-gray-600 dark:text-gray-300 text-[16px] sm:text-[18px] leading-relaxed`}>
            {description}
          </p>
        </div>
        <div className='absolute inset-0 bg-gradient-to-br from-orange-100/0 to-orange-100/0 dark:from-orange-500/0 dark:to-orange-500/0 rounded-2xl transition-all duration-300 group-hover:from-orange-100/10 group-hover:to-orange-100/30 dark:group-hover:from-orange-500/5 dark:group-hover:to-orange-500/10'></div>
      </div>
    </SlideReveal>
  );
};

export default ServiceCard;
