"use client";
import React from 'react'
import SocialMediaLayout from "./SocialMediaLayout";
import {
  Facebook as FacebookIcon,
  Zap,
  Target,
  Globe,
  Eye,
  BarChart,
  MessageCircle,
  TrendingUp,
  UserPlus,
  Rocket,
  Award,
} from "lucide-react";

const Facebook = () => {
  const benefitsSection = (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto'>
      {/* Large card */}
      <div className='col-span-1 sm:col-span-2 row-span-2 rounded-3xl bg-white/50 p-6 sm:p-8 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <FacebookIcon className='w-16 h-16 text-blue-600 mb-6' />
          <h2 className='text-3xl font-bold text-gray-800 mb-4 font-clash-display'>
            Partner with Facebook Specialists
          </h2>
          <p className='text-gray-700 text-lg'>
            Our Facebook experts are now your Facebook experts. As a full extension of your team, we'll work together to crush your Ecommerce business goals.
          </p>
        </div>
      </div>

      {/* Medium cards */}
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-300/20 to-indigo-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Zap className='w-12 h-12 text-blue-500 mb-4' />
          <h3 className='text-xl font-bold text-gray-800 mb-2 font-clash-display'>
            Leave the Competition Behind
          </h3>
          <p className='text-gray-700 text-sm'>
            While competitors are still scratching their heads about Facebook ad campaigns, you'll be busy knocking your objectives out of the park.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <MessageCircle className='w-12 h-12 text-green-500 mb-4' />
          <h3 className='text-xl font-bold text-gray-800 mb-2 font-clash-display'>
            Tailor-Made Facebook Content
          </h3>
          <p className='text-gray-700 text-sm'>
            We'll provide your brand with a stream of fresh content, designed specifically to engage and convert Facebook audiences.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-300/20 to-blue-500/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <BarChart className='w-12 h-12 text-purple-500 mb-4' />
          <h3 className='text-xl font-bold text-gray-800 mb-2 font-clash-display'>
            Effective Marketing - Zero Stress
          </h3>
          <p className='text-gray-700 text-sm'>
            We'll take care of the heavy lifting, managing every aspect of your Facebook advertising. All you need to do is enjoy the results.
          </p>
        </div>
      </div>

      {/* Small cards */}
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-pink-200/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <UserPlus className='w-12 h-12 text-pink-600 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Connect with New Audiences
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Rocket className='w-12 h-12 text-yellow-600 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Unlock New Advert Placements
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Award className='w-12 h-12 text-green-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Tap into Our Facebook Expertise
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <TrendingUp className='w-12 h-12 text-red-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Accelerate Your Brand Growth
        </span>
      </div>
    </div>
  );

  const whySection = (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
      <div className='bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Globe className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-2xl font-bold text-gray-800 mb-4 font-clash-display'>
          Massive User Base
        </h3>
        <p className='text-gray-700'>
          With billions of active users, Facebook offers unparalleled reach for your brand. Connect with potential customers across demographics and regions.
        </p>
      </div>
      <div className='bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Eye className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-2xl font-bold text-gray-800 mb-4 font-clash-display'>
          Advanced Targeting
        </h3>
        <p className='text-gray-700'>
          Facebook's sophisticated targeting options allow you to reach your ideal audience based on demographics, interests, behaviors, and more.
        </p>
      </div>
      <div className='bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Target className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-2xl font-bold text-gray-800 mb-4 font-clash-display'>
          Versatile Ad Formats
        </h3>
        <p className='text-gray-700'>
          From image and video ads to carousel and instant experiences, Facebook offers a wide range of ad formats to showcase your products or services effectively.
        </p>
      </div>
    </div>
  );

  return (
    <SocialMediaLayout
      heroProps={{
        gradientFrom: "#1877F2",
        gradientTo: "#3b5998",
        title: "Elevate Your Facebook Marketing",
        description:
          "Harness the power of the world's largest social network to grow your business.",
      }}
      benefitsSection={benefitsSection}
      whySection={whySection}
      platform="Facebook"
    />
  );
};

export default Facebook;
