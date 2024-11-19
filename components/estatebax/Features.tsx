import React from 'react';
import SlideReveal from "@/components/ui/slidereveal";
import { Badge } from "@/components/ui/badge";
import localFont from 'next/font/local';
import { Plus_Jakarta_Sans } from "next/font/google";
import { 
  Database, 
  Map, 
  Share2, 
  Layout, 
  Globe, 
  Users, 
  Target, 
  Mail, 
  UserPlus,
  ClipboardList,
  Shield,
  BarChart2,
  FileText,
  Calendar,
  LineChart
} from 'lucide-react';
import Link from 'next/link';

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

const Features = () => {
  return (
    <div className={`${clashDisplay.className} py-4 md:py-8 px-0 md:px-8`} id='features'>
      <div className='w-[96%] md:container mx-auto'>
        {/* Real Estate Info Section */}
        <SlideReveal direction='up' duration={0.7}>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8'>
            REAL ESTATE INFO AND MARKETING
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 sm:mb-20'>
            {/* Large Feature Card */}
            <div className='lg:col-span-2 row-span-2 rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-8 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <Database className='w-12 h-12 sm:w-16 sm:h-16 text-[#F56E0F] mb-4 sm:mb-6' />
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4'>
                  Your Database for Real Estate
                </h2>
                <p className={`${plusJakartaSans.className} text-gray-700 text-base sm:text-lg`}>
                  Store and organize all data about your properties in an easy
                  and convenient way: basic information, photos, location, owner
                  data, and much more. Export any type of property listing
                  (using filters) as a catalog-like PDF.
                </p>
              </div>
            </div>

            {/* Medium Feature Cards */}
            <div className='rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-300/20 to-orange-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <Map className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
                <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2'>
                  Map Visualization
                </h3>
                <p className={`${plusJakartaSans.className} text-gray-700 text-sm sm:text-base`}>
                  Open the map view to visualize all your properties with basic
                  filters. Easily navigate to map markers to access more details
                  about each property.
                </p>
              </div>
            </div>

            <div className='rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-300/20 to-orange-400/20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <Share2 className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
                <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2'>
                  Property Sharing
                </h3>
                <p className={`${plusJakartaSans.className} text-gray-700 text-sm sm:text-base`}>
                  Expand reach with other agencies - easily share any of your
                  properties with other agencies using EstateBax™ to expedite
                  your sales
                </p>
              </div>
            </div>
          </div>
        </SlideReveal>

        {/* Free Website Section */}
        <SlideReveal direction='up' duration={0.7}>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8'>
            FREE WEBSITE
          </h2>

          <div className='rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-8 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group mb-12 sm:mb-20'>
            <div className='absolute inset-0 bg-gradient-to-br from-purple-400/20 to-orange-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <Globe className='w-12 h-12 sm:w-16 sm:h-16 text-[#F56E0F] mb-4 sm:mb-6' />
              <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4'>
                Fully Featured Website
              </h2>
              <p className={`${plusJakartaSans.className} text-gray-700 text-base sm:text-lg`}>
                A free, fully featured website for your agency, with no
                technical knowledge needed Clients can get a free, fully
                featured website with advanced search and a contact form for
                each property on a custom subdomain or domain, with full
                customization options. The website displays all properties,
                allowing users to hide specific listings or feature selected
                ones. Clients can also configure colors, images, and text, and
                choose whether to display team members on the site based on
                their preferences.
              </p>
            </div>
          </div>
        </SlideReveal>

        {/* Customers and Communication Section */}
        <SlideReveal direction='up' duration={0.7}>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8'>
            CUSTOMERS AND COMMUNICATION
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 sm:mb-20'>
            {/* Unified Contacts Hub */}
            <div className='rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <Users className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
                <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2'>
                  Unified Contacts Hub
                </h3>
                <p className={`${plusJakartaSans.className} text-gray-700 text-sm sm:text-base`}>
                  Keep all your contacts organized and just a click away. Easily contact them through WhatsApp, Viber, or Telegram. Automate a comprehensive timeline for your contact, including all interactions, tasks, and related opportunities.
                </p>
              </div>
            </div>

            {/* Creating Opportunities */}
            <div className='rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <Target className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
                <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2'>
                  Creating Opportunities
                </h3>
                <p className={`${plusJakartaSans.className} text-gray-700 text-sm sm:text-base`}>
                  Effortlessly match your properties with potential customers and conveniently track all related events in an automated timeline. Each task completion related to it will trigger the timeline item creation.
                </p>
              </div>
            </div>

            {/* Email Composer */}
            <div className='rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <Mail className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
                <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2'>
                  Property Email Composer
                </h3>
                <p className={`${plusJakartaSans.className} text-gray-700 text-sm sm:text-base`}>
                  Easily send emails to one or more contacts. Customize your emails with property-related content, including photos, basic data, and a link to a comprehensive property preview.
                </p>
              </div>
            </div>

            {/* Lead Generation */}
            <div className='rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <UserPlus className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
                <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2'>
                  Automated Lead Generation
                </h3>
                <p className={`${plusJakartaSans.className} text-gray-700 text-sm sm:text-base`}>
                  Every landing page includes a contact form with agent data. Sharing your landing page on social media will now generate leads in the contacts hub each time someone submits a contact form.
                </p>
              </div>
            </div>
          </div>
        </SlideReveal>

        {/* Team and Tasks Management Section */}
        <SlideReveal direction='up' duration={0.7}>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8'>
            TEAM AND TASKS MANAGEMENT
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 sm:mb-20'>
            {/* Task Management Card */}
            <div className='rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <ClipboardList className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
                <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2'>
                  Task Management & Collaboration
                </h3>
                <p className={`${plusJakartaSans.className} text-gray-700 text-sm sm:text-base`}>
                  Our task tracking and collaboration tool that uses boards, lists, and cards that empowers agency agents to efficiently manage their tasks and projects, enhancing overall productivity and organization.
                </p>
              </div>
            </div>

            {/* Team Management Card */}
            <div className='rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <Shield className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
                <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2'>
                  Team Management and Permissions
                </h3>
                <p className={`${plusJakartaSans.className} text-gray-700 text-sm sm:text-base`}>
                  Easily manage team members, system roles, and their permissions. Tailor your system to suit your team members' duties and responsibilities as needed.
                </p>
              </div>
            </div>
          </div>
        </SlideReveal>

        {/* Data and Analytics Section */}
        <SlideReveal direction='up' duration={0.7}>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8'>
            DATA AND ANALYTICS
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 sm:mb-20'>
            {/* Landing Page Analytics */}
            <div className='rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-br from-violet-400/20 to-fuchsia-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <BarChart2 className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
                <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2'>
                  Comprehensive Landing Page Analytics
                </h3>
                <p className={`${plusJakartaSans.className} text-gray-700 text-sm sm:text-base`}>
                  Gain a comprehensive understanding of landing page analytics and easily track the performance of your shared links on social media and other channels in EstateBax Analytics.
                </p>
              </div>
            </div>

            {/* Advanced Analytics Card */}
            <div className='rounded-2xl sm:rounded-3xl bg-white/50 p-4 sm:p-6 shadow-lg border border-white/60 transition-all duration-300 hover:bg-white/70 hover:scale-[1.02] cursor-pointer relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <FileText className='w-10 h-10 sm:w-12 sm:h-12 text-[#F56E0F] mb-3 sm:mb-4' />
                <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2'>
                  Advanced Data Analytics & Reporting
                </h3>
                <p className={`${plusJakartaSans.className} text-gray-700 text-sm sm:text-base`}>
                  Our software includes a robust report generator that allows users to create detailed reports on tasks, agents, contacts, and properties, providing valuable insights and analytics for informed decision-making and tracking performance effectively.
                </p>
              </div>
            </div>
          </div>
        </SlideReveal>

        {/* Documentation Button - Added after the last section */}
        <SlideReveal direction='up' duration={0.7}>
          <div className='flex justify-center mt-8'>
            <Link
              href='https://estatebax.com/docs'
              target="_blank"
              rel="noopener noreferrer"
              className='bg-white text-[#F56E0F] border-2 border-[#F56E0F] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#F56E0F] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              View Documentation
            </Link>
          </div>
        </SlideReveal>
      </div>
    </div>
  );
};

export default Features; 