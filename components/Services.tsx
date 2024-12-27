import React from "react";
import ServiceCard from "./ServiceCard";
import DigitalAdvertisingCard from "./DigitalAdvertisingCard";
import SeoCard from "./SeoCard";
import WebDevCard from "./WebDevCard";
import localFont from "next/font/local";
import SlideReveal from "@/components/ui/slidereveal";
import { services } from "@/data/servicesData";

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

const Services: React.FC = () => {
  return (
    <section
      id='services'
      className='relative bg-white dark:bg-gray-900 py-8 px-4 sm:py-16 sm:px-6 md:px-12'>
      {/* Subtle gradient overlay for dark mode */}
      <div className='absolute inset-0  opacity-0 dark:opacity-100 transition-opacity duration-300' />

      <div className='relative z-10'>
        {" "}
        {/* Ensure content is above gradient */}
        <SlideReveal direction='left' duration={0.7}>
          <h1
            className={`${clashDisplay.className} text-[28px] md:w-[60%] sm:text-[36px] md:text-[45px] font-bold text-left text-black dark:text-white pl-2 sm:pl-4 py-8 sm:py-12 drop-shadow-sm`}>
            Boost Your Business with our Strategic{" "}
            <span className='text-[#F56E0F] dark:text-[#FF7A1F] drop-shadow-sm'>
              Brand
            </span>{" "}
            &{" "}
            <span className='text-[#F56E0F] dark:text-[#FF7A1F] drop-shadow-sm'>
              Digital
            </span>{" "}
            <span className='dark:text-gray-100'>Services</span>
          </h1>
        </SlideReveal>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service, index) => {
              if (service.title === "Digital Advertising (PPC & SEM)") {
                return <DigitalAdvertisingCard key={index} />;
              }
              if (service.title === "Search Engine Optimization (SEO)") {
                return <SeoCard key={index} />;
              }
              if (service.title === "Web Development") {
                return <WebDevCard key={index} />;
              }
              return (
                <ServiceCard
                  key={index}
                  iconSrc={service.iconSrc}
                  title={service.title}
                  description={service.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
