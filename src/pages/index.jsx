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
        <title>
          LAP Studios | Ghost Production Afro House, Melodic House & techno
        </title>
        <meta
          name="description"
          content="Afro House, Melodic House & Techno, Organic House and Deep House ghost producers. Buy exclusive tracks to elevate your presence in the music industry."
        />
        <meta
          property="og:title"
          content="LAP Studios | Ghost Production & Top Ghost Producers"
        />
        <meta
          property="og:description"
          content="Afro House, Melodic House & Techno, Organic House and Deep House ghost producers. Buy exclusive tracks to elevate your presence in the music industry."
        />
        <meta property="og:image" content="/images/main-og-image.png" />
        <meta
          name="google-site-verification"
          content="PEXYt6alIS4OjL6wIJ2DdLk4SnEG2tGKY4Aw2QWKo5g"
        />
      </Head>
      <div className=" bg-zinc-950 ">
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
