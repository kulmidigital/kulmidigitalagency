"use client";
import React, { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import SlideReveal from "@/components/ui/slidereveal";
import Image from "next/image";
import Link from "next/link";
import "../styles/blog.css";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const clashDisplay = localFont({
  src: "../app/fonts/ClashDisplay-Medium.woff",
  display: "swap",
  variable: "--font-clash-display",
});

interface Post {
  id: string;
  title: string;
  content: string;
  contentHtml: string;
  date: string;
  image: string;
  categoryName: string;
  categoryId: string;
}

export default function BlogPost({ post }: { post: Post }) {
  const [isHovered, setIsHovered] = useState(false);

  if (!post) {
    return <div>No post data available</div>;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className={`${clashDisplay.className} dark:bg-gray-900`}>
      {post.image && (
        <div className='relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] mb-8'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-end'>
            <div className='p-4 sm:p-6 md:p-8 text-white'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-light mb-4'>
                {post.title}
              </h1>
              <div className='flex items-center gap-2'>
                <span className={`${plusJakartaSans.className} text-sm`}>
                  {formattedDate}
                </span>
                <span className='text-gray-400'>•</span>
                <span className={`${plusJakartaSans.className} text-sm`}>
                  {post.categoryName}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className='px-4 md:px-20'>
        {!post.image && (
          <>
            <SlideReveal direction='up' duration={0.7}>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-light mb-8 dark:text-gray-100'>
                {post.title}
              </h1>
            </SlideReveal>

            <div
              className={`${plusJakartaSans.className} flex justify-between items-center mb-8`}>
              <span className='text-gray-500 dark:text-gray-400'>
                {formattedDate}
              </span>
              <span className='text-gray-500 dark:text-gray-400'>
                {post.categoryName}
              </span>
            </div>
          </>
        )}

        <div
          className={`${plusJakartaSans.className} blog-content mx-2 md:mx-[15%] dark:text-gray-200`}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </section>

      <div className='flex justify-center items-center mt-12 mb-16'>
        <Link
          className='my-4 md:my-0 mx-auto text-sm sm:text-[18px] lg:text-[20px] text-center w-[70%] p-4 rounded-[40px] flex items-center justify-center space-x-2 bg-[#F56E0F] text-white hover:bg-transparent border border-[#F56E0F] hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-300'
          href='/contact'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <span>Get Started</span>
          {isHovered ? (
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'>
              <path
                d='M6 12H18M18 12L13 7M18 12L13 17'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ) : (
            <svg
              viewBox='0 0 1024 1024'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='w-5 h-5'>
              <path d='M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z'></path>
              <path d='M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z'></path>
            </svg>
          )}
        </Link>
      </div>
    </article>
  );
}
