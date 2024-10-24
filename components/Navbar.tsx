"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Facebook,
  Instagram,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion, AnimatePresence } from "framer-motion";

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

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const services = [
    {
      name: "Facebook Advertising",
      icon: Facebook,
      href: "/socialservice/facebook",
      color: "#1877F2",
    },
    {
      name: "Instagram Marketing",
      icon: Instagram,
      href: "/socialservice/instagram",
      color: "#E1306C",
    },
    {
      name: "X Campaigns",
      customIcon: "/icons/xl.svg",
      href: "/socialservice/x",
      color: "#1DA1F2",
    },
    {
      name: "YouTube Advertising",
      customIcon: "/icons/youtube.svg",
      href: "/socialservice/youtube",
      color: "#FF0000",
    },
    {
      name: "TikTok Advertising",
      customIcon: "/icons/tiktok.svg",
      href: "/socialservice/tiktok",
      color: "#000000",
    },
    {
      name: "Snapchat Marketing",
      customIcon: "/icons/snapchat.svg",
      href: "/socialservice/snapchat",
      color: "#FFFC00",
    },
    {
      name: "Google Advertising",
      customIcon: "/icons/google.svg",
      href: "/socialservice/google",
      color: "#DB4437",
    },
    {
      name: "Pinterest Advertising",
      customIcon: "/icons/pinterest.svg",
      href: "/socialservice/pinterest",
      color: "#E60023",
    },
  ];

  return (
    <nav className='flex justify-between items-center z-[99999] bg-white md:pt-6 md:pb-[22px] md:px-[76px] px-4 py-3 border-b-[1px] border-[#F56E0F] sticky top-0 left-0 right-0 w-full'>
      {/* Left Side: Logo and Brand */}
      <Link href='/'>
        <div className='flex items-center'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={35}
            height={35}
            className='mr-2 w-[35px] h-[35px]'
          />
          <span
            className={`${clashDisplay.className} text-black text-[26px] sm:text-[30px] md:text-[32px] lg:text-[26px]`}
            style={{ fontWeight: 500 }}>
            Kulmi Digital
          </span>
        </div>
      </Link>

      {/* Right Side: Desktop Links */}
      <div
        className={`${plusJakartaSans.className} hidden md:flex font-bold space-x-6 text-[14px] text-gray-700`}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <HoverCard>
          <HoverCardTrigger className='cursor-pointer'>
            Services
          </HoverCardTrigger>
          <HoverCardContent className='w-96 p-0 bg-white rounded-xl shadow-xl'>
            <div className='grid grid-cols-1 gap-2 p-4'>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className={`${clashDisplay.className} flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group`}>
                  <div
                    className='flex items-center justify-center w-10 h-10 rounded-full mr-3 transition-colors duration-200'
                    style={{ backgroundColor: service.color + "20" }}>
                    {service.customIcon ? (
                      <Image
                        src={service.customIcon}
                        alt={service.name}
                        width={20}
                        height={20}
                        className='transition-colors duration-200'
                      />
                    ) : (
                      service.icon && (
                        <service.icon
                          className='w-5 h-5 transition-colors duration-200'
                          style={{ color: service.color }}
                        />
                      )
                    )}
                  </div>
                  <div>
                    <span className='font-medium text-sm group-hover:text-[#F56E0F] transition-colors duration-200'>
                      {service.name}
                    </span>
                    <p className='text-xs text-gray-500 mt-1'>
                      Boost your {service.name.split(" ")[0]} presence
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </HoverCardContent>
        </HoverCard>
        <Link href='/our-work'>Our Work</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='tel:+254735101001'>+254 735101001</Link>
        <Link href='mailto:info@kulmi.digital'>info@kulmi.digital</Link>
      </div>

      {/* Hamburger Menu: Mobile View */}
      <div className='md:hidden'>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button>
              <Menu className='w-8 h-8' />
            </button>
          </SheetTrigger>
          <SheetContent
            side='top'
            className='bg-white px-6 py-4 border-b-[1px] border-[#F56E0F]'>
            {/* Logo and Flags */}
            <div className='flex justify-between items-center mb-6'>
              {/* Left Side: Logo */}
              <Link href='/' onClick={handleLinkClick}>
                <div className='flex items-center'>
                  <Image src='/logo.svg' alt='Logo' width={40} height={40} />
                </div>
              </Link>

              {/* Flags */}
              <div className='flex space-x-6 mr-12'>
                <Image
                  src='/flags/kenya.png'
                  alt='Kenya'
                  width={30}
                  height={30}
                />
                <Image
                  src='/flags/somalia.png'
                  alt='Somalia'
                  width={30}
                  height={30}
                />
                <Image
                  src='/flags/ethiopia.png'
                  alt='Ethiopia'
                  width={30}
                  height={30}
                />
                <Image
                  src='/flags/tanzania.png'
                  alt='Tanzania'
                  width={30}
                  height={30}
                />
                <Image
                  src='/flags/uganda.png'
                  alt='Uganda'
                  width={30}
                  height={30}
                />
              </div>
            </div>

            {/* Mobile Links */}
            <div className='flex flex-col items-start space-y-4'>
              <Link
                href='/'
                className='text-lg font-bold'
                onClick={handleLinkClick}>
                Home
              </Link>
              <Link
                href='/about'
                className='text-lg font-bold'
                onClick={handleLinkClick}>
                About
              </Link>
              <div className='w-full'>
                <button
                  onClick={toggleServices}
                  className='text-lg font-bold flex items-center justify-between w-full'>
                  Digital Advertising
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className='ml-1 h-4 w-4' />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className={`${clashDisplay.className} mt-2 ml-4 space-y-2`}>
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className='flex items-center py-1'
                            onClick={handleLinkClick}>
                            {service.customIcon ? (
                              <Image
                                src={service.customIcon}
                                alt={service.name}
                                width={16}
                                height={16}
                                className='mr-2'
                              />
                            ) : (
                              service.icon && (
                                <service.icon
                                  className='w-4 h-4 mr-2'
                                  style={{ color: service.color }}
                                />
                              )
                            )}
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href='/our-work'
                className='text-lg font-bold'
                onClick={handleLinkClick}>
                Our Work
              </Link>
              <Link
                href='/contact'
                className='text-lg font-bold'
                onClick={handleLinkClick}>
                Contact
              </Link>
              <Link
                href='tel:+254735101001'
                className='text-lg font-bold'
                onClick={handleLinkClick}>
                +254 735101001
              </Link>
              <Link
                href='mailto:info@kulmi.digital'
                className='text-lg font-bold'
                onClick={handleLinkClick}>
                info@kulmi.digital
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
