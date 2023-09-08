import Form from "@/components/Form";
import TimeLine from "@/components/TimeLine";
import {
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
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
            <p className="mt-6 text-xl  text-zinc-400">
              Are you aiming for unparalleled Afro House, Melodic House & Techno,
              Organic House, or Deep House? You're in the right place. Welcome
              to a highly exclusive opportunity offered by a small, in-demand
              team that has enabled tracks to get signed on top labels and gain
              recognition from leading DJs globally.
            </p>
          </div>
        </div>
      </section>

      <section className=" py-24 sm:py-32">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-teal-950/20 px-6 py-16 ring-1 ring-teal-300/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <Image
                src="/images/why-choose-us-photo.jpg"
                alt="Midi keyboard"
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                width={384}
                height={384}
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                  Why Choose Us?
                </h2>
                <p className="mt-6 text-lg text-zinc-400">
                  We do more than just produce tracks, we aim to contribute to
                  your musical journey. Many of our tracks have been signed by
                  top labels and received accolades from industry giants.
                  Moreover, our commitment to absolute customer satisfaction
                  means{" "}
                  <span className=" font-semibold text-teal-400 ">
                    {" "}
                    we don't accept payment until you are 100% thrilled with the
                    track
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
                  <a href="#contact-ghost-production" className="text-sm font-semibold text-teal-300">
                    Get started <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TimeLine />

      <section className="container mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32  ">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-white/10 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Pricing
            </h2>
            <p className="mt-6 text-lg text-zinc-400">
              At LAP Studios, our focus is on delivering professional Afro
              House, Melodic House & Techno, Organic House, or Deep House. Our pricing
              is both transparent and fixed, mirroring our dedication to
              quality.
            </p>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-teal-950/20  py-10 text-center ring-1 ring-inset ring-teal-300/50 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-zinc-300">
                  One original track
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-zinc-100">
                    1200 €
                  </span>
                </p>
                <a
                  href="#contact-ghost-production"
                  className="mt-10 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-zinc-100 shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
      id="contact-ghost-production"
      className="relative bg-zinc-950 my-24 sm:my-32 ">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <Image
            src="/images/contact-photo.jpg"
            width={707}
            height={1000}
            className="h-64 w-full  object-cover sm:h-80 lg:absolute lg:h-full lg:rounded-lg mix-blend-plus-lighter brightness-50 contrast-125"
            alt="Studio headphones"
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className=" sm:mb-8 sm:flex pb-12 sm:pb-0 ">
                <div className="relative rounded-full px-6 py-1 text-xs  text-yellow-500 ring-1 ring-yellow-200/30 ">
                While we wish we could collaborate with everyone, our commitment to quality and high demand means we can only take on a limited number of projects.{" "}
                </div>
              </div>
              <h2 
              
              className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Let's make music
              </h2>
              <p className="mt-2 text-lg text-zinc-400">
                Ready to transform your musical ideas into reality? Fill out the
                form below to kick-start your collaboration with us.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GhostProduction;
