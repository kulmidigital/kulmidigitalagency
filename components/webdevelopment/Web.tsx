"use client";
import React from "react";
import Hero from "./Hero";
import SlideReveal from "@/components/ui/slidereveal";
import localFont from "next/font/local";
import CodeSnippet from "./CodeSnippet";
import IconCloud from "./IconCloud";
import { Shield, Clock, Gauge, Database } from "lucide-react";
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

const Web = () => {
  return (
    <div className="w-full">
      <Hero />
      
      {/* Development Approaches Section */}
      <section className='py-12 sm:py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6'>
          <SlideReveal direction='up' duration={0.7}>
            <h2 className={`${clashDisplay.className} text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 sm:mb-16`}>
              Choose Your{" "}
              <span className='text-[#F56E0F]'>Development Approach</span>
            </h2>
          </SlideReveal>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            {/* Custom Development */}
            <SlideReveal direction='left' duration={0.7}>
              <div className='bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col'>
                <div className='bg-gradient-to-br from-orange-100 to-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6'>
                  <h3 className={`${clashDisplay.className} text-2xl font-bold mb-4`}>
                    Custom Development
                  </h3>
                  <p className={`${clashDisplay.className} text-gray-600 mb-6`}>
                    Tailored solutions built from the ground up using modern
                    technologies and frameworks.
                  </p>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>React.js</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>Next.js</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>Node.js</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>TypeScript</span>
                    </div>
                  </div>
                </div>
                <ul className='space-y-4 mb-6'>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>
                      Complete control over functionality and features
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>Optimized performance and loading speeds</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>Unique user experiences and interactions</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <CodeSnippet />
                </div>
              </div>
            </SlideReveal>

            {/* CMS Development */}
            <SlideReveal direction='right' duration={0.7}>
              <div className='bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col'>
                <div className='bg-gradient-to-br from-blue-100 to-purple-50 rounded-2xl p-6 mb-6'>
                  <h3 className={`${clashDisplay.className} text-2xl font-bold mb-4`}>
                    CMS Solutions
                  </h3>
                  <p className={`${clashDisplay.className} text-gray-600 mb-6`}>
                    Powerful content management systems for easy updates and
                    maintenance.
                  </p>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>WordPress</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>Shopify</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>WooCommerce</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-[#F56E0F] rounded-full'></div>
                      <span className={clashDisplay.className}>Custom CMS</span>
                    </div>
                  </div>
                </div>
                <ul className='space-y-4 mb-6'>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>Easy content management and updates</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>Cost-effective and quick to deploy</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    </div>
                    <span className={clashDisplay.className}>Large ecosystem of plugins and themes</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <IconCloud />
                </div>
              </div>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-12 sm:py-20'>
        <div className='container mx-auto px-4 sm:px-6'>
          <SlideReveal direction='up' duration={0.7}>
            <h2 className={`${clashDisplay.className} text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 sm:mb-16`}>
              Our Development <span className='text-[#F56E0F]'>Process</span>
            </h2>
          </SlideReveal>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your goals, audience, and requirements",
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating wireframes, designs, and technical specifications",
              },
              {
                step: "03",
                title: "Development",
                description: "Building your website with clean, efficient code",
              },
              {
                step: "04",
                title: "Launch",
                description: "Testing, optimization, and deployment",
              },
            ].map((item, index) => (
              <SlideReveal key={item.step} direction='up' duration={0.7} delay={index * 0.1}>
                <div className='bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100'>
                  <div className={`${clashDisplay.className} text-[#F56E0F] text-5xl font-bold mb-4`}>
                    {item.step}
                  </div>
                  <h3 className={`${clashDisplay.className} text-xl font-bold mb-2`}>
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

      {/* Maintenance & Support Section */}
      <section className='py-12 sm:py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6'>
          <SlideReveal direction='up' duration={0.7}>
            <h2 className={`${clashDisplay.className} text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 sm:mb-16`}>
              Maintenance & <span className='text-[#F56E0F]'>Support</span>
            </h2>
          </SlideReveal>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {[
              {
                title: "Essential",
                description: "Basic maintenance and security updates",
                features: [
                  "Weekly backups",
                  "Security monitoring",
                  "Core updates",
                  "48h response time",
                  "Monthly reports"
                ],
                icon: Shield
              },
              {
                title: "Professional",
                description: "Enhanced support with priority service",
                features: [
                  "Daily backups",
                  "Advanced security",
                  "Performance optimization",
                  "24h response time",
                  "Weekly reports",
                  "Content updates"
                ],
                icon: Clock,
                highlighted: true
              },
              {
                title: "Enterprise",
                description: "Comprehensive managed hosting solution",
                features: [
                  "Real-time backups",
                  "DDoS protection",
                  "CDN integration",
                  "4h response time",
                  "24/7 monitoring",
                  "Unlimited updates",
                  "Dedicated support"
                ],
                icon: Gauge
              }
            ].map((plan, index) => (
              <SlideReveal key={index} direction='up' duration={0.7} delay={index * 0.1}>
                <div className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border h-full flex flex-col ${
                  plan.highlighted ? 'border-[#F56E0F]' : 'border-gray-100'
                }`}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${
                    plan.highlighted ? 'bg-[#F56E0F]' : 'bg-gray-100'
                  } flex items-center justify-center mb-4 sm:mb-6`}>
                    <plan.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      plan.highlighted ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`${clashDisplay.className} text-xl sm:text-2xl font-bold mb-2`}>
                      {plan.title}
                    </h3>
                    <p className={`${clashDisplay.className} text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base`}>
                      {plan.description}
                    </p>
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <span className={`${clashDisplay.className} text-sm sm:text-base`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className="mt-auto">
                    <button className={`${clashDisplay.className} w-full bg-[#F56E0F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-[#E55D00] transition-all duration-300 shadow-lg hover:shadow-[#F56E0F]/20 hover:shadow-2xl`}>
                      Contact Sales
                    </button>
                  </Link>
                </div>
              </SlideReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web;
