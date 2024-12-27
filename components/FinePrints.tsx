"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import localFont from "next/font/local";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const clashDisplay = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Medium.woff",
      weight: "100",
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
  "eyelink.png",
  "haier.png",
  "omarmp.png",
  "banana.png",
  "tcl.png",
];

export default function FinePrints() {
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

  const finePrints = [
    "Volume discounts are available.",
    "Additional features can be requested after consultation.",
    "Package prices may be reduced for smaller websites or reduced needs.",
    "Same package rates apply for redesigns of existing websites.",
    "Version upgrades of WordPress, if required, may incur additional charges.",
    "Any paid inputs from third-party providers (extensions, images, themes, logos, content, templates, API keys) needed for platform development will be provided by the client during the development.",
    "Hosting accounts and SSL for the website will be provided by the client or purchased separately from Capital Numbers.",
    "For custom designs, Capital Numbers will design the site to be fluid responsive for mobile, tablet, and desktop devices down to a 320-pixel width compatibility (iPhone 5 and up).",
    "Pricing may vary due to specific complexity with your requirements.",
    "The delivery timeline is subject to timely approvals and feedback from the client.",
    "All websites are made using Elementor or Visual Composer.",
    "No content migration is included.",
  ];

  return (
    <div>
      <Card
        className={`${clashDisplay.className} mt-4 mb-16 mx-2 md:mx-8 shadow-xl rounded-[5px] md:rounded-[15px] dark:bg-gray-800 dark:border-gray-700`}>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-[#F56E0F]'>
            FINE PRINTS
          </CardTitle>
          <CardDescription className='dark:text-gray-400'>
            Important information about our website packages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className='list-disc pl-5 space-y-2'>
            {finePrints.map((print, index) => (
              <li key={index} className='text-sm dark:text-gray-300'>
                {print}
              </li>
            ))}
          </ol>

          <h1 className='text-3xl mt-4 dark:text-gray-100'>Trusted by</h1>

          <div
            className='overflow-hidden relative px-4 sm:px-8 lg:px-12'
            ref={innerRef}>
            <motion.div
              ref={carouselRef}
              className='flex'
              style={{ gap: "1rem" }}>
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className='flex items-center justify-center bg-center bg-no-repeat'
                  style={{
                    minWidth: "120px",
                    minHeight: "80px",
                    backgroundImage: `url(/logos/${logo})`,
                    backgroundSize: "contain",
                  }}></div>
              ))}
            </motion.div>
            <div className='pointer-events-none absolute inset-y-0 left-0 w-[15%] sm:w-[10%] bg-gradient-to-r from-white dark:from-gray-800'></div>
            <div className='pointer-events-none absolute inset-y-0 right-0 w-[15%] sm:w-[10%] bg-gradient-to-l from-white dark:from-gray-800'></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
