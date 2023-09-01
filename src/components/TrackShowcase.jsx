
import Link from "next/link";
import TrackCard from "./TrackCard";
import { tracks } from "@/data/tracks";


const TrackShowcase = () => {
  return (
    <section
      role="list"
      className="space-y-3 px-6 lg:px-8 bg-zinc-950 py-24 sm:py-32 lg:py-40 "
    >
      <div className="mx-auto max-w-7xl" >
      <h2 className=" text-zinc-100 sm:text-4xl tracking-tight text-3xl font-bold mb-6" >Latest Tracks</h2></div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mx-auto max-w-7xl ">
        {tracks.map((track) => (
          <div key={track.id}>
            <TrackCard {...track} />
          </div>
        ))}
      </div>
      <div className=" flex justify-center pt-6" >
      <Link
        href="#"
        className=" rounded-md px-2.5 py-1.5 text-sm font-semibold text-teal-300 shadow-sm ring-1 ring-inset ring-teal-300 "
      >
        Listen to all
      </Link></div>
    </section>
  );
};

export default TrackShowcase;
