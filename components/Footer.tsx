"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import TopDeckFooter from "./TopDeckFooter";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Font imports
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

const currentYear = new Date().getFullYear();

const partners = [
  {
    name: "EstateBax",
    href: "/estatebax",
  },
  {
    name: "E-Warranty",
    href: "https://ewarranty.io/",
  },
];

// Footer Component
const Footer = () => {
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);

  const togglePartners = () => {
    setIsPartnersOpen(!isPartnersOpen);
  };

  return (
    <section className='flex flex-col px-4 py-8 sm:px-12 mt-[50px] sm:mt-[150px] bg-white dark:bg-gray-900'>
      {/* Top Section with Footer Content */}
      <div>
        <TopDeckFooter />
      </div>

      {/* Bottom Footer Section */}
      <div className='flex flex-col items-center space-y-6 py-6 border-t border-gray-200 dark:border-gray-700 mt-8 w-full sm:flex-row sm:justify-between sm:space-y-0'>
        {/* Left Section: Logo and Links */}
        <Link href='/'>
          <div className='flex items-center space-x-4'>
            <Image
              src='/logo.svg'
              alt='Logo'
              width={26}
              height={26}
              
            />
            <span
              className={`${clashDisplay.className} text-black dark:text-white text-[20px] sm:text-[26px] font-medium`}>
              Kulmi Digital
            </span>
          </div>
        </Link>

        {/* Middle Section: Navigation Links */}
        <div
          className={`${plusJakartaSans.className} flex flex-wrap justify-center gap-2 sm:gap-4 text-[14px] sm:text-[15px] text-gray-700 dark:text-gray-300`}>
          <div className='flex flex-wrap justify-center gap-2 sm:gap-4'>
            <Link href='/about'>About</Link>
            <span className='hidden sm:inline'>|</span>
            <Link href='/our-work'>Our Work</Link>
            <span className='hidden sm:inline'>|</span>
            <Link href='/blog'>Blog</Link>
            <span className='hidden sm:inline'>|</span>
            {/* Partners Dropdown */}
            <div className='relative inline-block'>
              <button
                onClick={togglePartners}
                className='flex items-center space-x-1 cursor-pointer hover:text-[#F56E0F] dark:hover:text-[#FF7A1F] transition-colors'>
                <span>Partners</span>
                <motion.div
                  animate={{ rotate: isPartnersOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <ChevronDown className='h-4 w-4' />
                </motion.div>
              </button>

              <AnimatePresence>
                {isPartnersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className='absolute bottom-full mb-2 left-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 min-w-[120px] z-50'>
                    {partners.map((partner) => (
                      <Link
                        key={partner.name}
                        href={partner.href}
                        className='block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm dark:text-gray-200'>
                        {partner.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className='hidden sm:inline'>|</span>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>

        {/* Right Section: Copyright and Privacy Policy */}
        <div
          className={`${plusJakartaSans.className} flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-700 dark:text-gray-300 text-[12px] sm:text-[14px]`}>
          <span>Copyright © {currentYear} - All Right Reserved</span>
          <span className='hidden sm:inline'>|</span>
          <Link
            href='/privacy'
            className='hover:text-[#F56E0F] dark:hover:text-[#FF7A1F] transition-colors'>
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
