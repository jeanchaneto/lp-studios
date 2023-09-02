import Link from "next/link";
import TrackCard from "@/components/TrackCard";
import { tracks } from "@/data/tracks";
import Image from "next/image";

const features = [
  {
    name: "100% Ownership",
    icon: "/icons/ownership.png",
  },
  {
    name: "Release-Ready",
    icon: "/icons/release.png",
  },
  {
    name: "Exclusive license",
    icon: "/icons/exclusive.png",
  },
  {
    name: "WAV + project files",
    icon: "/icons/music-file.png",
  },
  {
    name: "Unique production",
    icon: "/icons/unique.png",
  },
  {
    name: "100% Confidential",
    icon: "/icons/incognito.png",
  },
];

export default function Tracks() {
  return (
    <section className="bg-zinc-950 py-24 sm:py-32">
      <div className=" pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base font-semibold text-teal-700">
              Discover Your Next Hit
            </p>
            <h2 className="mt-2 text-5xl font-bold tracking-tight text-teal-500 sm:text-6xl">
              Ghost Produced Tracks
            </h2>
            <p className="mt-6 text-xl text-zinc-400">
              Explore our release-ready ghost-produced
              tracks in Afro House, Melodic Techno, and Organic House.
            </p>

            <dl className="mt-6 grid max-w-lg grid-cols-1 gap-2 text-base text-zinc-400 sm:grid-cols-2 lg:mx-0  lg:gap-x-16 whitespace-nowrap ">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-zinc-400">
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
      </div>
      <div
        role="list"
        className="space-y-3 px-6 lg:px-8 bg-zinc-950 pt-24 sm:pt-32 lg:pt-40 "
      >
        <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl ">
          {tracks.map((track) => (
            <div key={track.id}>
              <TrackCard {...track} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-400 sm:text-4xl">
            Looking for a custom track ?
            <br />
            Explore our tailored ghost production services.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/ghost-production"
              className="text-sm font-semibold leading-6 text-teal-300 flex gap-2 border py-2.5 px-3.5 rounded-md border-teal-300 "
            >
              <p>Learn more</p>{" "}
              <Image
                src="/icons/right-arrow.png"
                width={14}
                height={14}
                alt="Learn more"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 py-16 sm:py-24 ">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-zinc-900/40 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tight text-teal-600 sm:text-5xl">
              Be the First to Know: Secure Your Track Before It's Gone !
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center leading-8 text-zinc-400 text-xl">
              We're a small team of ghost producers committed to quality over
              quantity, which means we only release a limited number of tracks.
              These usually get snatched up quickly! Register your email now to
              be the first to know when a new track is released.
            </p>
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
                className="min-w-0 flex-auto rounded-md border-0 bg-zinc-100/5 px-3.5 py-2 text-zinc-100 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-teal-400 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Notify me
              </button>
            </form>
            {/* <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#06b6d4" />
                <stop offset={1} stopColor="#14b8a6" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg> */}
          </div>
        </div>
      </div>
    </section>
  );
}
