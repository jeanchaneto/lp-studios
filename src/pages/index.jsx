import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrackShowcase from "@/components/TrackShowcase";
import BenefitsSection from "@/components/BenefitsSection";
import CustomCta from "@/components/CustomCta";
import ProjectFileFeatures from "@/components/ProjectFileFeatures";
import LogoCloud from "@/components/LogoCloud";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TrackShowcase />
      <BenefitsSection />
      <ProjectFileFeatures />
      <CustomCta />
      <LogoCloud />
    </main>
  );
}
