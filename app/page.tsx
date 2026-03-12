import Hero from "../components/Hero";
import ClientSlider from "../components/ClientSlider";
import ServiceGrid from "../components/ServiceGrid";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "../components/WhyUs";
import CTA from "../components/CTA";
import SectionDivider from "../components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Hero />

      <SectionDivider />

      <ClientSlider />

      <SectionDivider />

      <ServiceGrid />

      <SectionDivider />

      <ServicesSection />

      <SectionDivider />

      <WhyUs />

      <SectionDivider />

      <CTA />

      <SectionDivider />
    </main>
  );
}
