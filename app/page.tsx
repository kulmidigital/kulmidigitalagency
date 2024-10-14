import Discovery from "@/components/Discovery";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeTrust from "@/components/HomeTrust";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import WordpressRates from "@/components/WordpressRates";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <HomeAbout />
      <WhyChooseUs />
      <Discovery />
      <HomeTrust />
      <WordpressRates />
      <FAQs />
    </div>
  );
}