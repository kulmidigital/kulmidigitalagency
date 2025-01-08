import React from "react";
import BananaCarousel from "./BananaCarousel";
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
      path: "../../app/fonts/ClashDisplay-Medium.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const clashDisplay2 = localFont({
  src: [
    {
      path: "../../app/fonts/ClashDisplay-Light.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-clash-display-2",
  display: "swap",
});

const Bananapay = () => {
  return (
    <section
      className={`${clashDisplay.className} px-4 pt-8 md:px-20 bg-white dark:bg-gray-900`}>
      <div className='flex flex-col md:flex-row md:justify-between md:gap-10'>
        <div className='w-full md:w-[70%]'>
          <SlideReveal direction='up' duration={0.7}>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white'>
              BananaPay 360° Marketing <br className='hidden md:inline' />{" "}
              Management
            </h1>
            <p
              className={`${plusJakartaSans.className} text-sm md:text-[14px] mt-4 md:mt-6 font-light text-gray-600 dark:text-gray-300`}>
              Scope: Digital PR & Strategy, Social Media Management &
              Advertising, Creative Design, PPC, SEO and Native Advertising
            </p>
          </SlideReveal>
        </div>
        <div className='w-full md:w-[30%] mt-6 md:mt-0'>
          <SlideReveal direction='right' duration={0.7}>
            <h3
              className={`${clashDisplay2.className} text-lg md:text-[22px] font-light text-gray-800 dark:text-gray-200`}>
              <span
                className={`${clashDisplay.className} font-bold text-black dark:text-white`}>
                Date:{" "}
              </span>{" "}
              From 2022 (Ongoing) <br />
              <span
                className={`${clashDisplay.className} font-bold text-black dark:text-white`}>
                Project:{" "}
              </span>{" "}
              360 Marketing <br />
              <span
                className={`${clashDisplay.className} font-bold text-black dark:text-white`}>
                Country:{" "}
              </span>{" "}
              U.S.A <br />
              <span
                className={`${clashDisplay.className} font-bold text-black dark:text-white`}>
                Website:{" "}
              </span>{" "}
              www.bananapays.com
            </h3>
          </SlideReveal>
        </div>
      </div>
      <BananaCarousel />

      <div className='flex flex-col md:flex-row md:justify-between md:gap-10 mt-12 md:mt-20'>
        <div className='w-full md:w-1/2'>
          <SlideReveal direction='left' duration={0.7}>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white'>
              More About The{" "}
              <span className='text-[#F56E0F] dark:text-[#FF7A1F]'>
                Project:
              </span>
            </h1>
            <p className='text-lg md:text-xl lg:text-[20px] mt-4 md:mt-6 font-light text-gray-800 dark:text-gray-200'>
              BananaPay is an international money transfer technology firm based
              in the United States of America enabling USA citizens send money
              affordably to over 14 countries globally.
            </p>
          </SlideReveal>
        </div>
        <div className='w-full md:w-1/2 mt-6 md:mt-16'>
          <SlideReveal direction='up' duration={0.7}>
            <h2
              className={`${plusJakartaSans.className} text-base md:text-lg lg:text-[18px] font-light text-gray-600 dark:text-gray-300`}>
              BananaPay has been working with us for over 24 months to help them
              grow their remittance market share in United States of America
              with the end goal of increasing both the transaction volume as
              well as brand relevancy. <br /> <br /> We have constantly
              delivered over 400% increase in Year-on-Year transaction volumes
              through strategic digital marketing including roll-out of PPC Ads
              with an above average conversion rate of 5%, creative assets
              deployment and brand placement on key influencer platforms.
            </h2>
          </SlideReveal>
        </div>
      </div>
      <div className="bg-[url('/bananapay/bananafb.webp')] bg-contain bg-no-repeat bg-center w-full h-[300px] sm:h-[450px] md:h-[70vh] lg:h-[100vh] rounded-3xl mt-8 md:mt-12 dark:brightness-90"></div>
      <div className="bg-[url('/bananapay/i1.webp')] bg-contain bg-no-repeat bg-center w-full h-[300px] sm:h-[450px] md:h-[70vh] lg:h-[100vh] rounded-3xl mt-8 md:mt-12 dark:brightness-90"></div>
      <div className="bg-[url('/bananapay/i2.webp')] bg-contain bg-no-repeat w-full h-[300px] sm:h-[450px] md:h-[70vh] lg:h-[100vh] rounded-3xl mt-8 md:mt-12 dark:brightness-90"></div>
      <div className="bg-[url('/bananapay/advid.webp')] bg-cover bg-center w-full h-[50px] sm:h-[100px] md:h-[100px] lg:h-[100px] mt-8 md:mt-12 dark:brightness-90"></div>
      <div className="bg-[url('/bananapay/bananadiscount.webp')] bg-contain bg-no-repeat bg-center w-full h-[300px] sm:h-[450px] md:h-[70vh] lg:h-[100vh] rounded-3xl mt-8 md:mt-12 dark:brightness-90"></div>
      <div className='relative w-full h-[300px] sm:h-[450px] md:h-[70vh] lg:h-[100vh] mt-8 md:mt-12 overflow-hidden rounded-3xl'>
        <video
          className='absolute top-0 left-0 w-full h-full object-cover dark:brightness-90'
          autoPlay
          loop
          muted
          playsInline>
          <source src='/bananapay/banana.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Bananapay;
