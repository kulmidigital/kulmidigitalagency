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

  React.useEffect(() => {
    if (popoverRef.current) {
      const rect = popoverRef.current.getBoundingClientRect();
      setOrigin({ x: rect.left, y: rect.top });
    }
  }, [isOpen]);

  return (
    <SlideReveal direction='up' duration={0.7}>
      <div className='flex flex-col text-left p-4 sm:p-6 space-y-4'>
        <div className='text-[#F56E0F] mb-4'>
          <Image
            src='/icons/rocket.svg'
            alt='Digital Advertising'
            width={60}
            height={60}
            className='sm:w-70 sm:h-70'
          />
        </div>
        <h3
          className={`${clashDisplay.className} text-[24px] sm:text-[26px] font-bold text-black mb-2`}>
          Digital Advertising (PPC & SEM)
        </h3>
        <p className='text-gray-600 text-[16px] sm:text-[18px] leading-relaxed'>
          Ads across platforms including Google Search Ads, YouTube, LinkedIn,
          META, and more to drive traffic and conversions.
        </p>
        <div className="flex justify-start">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <div ref={popoverRef}>
                <Badge
                  variant='outline'
                  className={`${clashDisplay.className} text-[12px] sm:text-[12px] w-[140px] bg-gradient-to-br from-green-300/20 to-yellow-400/20 cursor-pointer hover:bg-gray-100 shadow-lg`}>
                  See digital services
                </Badge>
              </div>
            </PopoverTrigger>
            <AnimatePresence>
              {isOpen && (
                <PopoverContent className='w-80 ml-4 md:ml-0 md:w-96 p-0 rounded-xl shadow-xl bg-gradient-to-br from-green-300 to-yellow-400' forceMount>
                  <motion.div
                    initial={{ scale: 0, opacity: 0, x: origin.x, y: origin.y }}
                    animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    exit={{ scale: 0, opacity: 0, x: origin.x, y: origin.y }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ transformOrigin: 'top left' }}
                  >
                    <div className='grid grid-cols-1 gap-2 p-4'>
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className={`${clashDisplay.className} flex items-center p-2 rounded-lg hover:bg-gray-50 hover:rounded-xl transition-colors duration-200 group`}>
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
                            <p className='text-xs text-gray-700 mt-1'>
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
    </SlideReveal>
  );
};

export default DigitalAdvertisingCard;
