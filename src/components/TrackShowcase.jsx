import Link from "next/link";
import TrackCard from "./TrackCard";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { useLatestTracks } from "@/hooks/useLatesttracks";

const TrackShowcase = () => {
  const { latestTracks, error } = useLatestTracks();

  return error ? (
    <p>Error downloading tracks</p>
  ) : latestTracks ? (
    <section
      role="list"
      className="space-y-3  py-24 sm:py-32 lg:py-40"
      id="latest-tracks"
    >
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <h2 className=" text-3xl sm:4xl font-bold tracking-tight text-zinc-100 mb-6 ">
            Latest Tracks
          </h2>
        </div>
      </FadeIn>
      <FadeInStagger>
        <div className="grid grid-cols-1 min-[556px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-7xl px-6 lg:px-8 ">
          {latestTracks.map((track) => (
            <div key={track.id}>
              <TrackCard {...track} />
            </div>
          ))}
        </div>
      </FadeInStagger>
      <FadeIn>
        <div className=" flex justify-center pt-6">
          <Link
            href="/ghost-produced-tracks"
            className="text-sm px-3 py-1.5 font-semibold leading-6 rounded-xl text-teal-300 flex gap-2 hover:ring-1 hover:ring-offset-1 hover:ring-teal-200 transition-all ease-out duration-300 "
          >
            <p>Listen to all</p>{" "}
            <Image
              src="/icons/right-arrow.png"
              width={20}
              height={20}
              alt="Learn more"
            />
          </Link>
        </div>
      </FadeIn>
    </section>
  ) : (
    <p>Loading</p>
  );
};

export default TrackShowcase;
