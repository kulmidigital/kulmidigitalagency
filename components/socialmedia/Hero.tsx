"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import emailjs from "@emailjs/browser";
import SlideReveal from "@/components/ui/slidereveal";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { motion, useAnimationFrame } from "framer-motion";
import GradualSpacing from '../ui/gradual-spacing';
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

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

const logos = [
  "energizer.png", "bigben.png", "celly.png", "dentsu.png", "dtb.png",
  "glovo.png", "im.png", "ipay.svg", "naivas.png", "rubis.webp",
  "upfield.png", "visionplus.png", "sombank.png", "kcb.png", "eyelink.png",
  "haier.png", "omarmp.png", "banana.png", "tcl.png",
];

const notifications = Array.from({ length: 10 }, () => [
  {
    name: "Engagement Boost",
    description: "Instagram post reach increased by 150%",
    time: "2h ago",
    icon: "📈",
    color: "#00C9A7",
  },
  {
    name: "New Follower Milestone",
    description: "Reached 10,000 followers on Twitter",
    time: "1h ago",
    icon: "🎉",
    color: "#FFB800",
  },
  {
    name: "Campaign Success",
    description: "Facebook ad generated 500 leads",
    time: "30m ago",
    icon: "🚀",
    color: "#FF3D71",
  },
  {
    name: "Viral Content",
    description: "TikTok video reached 1M views",
    time: "15m ago",
    icon: "🔥",
    color: "#1E86FF",
  },
  {
    name: "Influencer Collaboration",
    description: "Partnership secured with top industry influencer",
    time: "3h ago",
    icon: "🤝",
    color: "#9B59B6",
  },
  {
    name: "Website Traffic Surge",
    description: "50% increase in website visits from social media",
    time: "45m ago",
    icon: "🌐",
    color: "#3498DB",
  },
  {
    name: "Content Performance",
    description: "Blog post shared 1000 times on LinkedIn",
    time: "1h ago",
    icon: "📊",
    color: "#E67E22",
  },
  {
    name: "Customer Feedback",
    description: "5-star review from satisfied client",
    time: "20m ago",
    icon: "⭐",
    color: "#F1C40F",
  },
  {
    name: "Email Campaign",
    description: "Newsletter open rate hit 35%",
    time: "4h ago",
    icon: "📧",
    color: "#16A085",
  },
  {
    name: "Social Listening Alert",
    description: "Positive brand mention by industry leader",
    time: "10m ago",
    icon: "👂",
    color: "#8E44AD",
  }
]).flat();

interface HeroProps {
  gradientFrom: string;
  gradientTo: string;
  title: string;
  description: string;
}

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}>
      <div className='flex flex-row items-center gap-3'>
        <div
          className='flex size-10 items-center justify-center rounded-2xl'
          style={{
            backgroundColor: color,
          }}>
          <span className='text-lg'>{icon}</span>
        </div>
        <div className='flex flex-col overflow-hidden'>
          <figcaption className='flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white '>
            <span className='text-sm text-[#F56E0F] sm:text-lg'>{name}</span>
            <span className='mx-1'>·</span>
            <span className='text-xs text-gray-500'>{time}</span>
          </figcaption>
          <p className='text-sm font-norma'>{description}</p>
        </div>
      </div>
    </figure>
  );
};

