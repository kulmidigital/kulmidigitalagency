"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { testimonials, TestimonialData } from "@/data/testmonialsData"; 
import localFont from "next/font/local";

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

// Type definition for component props (if needed)
interface TestimonialCarouselProps {}

// TestimonialCarousel component with strict TypeScript
const TestimonialCarousel: React.FC<TestimonialCarouselProps> = () => {
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
      className={`relative w-[94%] mx-auto ${clashDisplay.className} font-sans`}>
      {/* Testimonial container */}
      <div className='bg-slate-50 rounded-lg p-8 overflow-hidden relative'>
        <div className='flex items-start space-x-8'>
          {/* Testimonial Logo */}
          <div className='flex-shrink-0 w-[200px] h-[200px] relative'>
            <Image
              src={testimonials[currentIndex].logo}
              alt={`${testimonials[currentIndex].company} logo`}
              layout='fill'
              objectFit='cover'
              className='rounded-full'
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
                <blockquote className='text-[20px] text-gray-800 mb-4'>
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className='mt-4'>
                  <div className='flex mb-2'>
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src='/icons/star_fill.svg'
                        alt='Full star'
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>
                  <p
                    className={`text-gray-900 text-[20px] ${clashDisplay.className}`}>
                    {testimonials[currentIndex].author}
                  </p>
                  <p className={`${clashDisplay2.className} text-[#F56E0F]`}>
                    {testimonials[currentIndex].position},{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      {currentIndex > 0 && (
        <button
          onClick={() => navigate(-1)}
          className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#F56E0F] p-[3px] rounded-full text-white transition-colors'
          aria-label='Previous testimonial'>
          <Image
            src='/icons/left.svg'
            alt='Previous testimonial'
            width={40}
            height={40}
            className='w-8 h-8'
          />
        </button>
      )}

      {/* Next Button */}
      {currentIndex < testimonials.length - 1 && (
        <button
          onClick={() => navigate(1)}
          className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#F56E0F] p-[3px] rounded-full text-white transition-colors'
          aria-label='Next testimonial'>
          <Image
            src='/icons/right.svg'
            alt='Next testimonial'
            width={40}
            height={40}
            className='w-8 h-8'
          />
        </button>
      )}

      {/* Pagination Dots */}
      <div className='relative z-20 flex justify-center -mt-16 space-x-2 bg-slate-300 w-[8%] rounded-2xl py-2 px-2 mx-auto'>
        {testimonials.map((_: any, index: number) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;