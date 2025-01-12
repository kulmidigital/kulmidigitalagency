import Discovery from "@/components/Discovery";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeTrust from "@/components/HomeTrust";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className='w-[100%] dark:bg-gray-900'>
      <Hero />
      <Services />
      <HomeAbout />
      <WhyChooseUs />
      <Discovery />
      <HomeTrust />
      <FAQs />
    </div>
  );
}
