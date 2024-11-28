"use client";
import React from "react";
import Hero from "./Hero";
import SlideReveal from "@/components/ui/slidereveal";
import localFont from "next/font/local";
import { Search, BarChart, Target, Users, Settings, Globe, Star, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

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

const Seo = () => {
  return (
    <div className="w-full">
      <Hero />
      
      {/* SEO Services Section */}
      <section className='py-12 sm:py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6'>
          <SlideReveal direction='up' duration={0.7}>
            <h2 className={`${clashDisplay.className} text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-4 sm:mb-6`}>
              Our SEO <span className='text-[#F56E0F]'>Services</span>
            </h2>
            <p className={`${clashDisplay.className} text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-16`}>
              We combine technical expertise with creative strategies to deliver comprehensive SEO solutions that drive sustainable growth. Our data-driven approach ensures measurable results and long-term success.
            </p>
          </SlideReveal>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            {/* On-Page SEO */}
            <SlideReveal direction='left' duration={0.7}>
              <div className='bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col'>
                <div className='bg-gradient-to-br from-orange-100 to-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6'>
                  <Search className="w-12 h-12 text-[#F56E0F] mb-4" />
                  <h3 className={`${clashDisplay.className} text-2xl font-bold mb-4`}>
                    On-Page Excellence
                  </h3>
                  <p className={`${clashDisplay.className} text-gray-600 mb-6`}>
                    Transform your website into a search engine magnet with our comprehensive on-page optimization.
                  </p>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                       <span className={clashDisplay.className}>Keyword Strategy</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>Content Mastery</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>UX Signals</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>Schema Markup</span>
                    </div>
                  </div>
                </div>
                <ul className='space-y-4 mb-6'>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>
                      AI-powered keyword research and competitor analysis
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>
                      Content optimization for featured snippets
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>
                      Advanced semantic SEO implementation
                    </span>
                  </li>
                </ul>
              </div>
            </SlideReveal>

            {/* Technical SEO */}
            <SlideReveal direction='right' duration={0.7}>
              <div className='bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col'>
                <div className='bg-gradient-to-br from-blue-100 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6'>
                  <Settings className="w-12 h-12 text-[#F56E0F] mb-4" />
                  <h3 className={`${clashDisplay.className} text-2xl font-bold mb-4`}>
                    Technical Mastery
                  </h3>
                  <p className={`${clashDisplay.className} text-gray-600 mb-6`}>
                    Unlock your website's full potential with our advanced technical SEO solutions.
                  </p>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>Core Web Vitals</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>Site Architecture</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>Mobile-First</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>IndexNow API</span>
                    </div>
                  </div>
                </div>
                <ul className='space-y-4 mb-6'>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>
                      Performance optimization for Core Web Vitals
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>
                      Advanced crawl optimization and indexing
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>
                      International SEO and hreflang implementation
                    </span>
                  </li>
                </ul>
              </div>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-12 sm:py-20'>
        <div className='container mx-auto px-4 sm:px-6'>
          <SlideReveal direction='up' duration={0.7}>
            <h2 className={`${clashDisplay.className} text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-4 sm:mb-6`}>
              Why Choose Us for <span className='text-[#F56E0F]'>SEO</span>
            </h2>
            <p className={`${clashDisplay.className} text-gray-600 text-center max-w-3xl mx-auto mb-12 sm:mb-16`}>
              We don't just follow SEO best practices—we set them. Our approach combines data analytics, technical expertise, and creative content strategies.
            </p>
          </SlideReveal>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
            {[
              {
                icon: TrendingUp,
                title: "Data-Driven Strategy",
                description: "Every decision is backed by comprehensive analytics and real-world performance data"
              },
              {
                icon: Star,
                title: "Industry Expertise",
                description: "Specialized experience across various industries and market segments"
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Consistent track record of achieving top rankings for competitive keywords"
              },
              {
                icon: Users,
                title: "Dedicated Team",
                description: "Your project is managed by certified SEO specialists who care about your success"
              }
            ].map((item, index) => (
              <SlideReveal key={index} direction='up' duration={0.7} delay={index * 0.1}>
                <div className='bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all h-full'>
                  <item.icon className="w-12 h-12 text-[#F56E0F] mb-4" />
                  <h3 className={`${clashDisplay.className} text-xl font-bold mb-3`}>
                    {item.title}
                  </h3>
                  <p className={`${clashDisplay.className} text-gray-600`}>
                    {item.description}
                  </p>
                </div>
              </SlideReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-12 sm:py-20'>
        <div className='container mx-auto px-4 sm:px-6'>
          <SlideReveal direction='up' duration={0.7}>
            <h2 className={`${clashDisplay.className} text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-4 sm:mb-6`}>
              Frequently Asked <span className='text-[#F56E0F]'>Questions</span>
            </h2>
            <p className={`${clashDisplay.className} text-gray-600 text-center max-w-3xl mx-auto mb-12 sm:mb-16`}>
              Get answers to common questions about SEO and our methodology.
            </p>
          </SlideReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What is SEO and why is it important?",
                answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to increase its visibility in search engine results. It's crucial because it helps drive organic (non-paid) traffic to your website, increases brand awareness, and can lead to higher conversion rates. With most online experiences beginning with a search engine, having strong SEO can significantly impact your business's success."
              },
              {
                question: "How long does it take to see SEO results?",
                answer: "SEO is a long-term strategy that typically shows meaningful results within 4-6 months. However, the exact timeline depends on various factors including your website's current status, competition level, and the scope of optimization needed. We focus on implementing sustainable strategies that deliver lasting results rather than quick fixes."
              },
              {
                question: "What does your SEO process involve?",
                answer: "Our SEO process includes comprehensive technical audits, keyword research, on-page optimization, content strategy development, and performance monitoring. We start with a thorough analysis of your website and competitive landscape, then create a customized strategy that aligns with your business goals."
              },
              {
                question: "How do you measure SEO success?",
                answer: "We track multiple metrics to measure SEO success, including organic traffic growth, keyword rankings, conversion rates, and engagement metrics. We provide regular reports that show your website's progress and ROI from our SEO efforts."
              },
              {
                question: "Do you follow Google's best practices?",
                answer: "Yes, we strictly adhere to Google's webmaster guidelines and SEO best practices. Our strategies focus on creating high-quality, user-focused content and implementing technical optimizations that align with Google's recommendations. We avoid any black-hat techniques that could harm your website's reputation."
              },
              {
                question: "What technical aspects do you optimize?",
                answer: "Our technical SEO services include optimizing site speed, mobile responsiveness, URL structure, XML sitemaps, robots.txt, schema markup, and meta tags. We also address issues like duplicate content, broken links, and crawlability to ensure search engines can effectively index your site."
              },
              {
                question: "How do you handle local SEO?",
                answer: "For businesses targeting local customers, we optimize Google Business Profiles, ensure consistent NAP (Name, Address, Phone) information across directories, create location-specific content, and implement local schema markup. We also focus on building local citations and managing customer reviews."
              },
              {
                question: "What makes your SEO services different?",
                answer: "We combine data-driven strategies with creative solutions, focusing on both technical excellence and user experience. Our team stays current with the latest SEO trends and algorithm updates, ensuring your website maintains its competitive edge. We also provide transparent reporting and maintain clear communication throughout the process."
              },
              {
                question: "Do you provide content creation services?",
                answer: "Yes, we offer comprehensive content creation services as part of our SEO package. This includes keyword-optimized blog posts, service pages, and other content types that align with your SEO strategy. All content is created by experienced writers who understand both SEO best practices and your industry."
              },
              {
                question: "How do you adapt to search engine algorithm changes?",
                answer: "We continuously monitor search engine algorithm updates and industry trends. Our team quickly adapts strategies when needed while maintaining focus on fundamental SEO principles that remain constant: quality content, good user experience, and technical excellence."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
                <h3 className={`${clashDisplay.className} text-xl font-bold mb-4`}>
                  {faq.question}
                </h3>
                <p className={`${clashDisplay.className} text-gray-600`}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seo; 