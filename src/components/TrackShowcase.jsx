import {
  EnvelopeIcon,
  PhoneIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  ShoppingCartIcon,
  PlayIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const tracks = [
  {
    id: 1,
    title: "Heaven",
    genre: "Afro House",
    image: "/images/albumcover.jpg",
    description:
      "An emotional Afro house track suitable for label like Get Physical",
    price: 1199,
    url: "#",
    previewUrl: "#",
  },
  {
    id: 2,
    title: "Festival",
    genre: "Melodic Techno",
    image: "/images/albumcover.jpg",
    description:
      "An emotional Afro house track suitable for label like Get Physical",
    price: 1599,
    url: "#",
    previewUrl: "#",
  },
  {
    id: 3,
    title: "Toots",
    genre: "Organic House",
    image: "/images/albumcover.jpg",
    description:
      "An emotional Afro house track suitable for label like Get Physical",
    price: 999,
    url: "#",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "Volcan",
    genre: "Deep house",
    image: "/images/albumcover.jpg",
    description:
      "An emotional Afro house track suitable for label like Get Physical",
    price: 1099,
    url: "#",
    previewUrl: "#",
  },
  {
    id: 5,
    title: "Rita",
    genre: "Afro House",
    image: "/images/albumcover.jpg",
    description:
      "An emotional Afro house track suitable for label like Get Physical",
    price: 1199,
    trackURL: "#",
    previewUrl: "#",
  },
  {
    id: 6,
    title: "Diabolo",
    genre: "Melodic Techno",
    image: "/images/albumcover.jpg",
    description:
      "An emotional Afro house track suitable for label like Get Physical",
    price: 1199,
    url: "#",
    previewUrl: "#",
  },
];

const TrackShowcase = () => {
  return (
    <section
      className=" text-zinc-400 bg-gradient-to-b bg
    
    from-zinc-950 to-zinc-900 "
    >
      <div className=" px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
            Buy Exclusive tracks
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Each track is unique and limited to 1 copy. Enjoy 100% exclusivity,
            rights, and royalties. Whether you're releasing, remixing, or
            reinventing, the stage is yours.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl  px-6 pb-24 sm:pb-32  lg:gap-x-10 lg:px-8 lg:pb-40 ">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 min-[742px]:grid-cols-2 min-[1120px]:grid-cols-3 "
        >
          {/* CARD */}
          {tracks.map((track) => (
            <div
              className="flex border w-full min-[742px]:w-[348px] border-zinc-400/20 rounded-lg p-2 mx-2 sm:mx-0 bg-zinc-800/50 hover:bg-zinc-800/90 "
              key={track.id}
            >
              <div className=" group mr-4 rounded-lg flex-shrink-0 cursor-pointer relative bg-zinc-950 ">
                <Image
                  src={track.image}
                  alt="album cover"
                  width={112}
                  height={112}
                  className=" rounded-lg opacity-80 object-cover "
                />
                <div className="ab">
                  <PlayIcon className="h-12 absolute top-1/2 left-1/2 z-20 text-zinc-100 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-300 " />
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-lg font-bold text-zinc-100">
                  {track.title}
                </h3>
                <p className=" mt-1 text-teal-600 ">{track.genre}</p>

                <div className=" mt-5 flex gap-2  w-full  ">
                  <Link
                    href="#"
                    type="button"
                    className=" h-7 whitespace-nowrap  flex items-center gap-x-1.5 rounded-md bg-teal-700 px-2.5 py-1.5 text-sm font-semibold text-zinc-100 shadow-sm shadow-teal-700/40 hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                  >
                    <ShoppingCartIcon
                      className="-ml-0.5 h-4 w-4"
                      aria-hidden="true"
                    />
                    {track.price}
                  </Link>
                  <Link
                    href="#"
                    type="button"
                    className="  whitespace-nowrap  h-7 flex items-center gap-x-1.5 rounded-md bg-teal-900/50 px-2.5 py-1.5 text-sm font-semibold text-zinc-100  hover:bg-teal-800/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                  >
                    <InformationCircleIcon
                      className="-ml-0.5 h-4 w-4"
                      aria-hidden="true"
                    />
                    Track Info
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <div className="mt-8 mx-auto  flex justify-center  ">
       
        <a
        href="#"
        className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-teal-300 shadow-sm ring-1 ring-inset ring-teal-300 hover:bg-teal-900"
      >
       Browse more tracks
      </a>
      </div>
      </div>
      
    </section>
  );
};

export default TrackShowcase;
