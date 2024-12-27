"use client";
import React from "react";
import SocialMediaLayout from "./SocialMediaLayout";
import {
  Search,
  Target,
  BarChart,
  Globe,
  Eye,
  Zap,
  ShoppingBag,
  Smartphone,
  Map,
  Youtube,
  Mail,
} from "lucide-react";

const Google = () => {
  const benefitsSection = (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto'>
      {/* Large card */}
      <div
        className='col-span-1 sm:col-span-2 row-span-2 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 sm:p-8 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'
        role='article'
        aria-labelledby='section-title'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 to-red-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Search className='w-16 h-16 text-blue-600 mb-6' />
          <h2
            id='section-title'
            className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
            Google Ads Specialists
          </h2>
          <p className='text-gray-700 dark:text-gray-300 text-base sm:text-lg'>
            Our Google Ads experts will optimize your campaigns across Search,
            Display, Video, and more to maximize your ROI and reach your target
            audience effectively.
          </p>
        </div>
      </div>

      {/* Medium cards */}
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Target className='w-12 h-12 text-green-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Precision Targeting
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            Reach your ideal customers with laser-focused targeting options
            across demographics, interests, and behaviors.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-red-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <BarChart className='w-12 h-12 text-yellow-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Data-Driven Optimization
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            Continuously improve your campaigns with in-depth analytics and
            performance insights.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-300/20 to-blue-500/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Zap className='w-12 h-12 text-purple-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Rapid Results
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            See immediate impact with strategically placed ads that appear when
            your customers are searching for your products or services.
          </p>
        </div>
      </div>

      {/* Small cards */}
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-200/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <ShoppingBag className='w-12 h-12 text-red-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Shopping Campaigns
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Smartphone className='w-12 h-12 text-green-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Mobile Optimization
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-orange-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Map className='w-12 h-12 text-yellow-600 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Local SEO
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Youtube className='w-12 h-12 text-red-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          YouTube Advertising
        </span>
      </div>
    </div>
  );

  const whySection = (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Globe className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          Unmatched Reach
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          Google's vast network allows you to reach potential customers across
          search, display, video, and more, providing unparalleled visibility
          for your brand.
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Eye className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          Intent-Based Marketing
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          Google Ads allows you to capture high-intent customers actively
          searching for products or services like yours, leading to higher
          conversion rates.
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Mail className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          Versatile Ad Formats
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          From text ads to responsive display ads and video campaigns, Google
          offers a wide range of ad formats to suit your marketing objectives
          and creative assets.
        </p>
      </div>
    </div>
  );

  return (
    <SocialMediaLayout
      heroProps={{
        gradientFrom: "#4285F4",
        gradientTo: "#34A853",
        title: "Maximize Your Google Ads Impact",
        description:
          "Harness the power of intent-based marketing to reach customers when it matters most.",
      }}
      benefitsSection={benefitsSection}
      whySection={whySection}
      platform='Google Ads'
    />
  );
};

export default Google;
