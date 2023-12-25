import CTASection from "./ui/cta/CTASection";
import Footer from "./ui/footer/Footer";
import Hero from "./ui/hero/Hero";
import LinksSection from "./ui/link/LinksSection";
import StatisticsSection from "./ui/statistics/StatisticsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LinksSection />
      <StatisticsSection/>
      <CTASection/>
      <Footer/>
    </>
  );
}
