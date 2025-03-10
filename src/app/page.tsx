import Image from "next/image";
import Hero from "@/components/Hero";
import AiDeliver  from "@/components/AiDeliver";
import AiModeling from "@/components/AiModeling";
import OurWork from "@/components/OurWork";
import OurService from "@/components/OurService";
import Footer from "@/components/Footer";
import BusinessFunction from "@/components/BusinessFunction";
import AiSolutions from "@/components/AiSolutions";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AiDeliver />
      <AiModeling />
      <OurWork />
      <OurService />
      <BusinessFunction />
      <AiSolutions />
      <ContactUs />
      <FAQ />
    </main>
  );
}
