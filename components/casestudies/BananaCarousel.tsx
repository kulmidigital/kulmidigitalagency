"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";

const images: string[] = [
  "/bananapay/slide1.jpeg",
  "/bananapay/slide2.jpeg",
  "/bananapay/slide3.jpeg",
  "/bananapay/slide4.jpeg",
];

export default function BananaPayCarousel(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [api, setApi] = useState<CarouselApi>();
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  const scrollToNextSlide = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoPlay && api) {
      intervalId = setInterval(() => {
        scrollToNextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [api, autoPlay, scrollToNextSlide]);

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  return (
    <div
      className='relative w-full max-w-[76rem] mx-auto mt-12'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className='w-full'
        setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className='relative h-[500px] w-full bg-cover bg-center bg-no-repeat rounded-[30px] overflow-hidden'
                style={{ backgroundImage: `url(${image})` }}>
                {/* Pagination Dots */}
                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex justify-center space-x-2 bg-black/40 bg-opacity-75 rounded-2xl py-2 px-2'>
                  {images.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`h-2 w-2 rounded-full ${
                        dotIndex === currentIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2'>
          <ChevronLeft className='h-8 w-8' />
        </CarouselPrevious>
        <CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2'>
          <ChevronRight className='h-8 w-8' />
        </CarouselNext>
      </Carousel>
    </div>
  );
}
