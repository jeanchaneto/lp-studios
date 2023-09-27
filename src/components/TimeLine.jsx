import { FadeIn, FadeInStagger } from "./FadeIn";

const timelineData = [
  {
    id: 1,
    status: "Initial Contact",
    description:
      "Reach out with your vision, be it a specific theme, a reference track, or even a particular artist or label you admire. Reach out to us below to get started.",
    isActive: true,
  },
  {
    id: 2,
    status: "Free Demo Creation",
    description:
      "We bring your vision to life in a demo. You get to review it and suggest any revisions, ensuring that the end result is precisely what you were hoping for.",
    isActive: true,
  },
  {
    id: 3,
    status: "Satisfaction-Guaranteed Payment",
    description:
      "After you’re fully satisfied with the track’s composition and arrangement, we’ll send a secure payment link your way.",
    isActive: true,
  },
  {
    id: 4,
    status: "Final Delivery",
    description:
      "With payment confirmed, we'll finalize the mix and mastering. You'll receive all the polished files, ready to make waves in the music world.",
    isActive: true,
  },
];

const TimeLine = () => {
  return (
    <section className=" mt-24 py-24 sm:py-32  ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 md:text-center ">
        <FadeIn>
          <h2 className=" text-zinc-100 mx-auto text-3xl font-bold tracking-tight sm:text-4xl ">
            The Process:
            <br /> Bespoke Production, Tailored to You
          </h2>
        </FadeIn>
        <FadeIn>
          <div className=" text-base space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-200 before:to-transparent mt-10 md:bg-gradient-radial from-teal-950/80 to-60% to-transparent ">
            {timelineData.map((item) => (
              <div
                key={item.id}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                  item.isActive ? "is-active" : ""
                }`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-teal-400 bg-zinc-800 group-[.is-active]:bg-teal-400 text-zinc-500 group-[.is-active]:text-teal-50  shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500 ">
                  <svg
                    className="#09090b"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fillRule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-xl  p-4 border border-zinc-100/10 ">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-zinc-100">{item.status}</div>
                  </div>
                  <div className="text-zinc-400 text-left">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TimeLine;
