import Link from "next/link";
import TrackCard from "@/components/TrackCard";
import { tracks } from "@/data/tracks";
import Image from "next/image";
import { features } from "@/libs/constants";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Head from "next/head";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import Banner from "../../../public/images/tracks-cover.jpg";

export default function Tracks() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 0.25], [0, 100]);

  return (
    <main className="bg-zinc-950 relative ">
      <Head>
        <title>Ghost Produced Tracks | LAP Studios</title>
      </Head>

      <section className=" isolate py-24 sm:py-32 relative sm:h-[560px] overflow-hidden 
      ">
        <motion.div
          style={{ y }}
          className=" absolute w-screen -top-40 inset-x-0  -z-10 h-[560px] -translate-y-52  "
        >
          <Image
            src={Banner}
            className=" w-full  h-[900px] object-cover  opacity-70  "
            alt=""
          />
        </motion.div>

        <FadeIn>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 z-50 ">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <p className="text-base font-semibold text-teal-300">
                Discover Your Next Hit
              </p>
              <h1 className="mt-2 text-5xl font-kallisto text-zinc-100 sm:text-6xl">
                Ghost Produced Tracks
              </h1>
              <p className="mt-6 text-xl text-zinc-400">
                Explore our release-ready ghost-produced tracks in Afro House,
                Melodic House & Techno, and Organic House.
              </p>
              <dl className="mt-6 grid max-w-lg grid-cols-1 gap-2 text-base text-zinc-400 min-[400px]:grid-cols-2 lg:mx-0  lg:gap-x-16 whitespace-nowrap ">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9 font-light">
                    <dt className="inline text-zinc-400">
                      <Image
                        src={feature.icon}
                        className=" absolute left-1 top-1 object-cover object-center"
                        alt="LAP music studio"
                        width={20}
                        height={20}
                      />
                      {feature.name}
                    </dt>{" "}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </FadeIn>
      </section>
      <section className=" mx-auto max-w-7xl px-6 lg:px-8 bg-zinc-950 py-24 sm:py-32 lg:pt-40 ">
        <FadeInStagger>
          <div className="grid grid-cols-1 min-[556px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-7xl ">
            {tracks.map((track) => (
              <div key={track.id}>
                <FadeIn>
                  <TrackCard {...track} />
                </FadeIn>
              </div>
            ))}
          </div>
        </FadeInStagger>
      </section>

      <section className="bg-zinc-950">
        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute inset-0 flex px-6 items-center "
            aria-hidden="true"
          >
            <div className="w-full border-t border-zinc-100/10" />
          </div>
        </div>
        <FadeInStagger>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 flex flex-col min-[550px]:flex-row lg:items-center lg:px-8 text-center min-[550px]:text-left ">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Looking for a custom track ?
                <br />
                Explore our tailored ghost production services.
              </h2>
            </FadeIn>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 mx-auto flex-shrink-0">
              <FadeIn>
                <Link
                  href="/ghost-production"
                  className="text-sm px-3 py-1.5 font-semibold leading-6 border-teal-300 rounded-xl text-teal-300 flex gap-2 hover:ring-1 hover:ring-offset-1 hover:ring-teal-200 transition-all ease-out duration-300 "
                >
                  <p>Learn more</p>{" "}
                  <Image
                    src="/icons/right-arrow.png"
                    width={20}
                    height={20}
                    alt="Learn more"
                  />
                </Link>
              </FadeIn>
            </div>
          </div>
        </FadeInStagger>
        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute inset-0 px-6 flex items-center "
            aria-hidden="true"
          >
            <div className="w-full border-t border-zinc-100/10" />
          </div>
        </div>
      </section>

      <section className=" py-16 sm:py-24 ">
        <div
          className="mx-auto max-w-7xl rounded-3xl sm:px-6 border border-zinc-100/10  lg:px-8 relative group/newsletter"
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/newsletter:opacity-100 z-0 "
            style={{
              background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(45, 212, 191, 0.10),
              transparent 80%
            )
          `,
            }}
          />
          <div className="relative isolate overflow-hidden px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <FadeIn>
              <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Be the First to Know: <br /> Secure Your Track Before It's Gone
                !
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-center leading-8 text-zinc-400 text-base">
                We're a small team of ghost producers committed to quality over
                quantity, which means we only release a limited number of
                tracks. These usually get snatched up quickly! Register your
                email now to be the first to know when a new track is released.
              </p>
            </FadeIn>
            <FadeIn>
              <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-zinc-100/5 px-3.5 py-2 text-zinc-100 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-teal-400 transition-all duration-300  sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-xl px-3.5 py-2.5 text-sm font-semibold 
                overflow-hidden group bg-blue-700  hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300 flex justify-center relative "
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Notify me</span>
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
