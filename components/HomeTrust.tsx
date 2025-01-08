"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import localFont from "next/font/local";
import TestimonialCarousel from "./TestimonialCarousel";
import SlideReveal from "@/components/ui/slidereveal";
import Image from "next/image";

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

const logos = [
  "energizer.webp",
  "bigben.webp",
  "celly.webp",
  "dentsu.webp",
  "dtb.webp",
  "glovo.webp",
  "im.webp",
  "ipay.webp",
  "naivas.webp",
  "rubis.webp",
  "upfield.webp",
  "visionplus.webp",
  "sombank.webp",
  "kcb.webp",
  "haier.webp",
  "omarmp.webp",
  "banana.webp",
  "tcl.webp",
  "kfmedia.webp",
  "dawan.webp",
];

const HomeTrust: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);

  useEffect(() => {
    if (innerRef.current) {
      setWidth(innerRef.current.scrollWidth - innerRef.current.offsetWidth);
    }
  }, []);

  useAnimationFrame(() => {
    if (carouselRef.current && width > 0) {
      xRef.current -= 1.25;
      if (xRef.current <= -width) {
        xRef.current = 0;
      }
      carouselRef.current.style.transform = `translateX(${xRef.current}px)`;
    }
  });

  return (
    <section className='flex flex-col bg-slate-50 dark:bg-gray-900 mt-[40px] pt-[40px] pb-[40px] sm:mt-[60px] sm:pt-[60px] sm:pb-[60px] lg:mt-[80px] lg:pt-[80px] lg:pb-[80px]'>
      {/* Title Section */}
      <SlideReveal direction='left' duration={0.7}>
        <h2
          className={`${clashDisplay.className} text-[28px] sm:text-[36px] lg:text-[45px] px-4 sm:px-8 lg:px-12 font-bold text-black dark:text-white mb-4 w-full sm:w-[80%] lg:w-[60%]`}>
          Trusted by{" "}
          <span className='text-[#E55D00] dark:text-[#FF9F4D]'>500+</span>{" "}
          Continental & Global Companies
        </h2>
      </SlideReveal>

      {/* Logo Carousel */}
      <div
        className='overflow-hidden relative px-4 sm:px-8 lg:px-12'
        ref={innerRef}
        role='region'
        aria-label='Partner logos carousel'>
        <motion.div ref={carouselRef} className='flex' style={{ gap: "1rem" }}>
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className='relative flex items-center justify-center'
              style={{
                minWidth: "120px",
                minHeight: "80px",
              }}>
              <Image
                src={`/logos/${logo}`}
                alt={`${logo.replace(".webp", "")} logo`}
                fill
                sizes='120px'
                className='object-contain dark:invert-[0.15]'
                loading={index > 5 ? "lazy" : "eager"}
              />
            </div>
          ))}
        </motion.div>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-[15%] sm:w-[10%] bg-gradient-to-r from-[#f8fafc] dark:from-gray-900'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-[15%] sm:w-[10%] bg-gradient-to-l from-[#f8fafc] dark:from-gray-900'></div>
      </div>

      {/* Testimonial Section */}
      <div className='mt-8 sm:mt-12 lg:mt-16'>
        <SlideReveal direction='up' duration={0.7}>
          <TestimonialCarousel />
        </SlideReveal>
      </div>
    </section>
  );
};

export default HomeTrust;
