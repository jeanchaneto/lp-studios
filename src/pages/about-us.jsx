import LogoCloud from "@/components/LogoCloud";
import Image from "next/image";

const values = [
  {
    name: "A Track Record of Success",
    description:
      "Our passion and expertise have led us to substantial success in the industry. Many of the tracks we've produced have been signed by top labels and gained recognition from leading DJs globally. Moreover, some of our clients have risen to prominence in the music scene due to our top-notch production services.",
  },
  {
    name: "Specialized in Genres We Love",
    description:
      "Unlike many in the industry, we chose to specialize in genres that we are passionate about. As Afro House ghost producers, along with expertise in Melodic House & Techno, Organic House, and Deep House, we ensure that each production resonates with authentic flavor and technical prowess.",
  },
  {
    name: "Expert Insight into Industry Expectations",
    description:
      "With over a decade in the music industry, we know what labels are looking for and how to meet those high expectations. Our deep understanding gives us an edge in crafting tracks that not only meet but often exceed industry standards.",
  },
  {
    name: "Passionate About Your Success",
    description:
      "Our commitment to absolute customer satisfaction means we don't accept payment until you are 100% thrilled with the demo we create for you. We do more than just ghost production; we contribute to your journey towards music success.",
  },
  {
    name: "A Small Team with Big Impact",
    description:
      "Despite being a small team, we are in high demand. This allows us to focus on each project with an unrivaled depth of understanding and skill, ensuring that you get a track that stands up to the highest standards.",
  },
  {
    name: "State-of-the-Art Tools and Analog Equipment",
    description:
      "To provide you with the best possible sound, we utilize state-of-the-art audio plugins and analog equipment. This blend of cutting-edge technology and classic sound manipulation allows us to achieve a rich, textured output that distinguishes us from the rest.",
  },
];

export default function AboutUs() {
  return (
    <main className=" bg-neutral-950 ">
      {/* Hero section */}
      <section className="relative ">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 ">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <p className="text-base font-semibold  text-teal-300">
                  About us
                </p>
                <h1 className=" mt-2 text-4xl font-kallisto text-zinc-100 sm:text-6xl">
                  Your Trusted Ghost Producers
                </h1>
                <p className="relative mt-6 text-xl leading-8 text-zinc-400 sm:max-w-md lg:max-w-none">
                  At LAP Studios, we bring more than 10 years of experience in
                  music production to the table. We are not just your average
                  producers; we are specialized ghost producers dedicated to
                  delivering unparalleled quality in each track.
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src={"/images/about-us-photo1.jpg"}
                      width={176}
                      height={264}
                      alt="LAP Studios equipment"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src={"/images/about-us-photo2.jpg"}
                      width={176}
                      height={264}
                      alt="LAP Studios equipment"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src={"/images/about-us-photo3.jpg"}
                      width={176}
                      height={264}
                      alt="LAP Studios equipment"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      src={"/images/about-us-photo4.jpg"}
                      width={176}
                      height={264}
                      alt="LAP Studios equipment"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src={"/images/about-us-photo5.jpg"}
                      width={176}
                      height={264}
                      alt="LAP Studios equipment"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="mx-auto mt-24 sm:mt-32 max-w-7xl px-6  lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Let's Elevate Your Career
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Join us in crafting the track that could be your breakthrough.. Your
            vision, combined with our expertise, will create a harmonious
            symphony that the world needs to hear.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-teal-500">{value.name}</dt>
              <dd className="mt-1 text-zinc-400">{value.description}</dd>
            </div>
          ))}
        </dl>
      </section>
      <LogoCloud />
    </main>
  );
}
