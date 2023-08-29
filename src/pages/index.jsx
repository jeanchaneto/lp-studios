import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrackShowcase from "@/components/TrackShowcase";

export default function Home() {
  return (
    <div className="">
      <div className="bg-zinc-950">
        <Header />
        <Hero />
      </div>
      <TrackShowcase />
    </div>
  );
}
