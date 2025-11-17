import Hero from "../components/Hero";
import StatsSection from "@/components/StatsSection";
import Services from "../components/Services";
import OurWork from "../components/OurWork";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <Services />
      <OurWork />
      <TestimonialsSection />
    </>
  );
}
