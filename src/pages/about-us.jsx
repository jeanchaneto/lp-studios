import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import LogoCloud from "@/components/LogoCloud";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const values = [
  {
    name: "A Track Record of Success",
    description:
      "Our passion and expertise have led us to substantial success in the industry. Many of the tracks we've produced have been signed by top labels and gained recognition from leading DJs globally. Moreover, some of our clients have risen to prominence in the music scene due to our top-notch production services.",
  },
  {
    name: "Specialized in Genres We Love",
    description:
      "Unlike many in the industry, we chose to specialize in genres that we are passionate about. As Afro House ghost producers, along with expertise in Melodic House & Techno, Organic House, and Deep House, we ensure that each production resonates with authentic flavor and technical prowess.",
  },
  {
    name: "Expert Insight into Industry Expectations",
    description:
      "With over a decade in the music industry, we know what labels are looking for and how to meet those high expectations. Our deep understanding gives us an edge in crafting tracks that not only meet but often exceed industry standards.",
  },
  {
    name: "Passionate About Your Success",
    description:
      "We’re invested in your journey and success in the music industry. It’s more than just producing tracks, it’s about understanding your vision, aspirations, and the impact you want to make. We’re here to support and elevate your career.",
  },
  {
    name: "A Small Team with Big Impact",
    description:
      "Our small but sought-after team prioritizes individual attention for each project, deploying profound understanding and expertise. This ensures the delivery of tracks that meet the most elevated standards.",
  },
  {
    name: "State-of-the-Art Tools and Analog Equipment",
    description:
      "To provide you with the best possible sound, we utilize state-of-the-art audio plugins and analog equipment. This blend of cutting-edge technology and classic sound manipulation allows us to achieve a rich, textured output that distinguishes us from the rest.",
  },
];

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <main className=" ">
       <Head>
        <title>LAP Studios | About Us</title>
        <meta
          name="description"
          content="LAP Studios | Ghost producers with over a decade experience, dedicated to crafting sounds that resonate and make a bold statement in the industry."
        />
        <meta
          property="og:title"
          content="LAP Studios | Ghost Production & Top Ghost Producers"
        />
        <meta
          property="og:description"
          content="Discover LAP Studios, your premier ghost producers with over 10 years of experience in crafting distinctive music. Dive into our passion, specialization, and commitment to delivering sounds that resonate and make a powerful statement in the industry."
        />
        <meta property="og:image" content="/images/main-og-image.png" />
      </Head>
      {/* Hero section */}
      <section className="relative ">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-12 pb-24 sm:pb-32 lg:px-8 ">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <FadeIn className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <p className="text-base font-semibold  text-teal-300">
                  About us
                </p>
                <h1 className=" mt-2 text-4xl font-kallisto text-zinc-100 sm:text-6xl">
                  Your Premier Ghost Producers
                </h1>
                <p className="relative mt-6 text-xl leading-8 text-zinc-400 sm:max-w-md lg:max-w-none">
                  At LAP Studios, we bring more than 10 years of experience in
                  music production to the table. We are more than your average ghost producers, we are passionate and specialized music producers, dedicated to delivering music that makes a statement.
                </p>
              </FadeIn>
              <div className=" bg-gradient-radial from-zinc-400/20 to-50% to to-transparent ">
                <motion.div
                  className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
                  initial={false}
                  animate={
                    isLoaded && isInView
                      ? {
                          WebkitMaskImage: visibleMask,
                          maskImage: visibleMask,
                        }
                      : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                  }
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: false }}
                  onViewportEnter={() => setIsInView(true)}
                  onLoad={() => setIsLoaded(true)}
                >
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src={"/images/about-us-photo1.jpeg"}
                        width={176}
                        height={264}
                        alt="LAP Studios equipment"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover "
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src={"/images/about-us-photo2.jpeg"}
                        width={176}
                        height={264}
                        alt="LAP Studios equipment"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover "
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src={"/images/about-us-photo3.jpeg"}
                        width={176}
                        height={264}
                        alt="LAP Studios equipment"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover "
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src={"/images/about-us-photo4.jpeg"}
                        width={176}
                        height={264}
                        alt="LAP Studios equipment"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover "
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src={"/images/about-us-photo5.jpeg"}
                        width={176}
                        height={264}
                        alt="LAP Studios equipment"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover "
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="mx-auto mt-24 sm:mt-32 max-w-7xl px-6 pb-24 sm:pb-32  lg:px-8 bg-gradient-radial  from-zinc-700/20 to-40% to to-transparent ">
        <FadeIn className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Let's Elevate Your Career
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Join us in crafting the track that could be your breakthrough. Your
            vision, combined with our expertise, will produce music that’s ready to get people moving on the dancefloor.
          </p>
        </FadeIn>
        <FadeInStagger faster="true">
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <FadeIn key={value.name}>
                <dt className="font-semibold text-teal-500">{value.name}</dt>
                <dd className="mt-1 text-zinc-400">{value.description}</dd>
              </FadeIn>
            ))}
          </dl>
        </FadeInStagger>
      </section>
      <LogoCloud />
    </main>
  );
}
