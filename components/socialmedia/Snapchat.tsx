"use client";
import React from "react";
import SocialMediaLayout from "./SocialMediaLayout";
import {
  Camera,
  Users,
  Zap,
  Target,
  Globe,
  Eye,
  Clock,
  Smartphone,
  Sparkles,
  MapPin,
  Filter,
} from "lucide-react";

const Snapchat = () => {
  const benefitsSection = (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto'>
      {/* Large card */}
      <div className='col-span-1 sm:col-span-2 row-span-2 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 sm:p-8 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-yellow-700/30 group-hover:opacity-40 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Camera className='w-16 h-16 text-yellow-700 mb-6' />
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
            Snapchat Marketing Experts
          </h2>
          <p className='text-gray-700 dark:text-gray-300 text-base sm:text-lg'>
            Our Snapchat specialists will help you create engaging, ephemeral
            content that resonates with younger audiences and drives real-time
            engagement.
          </p>
        </div>
      </div>

      {/* Medium cards */}
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 group-hover:opacity-40 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Users className='w-12 h-12 text-yellow-600 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Youth Audience Targeting
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            Reach and engage with the coveted younger demographic where they
            spend their digital time.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-yellow-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Zap className='w-12 h-12 text-green-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Real-Time Engagement
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            Leverage Snapchat's instant, ephemeral nature to create urgency and
            boost engagement.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-300/20 to-yellow-500/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Target className='w-12 h-12 text-blue-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Precision Ad Targeting
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            Utilize Snapchat's advanced targeting options to reach your ideal
            audience effectively.
          </p>
        </div>
      </div>

      {/* Small cards */}
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-200/30 to-yellow-500/30 group-hover:opacity-40 transition-opacity duration-300'></div>
        <Clock className='w-12 h-12 text-purple-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Time-Sensitive Offers
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-300/20 to-yellow-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Smartphone className='w-12 h-12 text-red-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Mobile-First Strategies
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-pink-300/20 to-yellow-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Sparkles className='w-12 h-12 text-pink-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          AR Lens Campaigns
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-yellow-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <MapPin className='w-12 h-12 text-green-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Geofilter Advertising
        </span>
      </div>
    </div>
  );

  const whySection = (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Globe className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          Young, Engaged Audience
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          Snapchat boasts a large, highly engaged user base of younger
          consumers, perfect for brands looking to connect with Gen Z and
          Millennials.
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Eye className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          Innovative Ad Formats
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          From AR lenses to vertical video ads, Snapchat offers unique and
          interactive advertising formats that capture users' attention.
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Filter className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          Brand Authenticity
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          Snapchat's casual, in-the-moment nature allows brands to showcase
          their authentic personality and connect with users on a more personal
          level.
        </p>
      </div>
    </div>
  );

  return (
    <SocialMediaLayout
      heroProps={{
        gradientFrom: "#F7B731",
        gradientTo: "#FFA000",
        title: "Snap Up Your Snapchat Marketing",
        description:
          "Engage the younger demographic with ephemeral, interactive content that drives results.",
      }}
      benefitsSection={benefitsSection}
      whySection={whySection}
      platform='Snapchat'
    />
  );
};

export default Snapchat;
