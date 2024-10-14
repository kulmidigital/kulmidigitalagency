'use client'
import React, { useState } from "react";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import SlideReveal from "@/components/ui/slidereveal";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "@/components/ui/pagination";

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

const ITEMS_PER_PAGE = 9;

const Blog = ({ allPostsData }: { allPostsData: { id: string; date: string; title: string; image?: string }[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allPostsData.length / ITEMS_PER_PAGE);

  const currentPosts = allPostsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className={`${clashDisplay.className} px-4 pt-8 md:px-20`}>
      <SlideReveal direction="up" duration={0.7}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
          Kulmi Digital <span className="text-[#F56E0F]">Blog</span>
        </h1>
      </SlideReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map(({ id, date, title, image }) => (
          <SlideReveal key={id} direction="up" duration={0.7}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
              {image && (
                <div className="relative w-full h-48">
                  <Image 
                    src={image} 
                    alt={title} 
                    fill
                    style={{objectFit: "cover"}}
                    className="rounded-t-2xl"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className={`${clashDisplay.className} text-xl font-semibold mb-2`}>{title}</h2>
                <div className="flex justify-between items-center mb-4">
                  <span className={`${plusJakartaSans.className} text-sm text-gray-500`}>{date}</span>
                </div>
                <Link href={`/blog/${id}`} className="mt-auto inline-block text-[#F56E0F] hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </SlideReveal>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default Blog;
