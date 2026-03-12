import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClientSlider from "../components/ClientSlider";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <TopBar />

      <Navbar />

      <Hero />

      <ClientSlider />

      <Services />

      <WhyUs />

      <CTA />

      <Footer />
    </main>
  );
}
