"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/testmonialsData";
import localFont from "next/font/local";

// Define TypeScript interface for Testimonial
interface Testimonial {
  logo: string;
  company: string;
  quote: string;
  author: string;
  position: string;
}

// Load custom fonts
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

const clashDisplay2 = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Regular.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

// Animation variants for framer-motion
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    position: "absolute" as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative" as const,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    position: "absolute" as const,
  }),
};

// TestimonialCarousel component with strict TypeScript
const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  // Function to handle navigation between testimonials
  const navigate = (newDirection: number): void => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className={`relative w-[90%] sm:w-[94%] mx-auto ${clashDisplay.className} font-sans`}>
      {/* Testimonial container - add dark mode bg */}
      <div className='bg-slate dark:bg-gray-800 rounded-[20px] p-6 sm:p-8 overflow-hidden relative'>
        <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8'>
          {/* Testimonial Logo */}
          <div className='flex-shrink-0 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] relative'>
            <Image
              src={testimonials[currentIndex].logo}
              alt={`${testimonials[currentIndex].company} logo`}
              layout='fill'
              objectFit='cover'
              className='rounded-[20px] dark:brightness-90'
            />
          </div>

          {/* Testimonial Content */}
          <div className='flex-grow relative overflow-hidden'>
            <AnimatePresence initial={false} custom={direction} mode='sync'>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{
                  x: { type: "spring", stiffness: 150, damping: 25 },
                  opacity: { duration: 0.6 },
                }}
                className='w-full'>
                <blockquote className='text-[16px] sm:text-[18px] lg:text-[20px] text-gray-800 dark:text-gray-200 mb-4'>
                  &quot;{testimonials[currentIndex].quote}&quot;
                </blockquote>
                <div className='mt-4'>
                  <div className='flex mb-2'>
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src='/icons/star_fill.svg'
                        alt='Full star'
                        width={16}
                        height={16}
                        className='sm:w-6 sm:h-6 dark:invert-[0.15]'
                      />
                    ))}
                  </div>
                  <p
                    className={`text-gray-900 dark:text-white text-[16px] sm:text-[18px] lg:text-[20px] ${clashDisplay.className}`}>
                    {testimonials[currentIndex].author}
                  </p>
                  <p
                    className={`${clashDisplay2.className} text-[#F56E0F] dark:text-[#FF7A1F]`}>
                    {testimonials[currentIndex].position},{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Buttons - add dark mode hover */}
      {currentIndex > 0 && (
        <button
          onClick={() => navigate(-1)}
          className='absolute left-2 top-[90%] sm:top-1/2 -translate-y-1/2 z-10 bg-[#F56E0F] dark:bg-[#FF7A1F] p-[3px] rounded-[12px] text-white transition-colors'
          aria-label='Previous testimonial'>
          <Image
            src='/icons/left.svg'
            alt='Previous testimonial'
            width={32}
            height={32}
            className='w-6 h-6 dark:invert-[0.15]'
          />
        </button>
      )}

      {currentIndex < testimonials.length - 1 && (
        <button
          onClick={() => navigate(1)}
          className='absolute right-2 top-[90%] sm:top-1/2 -translate-y-1/2 z-10 bg-[#F56E0F] dark:bg-[#FF7A1F] p-[3px] rounded-[12px] text-white transition-colors'
          aria-label='Next testimonial'>
          <Image
            src='/icons/right.svg'
            alt='Next testimonial'
            width={32}
            height={32}
            className='w-6 h-6 dark:invert-[0.15]'
          />
        </button>
      )}

      {/* Pagination Dots - add dark mode bg */}
      <div className='relative z-20 flex justify-center mt-4 sm:mt-8 space-x-2 bg-slate-300 dark:bg-gray-700 rounded-[20px] py-2 px-4 mx-auto w-fit'>
        {testimonials.map((_: Testimonial, index: number) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-[6px] ${
              index === currentIndex
                ? "bg-white"
                : "bg-gray-500 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
