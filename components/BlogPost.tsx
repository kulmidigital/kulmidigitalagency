import React from "react";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import SlideReveal from "@/components/ui/slidereveal";
import Image from "next/image";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
});

const clashDisplay = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Medium.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const BlogPost = ({ postData }: { postData: { title: string; date: string; contentHtml: string; image?: string } }) => {
  return (
    <article className={`${clashDisplay.className}`}>
      {postData.image && (
        <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] mb-8">
          <Image 
            src={postData.image} 
            alt={postData.title} 
            fill
            style={{objectFit: "cover"}}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-4 sm:p-6 md:p-8 text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
                {postData.title}
              </h1>
              <span className={`${plusJakartaSans.className} text-sm`}>{postData.date}</span>
            </div>
          </div>
        </div>
      )}
      
      <section className="px-4 md:px-20">
        {!postData.image && (
          <>
            <SlideReveal direction="up" duration={0.7}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
                {postData.title}
              </h1>
            </SlideReveal>
            
            <div className={`${plusJakartaSans.className} flex justify-between items-center mb-8`}>
              <span className="text-gray-500">{postData.date}</span>
            </div>
          </>
        )}
        
        <div 
          className={`${plusJakartaSans.className} prose lg:prose-xl max-w-none`} 
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </section>
    </article>
  );
};

export default BlogPost;
