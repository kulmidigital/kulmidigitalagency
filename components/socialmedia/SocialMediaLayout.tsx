import React, { useState } from "react";
import Link from "next/link";
import Hero from "./Hero";
import TestimonialCarousel from "../TestimonialCarousel";
import Projects from "../Projects";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: [
    {
      path: "../../app/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

interface SocialMediaLayoutProps {
  heroProps: {
    gradientFrom: string;
    gradientTo: string;
    title: string;
    description: string;
  };
  benefitsSection: React.ReactNode;
  whySection: React.ReactNode;
  platform: string;
}

const SocialMediaLayout: React.FC<SocialMediaLayoutProps> = ({
  heroProps,
  benefitsSection,
  whySection,
  platform,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`${clashDisplay.className} font-sans`}>
      <Hero {...heroProps} />
      <div className='py-8 sm:py-12 bg-white dark:bg-gray-900'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 sm:mb-12 font-clash-display text-center'>
            Benefits of Our {platform} Marketing Services
          </h2>
          {benefitsSection}
        </div>
      </div>
      <div className='py-12 sm:py-16 bg-gray-100 dark:bg-gray-800'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 sm:mb-12 font-clash-display text-center'>
            Why {platform} Adverts?
          </h2>
          {whySection}
          <div className='mt-8 sm:mt-12'>
            <div className='flex justify-center items-center'>
              <Link
                className='block w-full sm:w-auto sm:inline-block text-center px-6 py-3 rounded-full text-base sm:text-lg font-medium bg-[#F56E0F] text-white hover:bg-transparent border border-[#F56E0F] hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors duration-300'
                href='/contact'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <span className='flex items-center justify-center'>
                  <span className='mr-2'>Get Started</span>
                  {isHovered ? (
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 inline-block'>
                      <path
                        d='M6 12H18M18 12L13 7M18 12L13 17'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox='0 0 1024 1024'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='w-5 h-5 inline-block'>
                      <path d='M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z'></path>
                      <path d='M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z'></path>
                    </svg>
                  )}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='py-8 sm:py-12 bg-white dark:bg-gray-900'>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 font-clash-display text-center mb-8'>
          What Our Clients Say
        </h1>
        <TestimonialCarousel />
      </div>
      <div className='py-8 sm:py-12 bg-white dark:bg-gray-900'>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 font-clash-display text-center mb-8'>
          Still Not Convinced? See Our Work
        </h1>
        <Projects />
      </div>
    </div>
  );
};

export default SocialMediaLayout;
