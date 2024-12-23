"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import localFont from "next/font/local";
import TestimonialCarousel from "./TestimonialCarousel";
import SlideReveal from "@/components/ui/slidereveal";

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
  "energizer.png",
  "bigben.png",
  "celly.png",
  "dentsu.png",
  "dtb.png",
  "glovo.png",
  "im.png",
  "ipay.svg",
  "naivas.png",
  "rubis.webp",
  "upfield.png",
  "visionplus.png",
  "sombank.png",
  "kcb.png",
  "haier.png",
  "omarmp.png",
  "banana.png",
  "tcl.png",
  "kfmedia.png",
  "dawan.png",
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
    <section className='flex flex-col bg-slate-50 mt-[40px] pt-[40px] pb-[40px] sm:mt-[60px] sm:pt-[60px] sm:pb-[60px] lg:mt-[80px] lg:pt-[80px] lg:pb-[80px]'>
      {/* Title Section */}
      <SlideReveal direction='left' duration={0.7}>
        <h1
          className={`${clashDisplay.className} text-[28px] sm:text-[36px] lg:text-[45px] px-4 sm:px-8 lg:px-12 font-bold text-black mb-4 w-full sm:w-[80%] lg:w-[60%]`}>
          Trusted by <span className='text-[#F56E0F]'>500+</span> Continental &
          Global Companies
        </h1>
      </SlideReveal>

      {/* Logo Carousel */}
      <div
        className='overflow-hidden relative px-4 sm:px-8 lg:px-12'
        ref={innerRef}>
        <motion.div
          ref={carouselRef}
          className='flex'
          style={{ gap: "1rem" }} // Smaller gap for mobile, increases on larger screens
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className='flex items-center justify-center bg-center bg-no-repeat'
              style={{
                minWidth: "120px", // Smaller size for mobile, larger on larger screens
                minHeight: "80px", // Smaller size for mobile, larger on larger screens
                backgroundImage: `url(/logos/${logo})`,
                backgroundSize: "contain",
              }}></div>
          ))}
        </motion.div>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-[15%] sm:w-[10%] bg-gradient-to-r from-[#f8fafc]'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-[15%] sm:w-[10%] bg-gradient-to-l from-[#f8fafc]'></div>
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
