"use client";
import React from "react";
import SocialMediaLayout from "./SocialMediaLayout";
import {
  Music,
  TrendingUp,
  Users,
  Video,
  Zap,
  Target,
  Globe,
  Eye,
  Hash,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

const Tiktok = () => {
  const benefitsSection = (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto'>
      {/* Large card */}
      <div className='col-span-1 sm:col-span-2 row-span-2 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 sm:p-8 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-pink-400/20 to-blue-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Music className='w-16 h-16 text-pink-600 mb-6' />
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
            TikTok Marketing Experts
          </h2>
          <p className='text-gray-700 dark:text-gray-300 text-base sm:text-lg'>
            Our TikTok specialists will help you create viral-worthy content,
            engage with trends, and reach a massive, young audience through this
            rapidly growing platform.
          </p>
        </div>
      </div>

      {/* Medium cards */}
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-300/20 to-pink-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <TrendingUp className='w-12 h-12 text-blue-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Trend Leveraging
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            Stay ahead of the curve by tapping into viral trends and challenges
            to boost your brand's visibility.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Users className='w-12 h-12 text-green-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Gen Z Audience Targeting
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            Connect with the coveted younger demographic where they spend most
            of their digital time.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-300/20 to-pink-500/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Video className='w-12 h-12 text-purple-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Engaging Video Content
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            Create short, captivating videos that resonate with TikTok's unique
            audience and format.
          </p>
        </div>
      </div>

      {/* Small cards */}
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-200/20 to-pink-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Zap className='w-12 h-12 text-red-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Rapid Growth Strategies
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-orange-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Hash className='w-12 h-12 text-yellow-600 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Hashtag Optimization
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Sparkles className='w-12 h-12 text-green-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Effect Campaigns
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-300/20 to-pink-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <ShoppingBag className='w-12 h-12 text-purple-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          TikTok Shop Integration
        </span>
      </div>
    </div>
  );

  const whySection = (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Globe className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          Explosive Growth Platform
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          TikTok's rapid rise offers a unique opportunity to reach a vast,
          engaged audience and establish your brand early on this booming
          platform.
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Eye className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          Unparalleled Engagement
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          TikTok's algorithm and user behavior lead to some of the highest
          engagement rates across all social platforms, giving your content more
          chances to go viral.
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Target className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          Creative Ad Formats
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          From in-feed ads to branded effects and hashtag challenges, TikTok
          offers innovative advertising options that feel native to the platform
          and resonate with users.
        </p>
      </div>
    </div>
  );

  return (
    <SocialMediaLayout
      heroProps={{
        gradientFrom: "#FF0050",
        gradientTo: "#00F2EA",
        title: "Amplify Your TikTok Presence",
        description:
          "Harness the power of short-form video to reach and engage a massive, young audience.",
      }}
      benefitsSection={benefitsSection}
      whySection={whySection}
      platform='TikTok'
    />
  );
};

export default Tiktok;
