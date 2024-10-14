'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { ScrambleText } from "@/components/ui/ScrambleText";
import SlideReveal from "@/components/ui/slidereveal";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plus-jakarta" });

const clashDisplay = localFont({
  src: [
    { path: "../app/fonts/ClashDisplay-Medium.woff", weight: "100", style: "normal" },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const packages = [
  {
    name: "Silver",
    price: "$650",
    features: [
      "Go live time: 1 - 2 weeks",
      "Theme-based design with minimal customization",
      "Up to 5 pages",
      "Privacy Policy",
      "1 lead capture form",
      "14-day warranty after deployment",
      "WordPress 6.6.2 (Latest Version)",
      "Banner slider on the homepage",
      "Blog functionality",
      "SEO-friendly URLs, Google Sitemap, and Meta tag management",
      "Google Analytics and Tag Manager integration",
      "Social Media Sharing integration",
      "Cross-browser compatibility",
      "Source code ownership",
    ],
  },
  {
    name: "Gold",
    price: "$1250",
    features: [
      "Go live time: 2 - 3 weeks",
      "Custom design with multiple layout options",
      "Up to 15 pages",
      "Privacy Policy, Terms & Conditions",
      "1 lead capture form",
      "30-day warranty after deployment",
      "WordPress 6.6.2 (Latest Version)",
      "Banner slider on the homepage",
      "Blog functionality",
      "SEO-friendly URLs, Google Sitemap, and Meta tag management",
      "Google Analytics and Tag Manager integration",
      "Social Media Sharing integration",
      "Cross-browser compatibility",
      "Source code ownership",
    ],
  },
  {
    name: "Platinum",
    price: "$2500",
    features: [
      "Go live time: 3 - 6 weeks",
      "Extensive research-based custom design",
      "Up to 30 pages",
      "Privacy Policy, Terms & Conditions, Return and Refund Policy",
      "3 lead capture forms",
      "1 year free hosting (for new websites)",
      "60-day warranty after deployment",
      "WordPress 6.6.2 (Latest Version)",
      "Banner slider on the homepage",
      "Blog functionality",
      "SEO-friendly URLs, Google Sitemap, and Meta tag management",
      "Google Analytics and Tag Manager integration",
      "Social Media Sharing integration",
      "Cross-browser compatibility",
      "Source code ownership",
    ],
  },
];


const WordpressRates: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className={"min-h-screen p-4 sm:p-8"}>
      <h1
        className={`${clashDisplay.className} text-3xl sm:text-4xl text-center mb-8 sm:mb-12`}>
        WordPress Website Development Packages
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
        {packages.map((pkg, index) => (
          <SlideReveal 
            key={pkg.name} 
            direction="up"
            delay={0.5 * index}
            className="w-full h-full"
          >
            <Card 
              className='text-[#F56E0F] border rounded-[20px] shadow-md hover:shadow-2xl transition-shadow duration-300 h-full'
              onMouseEnter={() => setHoveredCard(pkg.name)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader>
                <CardTitle className={`${clashDisplay.className} text-xl sm:text-2xl font-clash-display`}>
                  {pkg.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrambleText
                  text={pkg.price}
                  className={`${clashDisplay.className} text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 inline-block`}
                  isHovered={hoveredCard === pkg.name}
                />
                <ul className='space-y-2'>
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-start'>
                      <Check className='mr-2 h-5 w-5 text-[#F56E0F] flex-shrink-0 mt-1' />
                      <span className={`${clashDisplay.className} text-sm text-black sm:text-base`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </SlideReveal>
        ))}
      </div>
    </div>
  );
};

export default WordpressRates;
