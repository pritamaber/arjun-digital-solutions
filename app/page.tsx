import Hero from "../components/Hero";
import ClientSlider from "../components/ClientSlider";
import ServiceGrid from "../components/ServiceGrid";
// import Services from "../components/Services";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "../components/WhyUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />

      <ClientSlider />

      <ServiceGrid />

      {/* <Services /> */}
      <ServicesSection />

      <WhyUs />

      <CTA />

      <Footer />
    </main>
  );
}
