"use client";
import React from "react";
import SocialMediaLayout from "./SocialMediaLayout";
import {
  Video,
  Users,
  Zap,
  TestTube,
  Film,
  Brain,
  Target,
  TrendingUp,
  Globe,
  Eye,
  Target as TargetIcon,
} from "lucide-react";

const Youtube = () => {
  const benefitsSection = (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto'>
      {/* Large card */}
      <div className='col-span-1 sm:col-span-2 lg:row-span-2 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 sm:p-8 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-400/20 to-pink-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Video className='w-12 h-12 sm:w-16 sm:h-16 text-red-600 mb-4 sm:mb-6' />
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 sm:mb-4 font-clash-display'>
            Expert Video Advert Specialists
          </h2>
          <p className='text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300'>
            Our team of experts is dedicated to staying ahead of the curve in
            the dynamic YouTube environment. We use the latest strategies and
            tools to help you stand out in the competitive YouTube landscape.
          </p>
        </div>
      </div>

      {/* Medium cards */}
      <div className='col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-red-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Users className='w-10 h-10 sm:w-12 sm:h-12 text-red-500 mb-3 sm:mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Expanded Audience Reach
          </h3>
          <p className='text-xs sm:text-sm text-gray-700 dark:text-gray-300'>
            Engage your target audience and reach profitable new customers at
            scale on YouTube.
          </p>
        </div>
      </div>
      <div className='col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-orange-300/20 to-red-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Zap className='w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-3 sm:mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Competitive Edge
          </h3>
          <p className='text-xs sm:text-sm text-gray-700 dark:text-gray-300'>
            Leverage highly efficient YouTube marketing tactics to stay ahead of
            competitors.
          </p>
        </div>
      </div>
      <div className='col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-300/20 to-red-500/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <TestTube className='w-10 h-10 sm:w-12 sm:h-12 text-purple-500 mb-3 sm:mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Continuous Optimization
          </h3>
          <p className='text-xs sm:text-sm text-gray-700 dark:text-gray-300'>
            We experiment with various YouTube video ads and optimize rapidly
            for best results.
          </p>
        </div>
      </div>

      {/* Small cards */}
      <div className='col-span-1 sm:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-4 sm:p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-pink-200/20 to-red-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Film className='w-8 h-8 sm:w-12 sm:h-12 text-pink-600 mb-2 relative z-10' />
        <span className='text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Bespoke Content Creation
        </span>
      </div>
      <div className='col-span-1 sm:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-4 sm:p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-300/20 to-red-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Brain className='w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mb-2 relative z-10' />
        <span className='text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Expert Industry Insights
        </span>
      </div>
      <div className='col-span-1 sm:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-4 sm:p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-red-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Target className='w-8 h-8 sm:w-12 sm:h-12 text-green-500 mb-2 relative z-10' />
        <span className='text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Goal-Oriented Strategies
        </span>
      </div>
      <div className='col-span-1 sm:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-4 sm:p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-300/20 to-orange-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <TrendingUp className='w-8 h-8 sm:w-12 sm:h-12 text-red-500 mb-2 relative z-10' />
        <span className='text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Performance Tracking
        </span>
      </div>
    </div>
  );

  const whySection = (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Globe className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
        <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 sm:mb-4 font-clash-display'>
          Achieve Mind-Blowing Reach
        </h3>
        <p className='text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300'>
          YouTube's billions of monthly users provide unparalleled reach for
          your digital marketing. Tap into new audience segments, boost brand
          awareness with engaging content, and drive cost-effective conversions
          at scale.
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Eye className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
        <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 sm:mb-4 font-clash-display'>
          Captivate Active Audiences
        </h3>
        <p className='text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300'>
          YouTube users actively consume and search for new content, creating a
          receptive environment for your message. Whether through paid
          advertising or organic content, you'll reach audiences primed to
          engage with your brand.
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <TargetIcon className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
        <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 sm:mb-4 font-clash-display'>
          Precision-Targeted Campaigns
        </h3>
        <p className='text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300'>
          Leverage YouTube's extensive audience data for game-changing
          marketing. Utilize granular targeting tactics including demographic,
          in-market, affinity, and first-party data strategies to supercharge
          your campaign performance.
        </p>
      </div>
    </div>
  );

  return (
    <SocialMediaLayout
      heroProps={{
        gradientFrom: "#FF0000",
        gradientTo: "#CC0000",
        title: "Boost Your YouTube Presence",
        description:
          "Get expert strategies to grow your channel and engage your viewers.",
      }}
      benefitsSection={benefitsSection}
      whySection={whySection}
      platform='YouTube'
    />
  );
};

export default Youtube;
