import CTASection from "./ui/cta/CTASection";
import Footer from "./ui/footer/Footer";
import Header from "./ui/header/Header";
import Hero from "./ui/hero/Hero";
import LinksSection from "./ui/link/LinksSection";
import StatisticsSection from "./ui/statistics/StatisticsSection";

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <LinksSection />
      <StatisticsSection />
      <CTASection />
      <Footer />
    </>
  );
}
