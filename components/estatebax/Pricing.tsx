"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import SlideReveal from "@/components/ui/slidereveal";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Check } from "lucide-react";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
});

const clashDisplay = localFont({
  src: [
    {
      path: "../../app/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const plans = {
  monthly: [
    {
      name: "Basic Plan",
      description: "Small agencies or single agent",
      price: "69",
      period: "Month",
      features: [
        "Up to 3 Users",
        "Up to 100 properties / estates",
        "Unlimited contacts",
        "Unlimited landing pages",
        "EstateBax analytics for landing pages",
        "24/7 E-mail support",
      ],
    },
    {
      name: "Professional Plan",
      description: "Medium-sized agencies",
      price: "119",
      period: "Month",
      popular: true,
      features: [
        "Up to 10 Users",
        "Up to 300 properties / estates",
        "Unlimited contacts",
        "Unlimited landing pages",
        "Free website (custom subdomain)",
        "EstateBax analytics for landing pages",
        "EstateBax analytics for website (one)",
        "Collaboration with other agencies",
        "24/7 E-mail support",
        "24/7 Chat support",
      ],
    },
    {
      name: "Enterprise Plan",
      description: "Enterprise Businesses",
      price: "199",
      period: "Month",
      features: [
        "Up to 25 Users",
        "Up to 500 properties / estates",
        "Unlimited contacts",
        "Unlimited landing pages",
        "Free website (custom subdomain / agency domain)",
        "Custom landing page template",
        "EstateBax analytics for landing pages",
        "EstateBax analytics for websites (5)",
        "Collaboration with other agencies",
        "24/7 E-mail support",
        "24/7 Chat support",
        "24/7 Call support",
      ],
    },
  ],
  annual: [
    {
      name: "Basic Plan",
      description: "Small agencies or single agent",
      price: "660",
      period: "Year",
      features: [
        "Up to 3 Users",
        "Up to 100 properties / estates",
        "Unlimited contacts",
        "Unlimited landing pages",
        "EstateBax analytics for landing pages",
        "24/7 E-mail support",
      ],
    },
    {
      name: "Professional Plan",
      description: "Medium-sized agencies",
      price: "1140",
      period: "Year",
      popular: true,
      features: [
        "Up to 10 Users",
        "Up to 300 properties / estates",
        "Unlimited contacts",
        "Unlimited landing pages",
        "Free website (custom subdomain)",
        "EstateBax analytics for landing pages",
        "EstateBax analytics for website (one)",
        "Collaboration with other agencies",
        "24/7 E-mail support",
        "24/7 Chat support",
      ],
    },
    {
      name: "Enterprise Plan",
      description: "Enterprise Businesses",
      price: "1910",
      period: "Year",
      features: [
        "Up to 25 Users",
        "Up to 500 properties / estates",
        "Unlimited contacts",
        "Unlimited landing pages",
        "Free website (custom subdomain / agency domain)",
        "Custom landing page template",
        "EstateBax analytics for landing pages",
        "EstateBax analytics for websites (5)",
        "Collaboration with other agencies",
        "24/7 E-mail support",
        "24/7 Chat support",
        "24/7 Call support",
      ],
    },
  ],
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const currentPlans = isAnnual ? plans.annual : plans.monthly;

  return (
    <div
      className={`${clashDisplay.className} py-4 md:py-8 px-0 md:px-8 bg-gray-50 dark:bg-gray-900`}>
      <div className='w-[96%] md:container mx-auto'>
        <SlideReveal direction='up' duration={0.7}>
          <div className='text-center mb-8 sm:mb-12'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4'>
              Choose the plan that's right for you
            </h2>
            <p
              className={`${plusJakartaSans.className} text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6 sm:mb-8`}>
              Simple pricing. No hidden fees. No contract - cancel any time.
            </p>

            <div className='flex items-center justify-center gap-2 sm:gap-4'>
              <span
                className={`${
                  isAnnual
                    ? "text-gray-500 dark:text-gray-400"
                    : "text-gray-900 dark:text-gray-100"
                } text-sm sm:text-base`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className='data-[state=checked]:bg-[#F56E0F] bg-gray-200 dark:bg-gray-700 h-[30px] sm:h-[38px] w-[60px] sm:w-[74px] px-[2px]'
              />
              <span
                className={`${
                  isAnnual
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-500 dark:text-gray-400"
                } flex items-center gap-1 sm:gap-2 text-sm sm:text-base`}>
                Annual
                <Badge
                  variant='outline'
                  className='bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800 text-xs sm:text-sm'>
                  Save 20%
                </Badge>
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8'>
            {currentPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl sm:rounded-3xl bg-white dark:bg-gray-800 p-4 sm:p-8 shadow-lg border ${
                  plan.popular
                    ? "border-[#F56E0F]"
                    : "border-gray-100 dark:border-gray-700"
                } flex flex-col`}>
                {plan.popular && (
                  <div className='absolute -top-3 sm:-top-4 right-4 sm:right-8'>
                    <Badge className='bg-[#F56E0F] text-white text-xs sm:text-sm hover:bg-[#E55D00]'>
                      Popular
                    </Badge>
                  </div>
                )}
                <div className='flex-grow'>
                  <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2'>
                    {plan.name}
                  </h3>
                  <p
                    className={`${plusJakartaSans.className} text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 sm:mb-6`}>
                    {plan.description}
                  </p>
                  <div className='mb-4 sm:mb-6'>
                    <span className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100'>
                      ${plan.price}
                    </span>
                    <span className='text-gray-600 dark:text-gray-400 text-sm sm:text-base'>
                      /{plan.period}
                    </span>
                    <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1'>
                      VAT excluded
                    </p>
                  </div>
                  <ul className='space-y-3 sm:space-y-4 mb-6 sm:mb-8'>
                    {plan.features.map((feature, i) => (
                      <li key={i} className='flex items-start gap-2'>
                        <Check className='w-4 h-4 sm:w-5 sm:h-5 text-[#F56E0F] mt-0.5 flex-shrink-0' />
                        <span
                          className={`${plusJakartaSans.className} text-gray-600 dark:text-gray-300 text-sm sm:text-base`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href='https://estatebax.app/?ref=kulmidigital/register'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`block w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-full text-center transition-colors duration-300 mt-auto text-sm sm:text-base ${
                    plan.popular
                      ? "bg-[#F56E0F] text-white hover:bg-[#E55D00]"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </SlideReveal>
      </div>
    </div>
  );
};

export default Pricing;
