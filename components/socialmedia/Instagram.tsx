"use client";
import React from "react";
import SocialMediaLayout from "./SocialMediaLayout";
import {
  Instagram as InstagramIcon,
  Camera,
  Users,
  TrendingUp,
  Heart,
  ShoppingBag,
  MessageCircle,
  Zap,
  Target,
  Globe,
  Eye,
} from "lucide-react";

const Instagram = () => {
  const benefitsSection = (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto'>
      {/* Large card */}
      <div className='col-span-1 sm:col-span-2 row-span-2 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 sm:p-8 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <InstagramIcon className='w-16 h-16 text-purple-600 mb-6' />
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
            Instagram Marketing Experts
          </h2>
          <p className='text-gray-700 dark:text-gray-300 text-base sm:text-lg'>
            Our team of Instagram specialists will help you create engaging
            content, grow your following, and drive real business results
            through this powerful visual platform.
          </p>
        </div>
      </div>

      {/* Medium cards */}
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-pink-300/20 to-purple-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Camera className='w-12 h-12 text-pink-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Captivating Visual Content
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            We'll create stunning visuals that stop scrollers in their tracks
            and boost engagement with your brand.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-300/20 to-purple-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <Users className='w-12 h-12 text-blue-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Follower Growth Strategies
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            Implement proven tactics to grow your Instagram following
            organically and attract your target audience.
          </p>
        </div>
      </div>
      <div className='col-span-1 sm:col-span-2 lg:col-span-1 rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-orange-300/20 to-pink-500/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <div className='relative z-10'>
          <TrendingUp className='w-12 h-12 text-orange-500 mb-4' />
          <h3 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-clash-display'>
            Performance Analytics
          </h3>
          <p className='text-gray-700 dark:text-gray-300 text-sm'>
            Track your Instagram success with detailed analytics and insights to
            continually improve your strategy.
          </p>
        </div>
      </div>

      {/* Small cards */}
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-200/20 to-pink-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Heart className='w-12 h-12 text-red-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Engagement Boosting
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-blue-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <ShoppingBag className='w-12 h-12 text-green-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Shoppable Posts
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-orange-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <MessageCircle className='w-12 h-12 text-yellow-600 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Community Management
        </span>
      </div>
      <div className='rounded-3xl bg-white/50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center shadow-lg border border-white/60 dark:border-gray-700/60 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-300/20 to-pink-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
        <Zap className='w-12 h-12 text-purple-500 mb-2 relative z-10' />
        <span className='text-sm font-semibold text-gray-800 dark:text-gray-100 relative z-10 font-clash-display text-center'>
          Influencer Partnerships
        </span>
      </div>
    </div>
  );

  const whySection = (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Globe className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          Visual Storytelling Power
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          Instagram's image-centric platform allows you to tell your brand's
          story visually, creating deeper connections with your audience.
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Eye className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          High Engagement Rates
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          Instagram boasts some of the highest engagement rates among social
          platforms, giving your content more opportunities to resonate with
          users.
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl'>
        <Target className='w-12 h-12 text-[#F56E0F] mb-4' />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-clash-display'>
          E-commerce Integration
        </h3>
        <p className='text-gray-700 dark:text-gray-300'>
          With features like shoppable posts and the Instagram Shop, you can
          create a seamless shopping experience directly within the app.
        </p>
      </div>
    </div>
  );

  return (
    <SocialMediaLayout
      heroProps={{
        gradientFrom: "#833AB4",
        gradientTo: "#FD1D1D",
        title: "Elevate Your Instagram Game",
        description:
          "Create engaging content and grow your Instagram following with expert strategies.",
      }}
      benefitsSection={benefitsSection}
      whySection={whySection}
      platform='Instagram'
    />
  );
};

export default Instagram;
