"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import SlideReveal from "@/components/ui/slidereveal";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getSortedPostsData } from "@/lib/blogService";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
});

const clashDisplay = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const ITEMS_PER_PAGE = 6;

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(ITEMS_PER_PAGE);
  const [selectedCategory, setSelectedCategory] = useState('');

  const { data: allPostsData = [], isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getSortedPostsData,
  });

  const filteredPosts = selectedCategory
    ? allPostsData.filter(post => post.categoryId === selectedCategory)
    : allPostsData;

  const currentPosts = filteredPosts.slice(0, visiblePosts);
  const hasMore = visiblePosts < filteredPosts.length;

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + ITEMS_PER_PAGE);
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p>Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p>Error loading blog posts. Please try again later.</p>
      </div>
    );
  }

  return (
    <section className={`${clashDisplay.className} px-4 pt-8 md:px-20`}>
      <SlideReveal direction="up" duration={0.7}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
          Kulmi Digital <span className="text-[#F56E0F]">Blog</span>
        </h1>
      </SlideReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map(({ id, date, title, image, categoryName }, index) => (
          <SlideReveal key={id} direction="up" duration={0.7}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
              {image && (
                <div className="relative w-full h-48">
                  <Image 
                    src={image}
                    alt={title} 
                    fill
                    priority={index === 0}
                    style={{objectFit: "cover"}}
                    className="rounded-t-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className={`${clashDisplay.className} text-xl font-semibold mb-2`}>{title}</h2>
                <div className="flex justify-between items-center mb-4">
                  <span className={`${plusJakartaSans.className} text-sm text-gray-500`}>{date}</span>
                  {categoryName && (
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                      {categoryName}
                    </span>
                  )}
                </div>
                <Link 
                  href={`/blog/${id}`} 
                  className="mt-auto inline-flex items-center text-[#F56E0F] hover:text-[#E55D0E] transition-colors duration-200"
                >
                  <span>Read More</span>
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </SlideReveal>
        ))}
      </div>
      
      {hasMore && (
        <div className="mt-12 mb-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center px-6 py-3 bg-[#F56E0F] text-white rounded-lg hover:bg-[#E55D0E] transition duration-200"
          >
            <span>Load More</span>
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Blog;
