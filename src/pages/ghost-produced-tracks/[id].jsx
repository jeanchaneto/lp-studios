import Benefits from "@/components/Benefits";
import WaveSurferPlayer from "@/components/WaveSurferPlayer";
import { tracks } from "@/data/tracks";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import ProjectFileFeatures from "@/components/ProjectFileFeatures";
import InlineLink from "@/components/InlineLink";

const TrackPage = ({ track }) => {
  const pages = [
    {
      name: "ghost-produced-tracks",
      href: "/ghost-produced-tracks",
      current: false,
    },
    {
      name: track.title,
      href: `/ghost-produced-tracks/${track.id}`,
      current: true,
    },
  ];

  return (
    <section className="bg-zinc-950">
      <div className=" bg-zinc-950 relative isolate overflow-hidden  pt-24 sm:pt-32 pb-8 sm:pb-16">
        <Image
          src={track.image}
          width={1097}
          height={845}
          alt="Album cover"
          className="absolute opacity-50 blur-xl inset-0 -z-20 h-full w-full object-cover object-right-top"
          quality={1}
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-950 to-zinc-950/0 "
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 z-20 ">
          <nav className="flex mb-6 " aria-label="Breadcrumb">
            <ol
              role="list"
              className="flex items-center text-zinc-500  space-x-4"
            >
              <li>
                <div>
                  <Link href="/" className=" hover:text-gray-500">
                    <HomeIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </Link>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <a
                      href={page.href}
                      className="ml-4 text-sm text-zinc-500 "
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mx-auto flex gap-6 sm:gap-16 items-center lg:mx-0 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl ">
              {track.title}
            </h1>
            <Link
          href="#"
          className="relative rounded min-w-fit max-w-fit px-2 py-1 overflow-hidden group bg-blue-700  hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <div className="flex items-center">
            <svg
              id="Layer_1"
              fill="#f4f4f5"
              viewBox="0 0 24 24"
              className="mr-1 h-4 w-4 text-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m22.294 7.827a1.622 1.622 0 0 0 -1.314-.674h-13.924l-.837-2.4a2 2 0 0 0 -1.891-1.345h-2.328a.6.6 0 0 0 0 1.2h2.328a.8.8 0 0 1 .758.539l.972 2.792.009.025 2.246 6.463a3.407 3.407 0 0 0 3.217 2.289h6.044a3.4 3.4 0 0 0 3.226-2.323l1.714-5.1a1.626 1.626 0 0 0 -.22-1.466zm-.916 1.08-1.713 5.1a2.206 2.206 0 0 1 -2.092 1.5h-6.044a2.207 2.207 0 0 1 -2.084-1.482l-1.972-5.671h13.506a.42.42 0 0 1 .4.554zm-8.457 10.44a1.275 1.275 0 1 1 -1.275-1.275 1.275 1.275 0 0 1 1.275 1.276zm6.26 0a1.275 1.275 0 1 1 -1.275-1.275 1.275 1.275 0 0 1 1.275 1.276z" />
            </svg>
            <span className="relative whitespace-nowrap">{track.price} €</span>
          </div>
        </Link>
          </div>

          <div className="mx-auto  lg:mx-0  z-20">
            <WaveSurferPlayer
              height={250}
              waveColor="#a1a1aa"
              progressColor="#0f766e"
              url={track.previewUrl}
              className=" w-full   "
              image={track.image}
              coverWidth={256}
              coverHeight={256}
              singlePage
            />
          </div>
          <div className="mx-auto mt-10  lg:mx-0 lg:max-w-none  z-20 ">
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {track.description}
            </p>
            <ul className="flex flex-wrap mt-6  gap-x-8 gap-y-6 text-base font-semibold leading-7 text-zinc-300 md:flex lg:gap-x-10 whitespace-nowrap ">
              <li className=" text-teal-300 ">
                <p>{track.genre}</p>
              </li>
              <li className="px-2 py-1 bg-teal-950/60 rounded-lg max-w-fit ">
                <p>{track.duration} min</p>
              </li>
              <li className="px-2 py-1 bg-teal-950/60 rounded-lg max-w-fit">
                <p>{track.bpm} Bpm</p>
              </li>
              <li className="px-2 py-1 bg-cyan-950/60 rounded-lg max-w-fit ">
                <p>{track.songKey}</p>
              </li>
              <li className="px-2 py-1 bg-zinc-800/60 rounded-lg max-w-fit ">
                <p>Master</p>
              </li>
              <li className="px-2 py-1 bg-zinc-800/60 rounded-lg max-w-fit ">
                <p>Premaster</p>
              </li>
              <li className="px-2 py-1 bg-zinc-800/60 rounded-lg max-w-fit ">
                <p>Stems</p>
              </li>
              <li className="px-2 py-1 bg-zinc-800/60 rounded-lg max-w-fit ">
                <p>{track.daw} project</p>
              </li>
            </ul>
            <p className="text-zinc-400 mt-10">
              Love the track but require modifications?{" "}
              <InlineLink href="/contact">Contact us</InlineLink>{" "}
              <span className="  underline underline-offset-4">
                before purchasing
              </span>
              , and we'll tailor it to your preferences.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <Benefits />
      </div>
      <ProjectFileFeatures />
    </section>
  );
};

export default TrackPage;

export async function getStaticPaths() {
  const paths = tracks.map((track) => ({
    params: { id: track.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const track = tracks.find((track) => track.id === parseInt(params.id));

  return {
    props: { track },
  };
}
