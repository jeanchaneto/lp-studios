import Form from "@/components/Form";
import TimeLine from "@/components/TimeLine";

import Image from "next/image";
import HeroImage from "../../public/images/ghost-production-hero-image.jpeg";

import { EnvelopeIcon, CheckIcon } from "@heroicons/react/24/outline";

import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import Head from "next/head";

const features = [
  {
    name: "Risk-Free Collaboration",
    description:
      "Start your project with us with zero commitments on your part until you reach complete satisfaction.",
    icon: "/icons/risk-free-icon.svg",
  },
  {
    name: "Pay When Satisfied",
    description:
      "We ensure you are 100% happy with the track composition and arrangement before any payment is made",
    icon: "/icons/satisfaction-icon.svg",
  },
  {
    name: "A decade of experience",
    description:
      "We understand the expectations of the music industry and know precisely what labels are seeking.",
    icon: "/icons/experience-icon.svg",
  },
  {
    name: "Keep Your Royalties",
    description:
      "Once payment is made, you gain full ownership of the track, with no credit or royalty claims from our side.",
    icon: "/icons/royalties-icon.svg",
  },
];

const pricingContent = [
  "100% royalties",
  "Master",
  "Premaster",
  "Stems",
  "Project file",
];

const GhostProduction = () => {
  return (
    <main className="  py-24 sm:py-32 relative">
      <Head>
        <title>LAP Studios | Custom Music by Elite Ghost Producers</title>
        <meta
          name="description"
          content="Custom music production service. Renowned ghost producers at your service, crafting music designed to elevate your presence in the industry!"
        />
        <meta
          property="og:title"
          content="LAP Studios | Ghost Production & Top Ghost Producers"
        />
        <meta
          property="og:description"
          content="Custom music production service. Renowned ghost producers at your service, crafting music designed to elevate your presence in the industry!"
        />
        <meta property="og:image" content="/images/main-og-image.png" />
      </Head>
      <FadeIn>
        <section className=" pb-24 sm:pb-32 z-20 isolate lg:flex gap-16 justify-between max-w-7xl mx-auto">
          <div className="  px-6 lg:px-8 rounded-xl flex-shrink-0 ">
            <div
              className="mx-auto max-w-2xl lg:mx-0 
          "
            >
              <p className="text-base font-semibold  text-teal-300">
                Bespoke Sound
              </p>
              <h1 className="mt-2 text-4xl font-kallisto text-zinc-100 sm:text-6xl">
                Custom Ghost Production
              </h1>
              <p className="mt-6 text-xl  text-zinc-400 ">
                Looking to create distinctive tracks in Afro House, Melodic
                House & Techno, Organic House, or Deep House? You’ve landed in
                the right spot. Dive into an exclusive experience provided by
                our compact, sought-after team, known for elevating tracks to
                secure spots on top labels and earn acclaim from renowned DJs
                worldwide.
              </p>
            </div>
          </div>
          <div className="px-6 lg:px-0 flex-shrink">
            <Image
              src={HeroImage}
              alt="Reverb audio plugin"
              className=" mx-auto mt-24 md:max-w-xl lg:max-w-xl  bg-gradient-radial from-teal-950/80   to-70% to-transparent rounded-lg"
            />
          </div>
        </section>
      </FadeIn>

      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold  text-teal-300">
              Pro music
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Why choose{" "}
              <span className=" font-kallisto font-normal">
                LAP <span className="font-thin">Studios</span>{" "}
              </span>{" "}
              ?
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Whether you're an aspiring artist or an established musician, we
              understand your need for innovation and individuality in the music
              industry.
            </p>
          </FadeIn>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <FadeInStagger>
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <FadeIn key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold text-zinc-100">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400">
                        <img
                          src={feature.icon}
                          className="h-6 w-6 text-black"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base text-zinc-400">
                      {feature.description}
                    </dd>
                  </FadeIn>
                ))}
              </dl>
            </FadeInStagger>
          </div>
        </div>
      </div>

      <TimeLine />

      <section className=" py-24 sm:py-32 bg-gradient-radial from-teal-950/90 to-60% to to-transparent bg-bottom ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                Pricing
              </h2>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-300">
              Our price is transparent and fixed.
              <br /> Get started now, with no payment required and zero
              commitments..
            </p>
          </FadeIn>
          <FadeIn>
            <div className=" flex justify-center mt-10 px-6  ">
              <div className="bg-gradient-to-b from-zinc-950  to-zinc-900 ring-1 ring-zinc-100/10 rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-center gap-x-4 ">
                  <h3 className="text-lg  font-semibold leading-8 text-zinc-100">
                    One original track
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-300 text-center ">
                  Unique production crafted to your requirements
                </p>
                <p className="mt-6  items-baseline gap-x-1 text-4xl font-bold tracking-tight text-zinc-100 text-center">
                  <span className="">1499 €</span>
                </p>
                <a
                  href="#contact-ghost-production"
                  className=" mt-6 relative rounded-xl px-5 py-2.5 overflow-hidden group bg-blue-700  hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300 flex justify-center"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-48 bg-white opacity-10 rotate-12 sm:group-hover:-translate-x-80 ease"></span>
                  <span className="relative">Get Started</span>
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 flex flex-col item text-sm leading-6 text-gray-300 xl:mt-10"
                >
                  {pricingContent.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-white"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div
        id="contact-ghost-production"
        className="relative isolate bg-zinc-950 "
      >
        {" "}
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
                  Let's make music together
                </h2>
                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  Reach out to us in complete confidentiality to start your
                  project and get a free demo. Let’s work together to bring your
                  unique sound to life!
                </p>
              </FadeIn>
              <FadeIn>
                <dl className="mt-10 space-y-4 text-base leading-7 ">
                  <div className=" mt-10 flex text-zinc-300 gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon
                        className="h-7 w-6 text-zinc-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-zinc-100"
                        href="mailto:info@lap-studios.com"
                      >
                        info@lap-studios.com
                      </a>
                    </dd>
                  </div>
                </dl>
                <p className="mt-10 text-xs text-zinc-400">
                  While we wish we could collaborate with everyone, our
                  commitment to quality and high demand means we can only take
                  on a limited number of projects
                </p>
              </FadeIn>
            </div>
          </div>
          <Form messagePlaceHolder="Send us at least one reference track. Feel free to share the styles, other reference tracks, labels, or artists that inspire you. What specific elements do you love in your references? The more we know, the better we can bring your musical vision to life." />
        </div>
      </div>
    </main>
  );
};

export default GhostProduction;
