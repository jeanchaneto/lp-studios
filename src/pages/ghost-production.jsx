import TimeLine from "@/components/TimeLine";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const benefits = [
  "100% Ownership",
  "100% Confidential",
  "Guaranteed Satisfaction",
  "High-Quality Production",
  "Release-Ready",
  "WAV + Project Files",
];

const GhostProduction = () => {
  return (
    <main className=" bg-zinc-950  py-24 sm:py-32">
      <section className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-base font-semibold  text-teal-300">
              Custom Ghost Production{" "}
            </h1>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
              Where Your Vision Meets Our Expertise
            </h2>
            <p className="mt-6 text-lg  text-zinc-400">
              Are you aiming for unparalleled quality and a track that stands up
              to industry standards? You're in the right place. Welcome to a
              highly exclusive opportunity offered by a small, in-demand team
              that has enabled tracks to get signed on top labels and gain
              recognition from leading DJs globally.
            </p>
          </div>
        </div>
      </section>

      <section className=" py-24 sm:py-32">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <Image src="/images/why-choose-us-photo.jpg" alt="Midi keyboard" className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" width={384} height= {384} />
              <div className="w-full flex-auto">
                <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                  Why Choose Us?
                </h2>
                <p className="mt-6 text-lg text-zinc-400">
                We do more than just produce tracks, we aim to contribute to your musical journey. Many of our
                  tracks have been signed by top labels and received accolades
                  from industry giants. Moreover, our commitment to absolute
                  customer satisfaction means{" "}
                  <span className=" font-semibold text-teal-400 ">
                    {" "}
                    we don't accept payment until you are 100% thrilled with the
                    demo
                  </span>{" "}
                  we create for you.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base text-zinc-200 sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="h-7 w-5 flex-none"
                        aria-hidden="true"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <a
                    href="#"
                    className="text-sm font-semibold text-teal-300"
                  >
                    Get started <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TimeLine />
    </main>
  );
};

export default GhostProduction;
