import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrackShowcase from "@/components/TrackShowcase";
import BenefitsSection from "@/components/BenefitsSection";
import CustomCta from "@/components/CustomCta";
import ProjectFileFeatures from "@/components/ProjectFileFeatures";
import LogoCloud from "@/components/LogoCloud";
import Head from "next/head";

export default function Home() {
  return (
    <main className=" bg-zinc-950 ">
      <Head>
      <title>LAP Studios | Ghost Production</title>
      </Head>
      <div className=" bg-gradient-radial from-zinc-900/90  to-zinc-950 ">
        <Hero />
        <TrackShowcase />
        <BenefitsSection />
        <ProjectFileFeatures />
        <CustomCta />
        <LogoCloud />
      </div>
    </main>
  );
}
