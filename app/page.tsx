import Hero from "../components/Hero";
import ClientSlider from "../components/ClientSlider";
import ServiceGrid from "../components/ServiceGrid";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "../components/WhyUs";
import CTA from "../components/CTA";
import SectionDivider from "../components/SectionDivider";
import FadeIn from "../components/FadeIn";

export default function Home() {
  return (
    <main>
      <FadeIn>
        <Hero />
      </FadeIn>

      <SectionDivider />

      <FadeIn>
        <ClientSlider />
      </FadeIn>

      <SectionDivider />

      <FadeIn>
        <ServiceGrid />
      </FadeIn>

      <SectionDivider />

      <FadeIn>
        <ServicesSection />
      </FadeIn>

      <SectionDivider />

      <FadeIn>
        <WhyUs />
      </FadeIn>

      <SectionDivider />

      <FadeIn>
        <CTA />
      </FadeIn>

      <SectionDivider />
    </main>
  );
}