const Hero: React.FC<HeroProps> = ({ gradientFrom, gradientTo, title, description }) => {
  const form = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);

  useEffect(() => {
    if (innerRef.current) {
      setWidth(innerRef.current.scrollWidth - innerRef.current.offsetWidth);
    }
  }, []);

  useAnimationFrame(() => {
    if (carouselRef.current && width > 0) {
      xRef.current -= 1.25;
      if (xRef.current <= -width) {
        xRef.current = 0;
      }
      carouselRef.current.style.transform = `translateX(${xRef.current}px)`;
    }
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          "service_q3hv2ob",
          "template_4tomfg4",
          form.current,
          "dLJ8zVKXzkxUy4kwR"
        );
        console.log("Message Sent Successfully:", result.text);
        toast({
          title: "Request Sent",
          description: "We'll get back to you soon!",
          className: `${clashDisplay.className} bg-orange-500 text-white`,
          action: (
            <ToastAction altText="Close" className="text-white hover:text-orange-100">Close</ToastAction>
          ),
        });
        if (form.current) {
          form.current.reset();
        }
      } catch (error) {
        console.error("Error sending message:", error);
        toast({
          title: "Error",
          description: "There was an error sending your request. Please try again.",
          className: `${clashDisplay.className} bg-red-500 text-white`,
          action: (
            <ToastAction altText="Try again" className="text-white hover:text-red-100">Try again</ToastAction>
          ),
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const gradientStyle = {
    background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
  };

  return (
    <section className='flex flex-col min-h-screen'>
      <div className='flex-grow text-white' style={gradientStyle}>
        <div className='flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12'>
          {/* Left side: Hero text and Animated List */}
          <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
            <SlideReveal direction='left' duration={0.7}>
              <h1
                className={`${clashDisplay.className} text-3xl sm:text-4xl lg:text-6xl font-bold mb-4`}>
                {title}
              </h1>
              <p className={`${plusJakartaSans.className} text-lg sm:text-xl mb-6`}>
                {description}
              </p>

              {/* Animated List */}
              <div
                className={cn(
                  "relative flex flex-col items-start h-[130px] w-full text-black py-6 overflow-hidden rounded-lg border-white"
                )}>
                <AnimatedList>
                  {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                  ))}
                </AnimatedList>
              </div>
            </SlideReveal>
          </div>

          {/* Right side: Form */}
          <Card className='w-full lg:w-[40%] bg-white/10 backdrop-blur-md rounded-xl p-6 lg:p-8'>
            <SlideReveal direction='up' duration={0.7}>
              <h2
                className={`${clashDisplay.className} text-xl sm:text-2xl mb-4 text-center`}>
                Get Your Free Social Media Audit
              </h2>
              <form
                ref={form}
                onSubmit={handleFormSubmit}
                className='space-y-4'>
                <Input
                  type='text'
                  name='from_name'
                  placeholder='Your Name'
                  className='bg-white/20 pl-6 border-transparent h-12 text-white placeholder-white/70 rounded-full'
                  required
                />
                <Input
                  type='email'
                  name='user_email'
                  placeholder='Your Email'
                  className='bg-white/20 pl-6 border-transparent h-12 text-white placeholder-white/70 rounded-full'
                  required
                />
                <Input
                  type='text'
                  name='social_media_handle'
                  placeholder='Your Social Media Handle'
                  className='bg-white/20 pl-6 border-transparent h-12 text-white placeholder-white/70 rounded-full'
                  required
                />
                <Button
                  type='submit'
                  className='w-full bg-white text-blue-600 hover:bg-blue-100 py-3 text-base sm:text-lg rounded-full'
                  disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Get My Free Audit"}
                </Button>
              </form>
            </SlideReveal>
          </Card>
        </div>
      </div>

      {/* Logo Carousel */}
      <div className='bg-white py-8 sm:py-12'>
        <h2
          className={`${clashDisplay.className} text-xl sm:text-2xl text-center mb-6 text-gray-800`}>
          <GradualSpacing text='Trusted by Leading Brands' />
        </h2>
        <div
          className='overflow-hidden relative px-4 sm:px-8 lg:px-12'
          ref={innerRef}>
          <motion.div
            ref={carouselRef}
            className='flex'
            style={{ gap: "1rem" }}>
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className='flex items-center justify-center bg-center bg-no-repeat'
                style={{
                  minWidth: "100px",
                  minHeight: "60px",
                  backgroundImage: `url(/logos/${logo})`,
                  backgroundSize: "contain",
                }}></div>
            ))}
          </motion.div>
          <div className='pointer-events-none absolute inset-y-0 left-0 w-[15%] sm:w-[10%] bg-gradient-to-r from-white'></div>
          <div className='pointer-events-none absolute inset-y-0 right-0 w-[15%] sm:w-[10%] bg-gradient-to-l from-white'></div>
        </div>
      </div>
    </section>
  );
}

export default Hero
