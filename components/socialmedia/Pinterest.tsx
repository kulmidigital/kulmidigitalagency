"use client";
import React from 'react'
import SocialMediaLayout from "./SocialMediaLayout";
import {
  Image,
  Search,
  ShoppingBag,
  Users,
  TrendingUp,
  Target,
  Globe,
  Eye,
  Zap,
  Bookmark,
  Layout,
} from "lucide-react";

const Pinterest = () => {
  const benefitsSection = (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto'>
      {/* Large card */}
      <div className='col-span-1 sm:col-span-2 row-span-2 rounded-3xl bg-white/50 p-6 sm:p-8 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-400/20 to-pink-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Image className='w-16 h-16 text-red-600 mb-6' />
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-clash-display'>
            Pinterest Marketing Experts
          </h2>
          <p className='text-gray-700 text-base sm:text-lg'>
            Our Pinterest specialists will help you create visually stunning content, increase your reach, and drive traffic and sales through this powerful discovery platform.
          </p>
        </div>
      </div>

      {/* Medium cards */}
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-300/20 to-pink-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Search className='w-12 h-12 text-red-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2 font-clash-display'>
            Search Optimization
          </h3>
          <p className='text-gray-700 text-sm'>
            Optimize your Pins to appear in relevant searches and increase your visibility on the platform.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-orange-300/20 to-red-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <ShoppingBag className='w-12 h-12 text-orange-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2 font-clash-display'>
            Product Pins
          </h3>
          <p className='text-gray-700 text-sm'>
            Create Product Pins to showcase your items and drive traffic directly to your product pages.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-pink-300/20 to-red-500/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Users className='w-12 h-12 text-pink-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2 font-clash-display'>
            Audience Growth
          </h3>
          <p className='text-gray-700 text-sm'>
            Implement strategies to grow your Pinterest following and expand your reach on the platform.
          </p>
        </div>
      </div>

      {/* Small cards */}
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-200/20 to-pink-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <TrendingUp className='w-12 h-12 text-red-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Trend Leveraging
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-red-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Zap className='w-12 h-12 text-yellow-600 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Promoted Pins
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-red-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Bookmark className='w-12 h-12 text-green-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Rich Pins
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-300/20 to-red-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Layout className='w-12 h-12 text-blue-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 relative z-10 font-clash-display text-center'>
          Board Optimization
        </span>
      </div>
    </div>
  );

  const whySection = (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
      <div className='bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Globe className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-clash-display'>
          Visual Discovery Platform
        </h3>
        <p className='text-gray-700'>
          Pinterest is a unique platform where users actively seek inspiration and ideas, making it perfect for showcasing your products or services visually.
        </p>
      </div>
      <div className='bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Eye className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-clash-display'>
          High Purchase Intent
        </h3>
        <p className='text-gray-700'>
          Pinterest users often have high purchase intent, with many using the platform to plan purchases and find new products.
        </p>
      </div>
      <div className='bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Target className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-clash-display'>
          Long-Lasting Content
        </h3>
        <p className='text-gray-700'>
          Unlike other social platforms, Pins have a long lifespan and can continue to drive traffic and engagement long after they're first posted.
        </p>
      </div>
    </div>
  );

  return (
    <SocialMediaLayout
      heroProps={{
        gradientFrom: "#E60023",
        gradientTo: "#BD081C",
        title: "Elevate Your Pinterest Marketing",
        description: "Harness the power of visual discovery to inspire and convert your audience.",
      }}
      benefitsSection={benefitsSection}
      whySection={whySection}
      platform="Pinterest"
    />
  );
};

export default Pinterest;
