"use client";
import React from 'react'
import SocialMediaLayout from "./SocialMediaLayout";
import {
  Twitter as TwitterIcon,
  MessageCircle,
  TrendingUp,
  Users,
  Zap,
  Target,
  Globe,
  Eye,
  Hash,
  BarChart,
  Bell,
} from "lucide-react";

const X = () => {
  const benefitsSection = (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto'>
      {/* Large card */}
      <div className='col-span-1 sm:col-span-2 row-span-2 rounded-3xl bg-white/50 p-6 sm:p-8 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <TwitterIcon className='w-16 h-16 text-blue-600 mb-6' />
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-clash-display'>
            Twitter Marketing Experts
          </h2>
          <p className='text-gray-700 text-base sm:text-lg'>
            Our Twitter specialists will help you create engaging content, grow your following, and leverage real-time conversations to boost your brand's presence.
          </p>
        </div>
      </div>

      {/* Medium cards */}
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <MessageCircle className='w-12 h-12 text-blue-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2 font-clash-display'>
            Engaging Content Creation
          </h3>
          <p className='text-gray-700 text-sm'>
            Craft compelling tweets that resonate with your audience and encourage interaction.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <TrendingUp className='w-12 h-12 text-green-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2 font-clash-display'>
            Trend Leveraging
          </h3>
          <p className='text-gray-700 text-sm'>
            Stay on top of trending topics and hashtags to increase your visibility and relevance.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-300/20 to-blue-500/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Users className='w-12 h-12 text-purple-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2 font-clash-display'>
            Audience Growth
          </h3>
          <p className='text-gray-700 text-sm'>
            Implement strategies to grow your Twitter following and expand your reach on the platform.
          </p>
        </div>
      </div>

      {/* Small cards */}
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-200/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Zap className='w-12 h-12 text-red-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Twitter Ads
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Hash className='w-12 h-12 text-yellow-600 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Hashtag Strategies
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <BarChart className='w-12 h-12 text-green-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Analytics & Reporting
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Bell className='w-12 h-12 text-purple-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Social Listening
        </span>
      </div>
    </div>
  );

  const whySection = (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
      <div className='bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Globe className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-clash-display'>
          Real-Time Engagement
        </h3>
        <p className='text-gray-700'>
          Twitter's fast-paced nature allows for real-time engagement with your audience, perfect for timely updates and customer service.
        </p>
      </div>
      <div className='bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Eye className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-clash-display'>
          Brand Visibility
        </h3>
        <p className='text-gray-700'>
          Twitter's public nature and retweet feature can help your content go viral and increase your brand's visibility exponentially.
        </p>
      </div>
      <div className='bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Target className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-clash-display'>
          Targeted Advertising
        </h3>
        <p className='text-gray-700'>
          Twitter's advertising platform offers precise targeting options, allowing you to reach your ideal audience based on interests, behaviors, and more.
        </p>
      </div>
    </div>
  );

  return (
    <SocialMediaLayout
      heroProps={{
        gradientFrom: "#000000",
        gradientTo: "#1A1A1A",
        title: "Amplify Your X Presence",
        description:
          "Engage in real-time conversations and boost your brand's visibility on this dynamic platform.",
      }}
      benefitsSection={benefitsSection}
      whySection={whySection}
      platform='X'
    />
  );
};

export default X;
