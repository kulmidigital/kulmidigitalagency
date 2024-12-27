"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import SlideReveal from "@/components/ui/slidereveal";
import localFont from "next/font/local";
import { Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

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

const DigitalAdvertisingCard = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = React.useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  React.useEffect(() => {
    if (popoverRef.current) {
      const rect = popoverRef.current.getBoundingClientRect();
      setOrigin({ x: rect.left, y: rect.top });
    }
  }, [isOpen]);

  return (
    <SlideReveal direction='up' duration={0.7}>
      <div className='group relative p-6 h-[300px] rounded-2xl bg-gradient-to-br from-green-50/50 to-white dark:from-green-900/20 dark:to-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-1'>
        <div className='relative z-10 h-full flex flex-col'>
          <div className='flex-grow'>
            <Image
              src='/icons/rocket.svg'
              alt='Digital Advertising'
              width={60}
              height={60}
              className='sm:w-70 sm:h-70 dark:invert-[0.15] transition-transform duration-300 group-hover:scale-110'
            />
            <h3
              className={`${clashDisplay.className} text-[24px] sm:text-[26px] font-bold text-black dark:text-white mb-2`}>
              Digital Advertising (PPC & SEM)
            </h3>
            <p className='text-gray-600 dark:text-gray-300 text-[16px] sm:text-[18px] leading-relaxed'>
              Ads across platforms including Google Search Ads, YouTube,
              LinkedIn, META, and more to drive traffic and conversions.
            </p>
          </div>
          <div className='mt-auto'>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <div ref={popoverRef}>
                  <Badge
                    variant='outline'
                    className={`${clashDisplay.className} text-[12px] sm:text-[12px] w-[140px] 
                    bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 
                    dark:from-green-400/30 dark:via-emerald-400/30 dark:to-teal-400/30 
                    hover:from-green-400/30 hover:via-emerald-400/30 hover:to-teal-400/30
                    dark:hover:from-green-400/40 dark:hover:via-emerald-400/40 dark:hover:to-teal-400/40
                    cursor-pointer shadow-lg dark:text-white transition-all duration-300 
                    hover:scale-105 dark:hover:scale-105`}>
                    See digital services
                  </Badge>
                </div>
              </PopoverTrigger>
              <AnimatePresence>
                {isOpen && (
                  <PopoverContent
                    className='w-80 ml-4 md:ml-0 md:w-96 p-0 rounded-xl shadow-xl bg-gradient-to-br from-green-300 to-yellow-400 dark:from-green-400 dark:to-yellow-500'
                    forceMount>
                    <motion.div
                      initial={{
                        scale: 0,
                        opacity: 0,
                        x: origin.x,
                        y: origin.y,
                      }}
                      animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                      exit={{ scale: 0, opacity: 0, x: origin.x, y: origin.y }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      style={{ transformOrigin: "top left" }}>
                      <div className='grid grid-cols-1 gap-2 p-4 bg-white dark:bg-gray-900 rounded-xl'>
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className={`${clashDisplay.className} flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 hover:rounded-xl transition-colors duration-200 group`}>
                            <div
                              className='flex items-center justify-center w-10 h-10 rounded-full mr-3 transition-colors duration-200'
                              style={{
                                backgroundColor:
                                  service.color +
                                  (theme === "dark" ? "30" : "20"),
                              }}>
                              {service.customIcon ? (
                                <Image
                                  src={service.customIcon}
                                  alt={service.name}
                                  width={20}
                                  height={20}
                                  className='transition-colors duration-200 dark:invert-[0.15]'
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
                              <span className='font-medium text-sm group-hover:text-[#F56E0F] dark:text-white dark:group-hover:text-[#FF7A1F] transition-colors duration-200'>
                                {service.name}
                              </span>
                              <p className='text-xs text-gray-700 dark:text-gray-300 mt-1'>
                                Boost your {service.name.split(" ")[0]} presence
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </PopoverContent>
                )}
              </AnimatePresence>
            </Popover>
          </div>
        </div>
        <div className='absolute inset-0 bg-gradient-to-br from-green-100/0 to-green-100/0 dark:from-green-500/0 dark:to-green-500/0 rounded-2xl transition-all duration-300 group-hover:from-green-100/10 group-hover:to-green-100/30 dark:group-hover:from-green-500/5 dark:group-hover:to-green-500/10'></div>
      </div>
    </SlideReveal>
  );
};

export default DigitalAdvertisingCard;
