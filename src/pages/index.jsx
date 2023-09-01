import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrackShowcase from "@/components/TrackShowcase";
import Benefits from "@/components/Benefits";
import CustomCta from "@/components/CustomCta";

export default function Home() {
  return (
    <div className="">
      <div className="bg-zinc-950">
        <Header />
        <Hero />
      </div>
      <TrackShowcase />
      <Benefits />
      <CustomCta />
    </div>
  );
}
