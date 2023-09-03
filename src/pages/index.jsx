import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrackShowcase from "@/components/TrackShowcase";
import BenefitsSection from "@/components/BenefitsSection";
import CustomCta from "@/components/CustomCta";
import ProjectFileFeatures from "@/components/ProjectFileFeatures";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <TrackShowcase />
      <BenefitsSection />
      <ProjectFileFeatures />
      <CustomCta />
    </div>
  );
}
