"use client";
import { useState, useEffect } from "react";
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
  Sun,
  Moon,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

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

const mainServices = [
  {
    name: "Digital Advertising",
    subServices: [
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
    ],
  },
  {
    name: "Web Development",
    href: "/webdevelopment",
  },
  {
    name: "SEO",
    href: "/seo",
  },
];

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDigitalAdvertisingOpen, setIsDigitalAdvertisingOpen] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
    setIsServicesOpen(false);
    setIsDigitalAdvertisingOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (!isServicesOpen) {
      setIsDigitalAdvertisingOpen(false);
    }
  };

  const toggleDigitalAdvertising = () => {
    setIsDigitalAdvertisingOpen(!isDigitalAdvertisingOpen);
  };

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className='flex justify-between items-center z-[99999] bg-white dark:bg-gray-900 md:pt-6 md:pb-[22px] md:px-[76px] px-4 py-3 border-b-[1px] border-[#F56E0F] sticky top-0 left-0 right-0 w-full'>
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
            className={`${clashDisplay.className} text-black dark:text-white text-[26px] sm:text-[30px] md:text-[32px] lg:text-[26px]`}
            style={{ fontWeight: 500 }}>
            Kulmi Digital
          </span>
        </div>
      </Link>

      {/* Right Side: Desktop Links */}
      <div
        className={`${plusJakartaSans.className} hidden md:flex font-bold space-x-6 text-[14px] text-gray-700 dark:text-gray-200 items-center`}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <HoverCard>
          <HoverCardTrigger className='cursor-pointer'>
            Services
          </HoverCardTrigger>
          <HoverCardContent className='w-96 p-0 bg-white dark:bg-gray-900 rounded-xl shadow-xl max-h-[90vh] overflow-y-auto dark:border-gray-800'>
            <div className='grid grid-cols-1 gap-2 p-4'>
              {mainServices.map((service) =>
                service.subServices ? (
                  <div key={service.name} className='w-full'>
                    <button
                      onClick={toggleDigitalAdvertising}
                      className={`${clashDisplay.className} flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group sticky top-0 bg-white dark:bg-gray-900 z-10`}>
                      <span className='font-medium text-sm group-hover:text-[#F56E0F] dark:text-gray-200'>
                        {service.name}
                      </span>
                      <motion.div
                        animate={{ rotate: isDigitalAdvertisingOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}>
                        <ChevronDown className='w-4 h-4 dark:text-gray-200' />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isDigitalAdvertisingOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}>
                          <div className='pl-4 space-y-2'>
                            {service.subServices.map((subService) => (
                              <Link
                                key={subService.name}
                                href={subService.href}
                                className={`${clashDisplay.className} flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group`}>
                                <div
                                  className='flex items-center justify-center w-10 h-10 rounded-full mr-3'
                                  style={{
                                    backgroundColor: subService.color + "20",
                                  }}>
                                  {subService.customIcon ? (
                                    <Image
                                      src={subService.customIcon}
                                      alt={subService.name}
                                      width={20}
                                      height={20}
                                    />
                                  ) : (
                                    subService.icon && (
                                      <subService.icon
                                        className='w-5 h-5'
                                        style={{ color: subService.color }}
                                      />
                                    )
                                  )}
                                </div>
                                <div>
                                  <span className='font-medium text-sm group-hover:text-[#F56E0F] dark:text-gray-200'>
                                    {subService.name}
                                  </span>
                                  <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                                    Boost your {subService.name.split(" ")[0]}{" "}
                                    presence
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={service.name}
                    href={service.href}
                    className={`${clashDisplay.className} flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group`}>
                    <span className='font-medium text-sm group-hover:text-[#F56E0F] dark:text-gray-200'>
                      {service.name}
                    </span>
                  </Link>
                )
              )}
            </div>
          </HoverCardContent>
        </HoverCard>
        <Link href='/our-work'>Our Work</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='tel:+254735101001'>+254 735101001</Link>
        <Link href='mailto:info@kulmi.digital'>info@kulmi.digital</Link>
        <div className='flex items-center space-x-2'>
          <Sun className='h-4 w-4' />
          {mounted && (
            <Switch
              checked={resolvedTheme === "dark"}
              onCheckedChange={handleThemeToggle}
              className='data-[state=checked]:bg-[#F56E0F]'
            />
          )}
          <Moon className='h-4 w-4' />
        </div>
      </div>

      {/* Hamburger Menu: Mobile View */}
      <div className='md:hidden'>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button>
              <Menu className='w-8 h-8 dark:text-white' />
            </button>
          </SheetTrigger>
          <SheetContent
            side='top'
            className='bg-white dark:bg-gray-900 px-6 py-4 border-b-[1px] border-[#F56E0F]'>
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
                className='text-lg font-bold text-gray-900 dark:text-gray-100 hover:text-[#F56E0F] dark:hover:text-[#FF7A1F] transition-colors'
                onClick={handleLinkClick}>
                Home
              </Link>
              <Link
                href='/about'
                className='text-lg font-bold text-gray-900 dark:text-gray-100 hover:text-[#F56E0F] dark:hover:text-[#FF7A1F] transition-colors'
                onClick={handleLinkClick}>
                About
              </Link>
              <div className='w-full'>
                <button
                  onClick={toggleServices}
                  className='text-lg font-bold flex items-center justify-between w-full py-2 text-gray-900 dark:text-gray-100'>
                  Services
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}>
                    <ChevronDown className='ml-1 h-4 w-4 dark:text-gray-100' />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}>
                      <div
                        className={`${clashDisplay.className} mt-2 space-y-2`}>
                        {mainServices.map((service) =>
                          service.subServices ? (
                            <div key={service.name} className='w-full'>
                              <button
                                onClick={toggleDigitalAdvertising}
                                className='flex items-center justify-between w-full py-2 pl-4 text-gray-900 dark:text-gray-100'>
                                <span>{service.name}</span>
                                <motion.div
                                  animate={{
                                    rotate: isDigitalAdvertisingOpen ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.3 }}>
                                  <ChevronDown className='ml-1 h-4 w-4 dark:text-gray-100' />
                                </motion.div>
                              </button>
                              <AnimatePresence>
                                {isDigitalAdvertisingOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      ease: "easeInOut",
                                    }}
                                    style={{ overflow: "hidden" }}>
                                    <div className='pl-8 space-y-2'>
                                      {service.subServices.map((subService) => (
                                        <Link
                                          key={subService.name}
                                          href={subService.href}
                                          className='flex items-center py-2 text-gray-900 dark:text-gray-100 hover:text-[#F56E0F] dark:hover:text-[#FF7A1F] transition-colors'
                                          onClick={handleLinkClick}>
                                          {subService.customIcon ? (
                                            <Image
                                              src={subService.customIcon}
                                              alt={subService.name}
                                              width={16}
                                              height={16}
                                              className='mr-2'
                                            />
                                          ) : (
                                            subService.icon && (
                                              <subService.icon
                                                className='w-4 h-4 mr-2'
                                                style={{
                                                  color: subService.color,
                                                }}
                                              />
                                            )
                                          )}
                                          <span>{subService.name}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <Link
                              key={service.name}
                              href={service.href}
                              className='block py-2 pl-4 text-gray-900 dark:text-gray-100 hover:text-[#F56E0F] dark:hover:text-[#FF7A1F] transition-colors'
                              onClick={handleLinkClick}>
                              {service.name}
                            </Link>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href='/our-work'
                className='text-lg font-bold text-gray-900 dark:text-gray-100 hover:text-[#F56E0F] dark:hover:text-[#FF7A1F] transition-colors'
                onClick={handleLinkClick}>
                Our Work
              </Link>
              <Link
                href='/contact'
                className='text-lg font-bold text-gray-900 dark:text-gray-100 hover:text-[#F56E0F] dark:hover:text-[#FF7A1F] transition-colors'
                onClick={handleLinkClick}>
                Contact
              </Link>
              <Link
                href='tel:+254735101001'
                className='text-lg font-bold text-gray-900 dark:text-gray-100 hover:text-[#F56E0F] dark:hover:text-[#FF7A1F] transition-colors'
                onClick={handleLinkClick}>
                +254 735101001
              </Link>
              <Link
                href='mailto:info@kulmi.digital'
                className='text-lg font-bold text-gray-900 dark:text-gray-100 hover:text-[#F56E0F] dark:hover:text-[#FF7A1F] transition-colors'
                onClick={handleLinkClick}>
                info@kulmi.digital
              </Link>
              <div className='flex items-center space-x-2 mt-4'>
                <Sun className='h-4 w-4 dark:text-white' />
                {mounted && (
                  <Switch
                    checked={resolvedTheme === "dark"}
                    onCheckedChange={handleThemeToggle}
                    className='data-[state=checked]:bg-[#F56E0F]'
                  />
                )}
                <Moon className='h-4 w-4 dark:text-white' />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
