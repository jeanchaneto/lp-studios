
import TrackCard from "./TrackCard";

const tracks = [
  {
    id: 1,
    title: "Heaven",
    genre: "Afro House",
    bpm: 120,
    songKey: "Bmajor",
    image: "/images/albumcover.jpg",
    description:
      "An emotional Afro house track suitable for label like Get Physical",
    price: 1199,
    url: "#",
    previewUrl: "/audio/testaudio.mp3",
  },
  {
    id: 2,
    title: "Festival",
    genre: "Melodic Techno",
    bpm: 122,
    songKey: "Amajor",
    image: "/images/albumcover.jpg",
    description:
      "An emotional Afro house track suitable for label like Get Physical",
    price: 1599,
    url: "#",
    previewUrl: "/audio/testaudio2.mp3",
  },
  {
    id: 3,
    title: "Toots",
    genre: "Organic House",
    bpm: 121,
    songKey: "Cminor",
    image: "/images/albumcover.jpg",
    description:
      "An emotional Afro house track suitable for label like Get Physical",
    price: 999,
    url: "#",
    previewUrl: "/audio/testaudio3.mp3",
  },
];

const TrackShowcase = () => {
  return (
    <section
      role="list"
      className="space-y-3 px-6 lg:px-8 bg-zinc-950 pb-96   "
    >
      <div className=" mx-auto max-w-7xl">
        {tracks.map((track) => (
          <div key={track.id}>
            <TrackCard {...track} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrackShowcase;
