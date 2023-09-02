import Link from "next/link";
import TrackCard from "./TrackCard";
import { tracks } from "@/data/tracks";
import Image from "next/image";

const TrackShowcase = () => {
  return (
    <section
      role="list"
      className="space-y-3 px-6 lg:px-8 bg-zinc-950 py-24 sm:py-32 lg:py-40 "
    >
      <div className="mx-auto max-w-7xl ">
        <h2 className=" text-5xl font-bold tracking-tight text-teal-600 mb-6">
          Latest Tracks
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl ">
        {tracks.map((track) => (
          <div key={track.id}>
            <TrackCard {...track} />
          </div>
        ))}
      </div>
      <div className=" flex justify-center pt-6">
        <Link
          href="/ghost-produced-tracks"
          className="text-sm font-semibold leading-6 text-teal-300 flex gap-2 "
        >
          <p>Listen to all</p>{" "}
          <Image
            src="/icons/right-arrow.png"
            width={14}
            height={14}
            alt="Learn more"
          />
        </Link>
      </div>
    </section>
  );
};

export default TrackShowcase;
