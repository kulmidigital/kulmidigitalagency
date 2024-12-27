"use client";
import React, { useState } from "react";
import WebsitePackages from "@/components/WebsitePackages";
import FinePrints from "@/components/FinePrints";
import Link from "next/link";

const WebPackagesPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className='flex-1 relative'>
      <WebsitePackages />
      <div className='flex justify-center items-center py-8'>
        <Link
          className='text-sm sm:text-[18px] lg:text-[20px] text-center w-[70%] p-4 rounded-[40px] flex items-center justify-center space-x-2 bg-[#F56E0F] text-white hover:bg-transparent border border-[#F56E0F] hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors duration-200'
          href='/contact'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <span>Get Started</span>
          {isHovered ? (
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'>
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
              className='w-5 h-5'>
              <path d='M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z'></path>
              <path d='M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z'></path>
            </svg>
          )}
        </Link>
      </div>
      <FinePrints />
    </main>
  );
};

export default WebPackagesPage;
