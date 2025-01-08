import { Suspense } from "react";
import Discovery from "@/components/Discovery";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeTrust from "@/components/HomeTrust";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

// Enable static generation
export const dynamic = "force-static";
export const revalidate = 3600; // revalidate every hour

// Loading components for Suspense
const Loading = () => (
  <div className='w-full h-32 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg'></div>
);

export default function Home() {
  return (
    <div className='w-[100%] dark:bg-gray-900'>
      <Hero />
      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HomeAbout />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Discovery />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HomeTrust />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FAQs />
      </Suspense>
    </div>
  );
}
