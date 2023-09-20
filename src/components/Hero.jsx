import Image from "next/image";
import HeroImage from "../../public/images/heroImage.svg";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "./FadeIn";

const Hero = () => {
  return (
    <section className="  ">
      <div className="relative  bg-[url('/images/heroImage.svg')] bg-no-repeat bg-cover bg-opacity-40 ">
     
        <div className=" z-20 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 ">
          {" "}
          <FadeIn>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto ">
              <h2 className="text-base font-kallisto tracking-widest text-zinc-100 font-semibold">
                Afro House | Melodic house & Techno | Organic House | Deep House
              </h2>
              <h1 className="mt-6 max-w-7xl text-5xl font-kallisto font-bold text-transparent sm:text-7xl bg-gradient-to-r from-teal-200 via-blue-200 to-teal-500 bg-clip-text inline-block">
                Ghost Production
                <br />
                Exclusive Tracks
              </h1>
              <p className="mt-6 text-xl leading-8 text-zinc-400">
                Kickstart your career in music with tracks that the top DJs rave
                about and that consistently top the Beatport charts. At LAP
                Studios, we're the pulse of melodic house & techno, afro house,
                deep house and organic house. Dive into our curated collection
                or get a bespoke track tailored for you. Quality and vibe are
                our game.
              </p>
              <FadeInStagger>
                <div className="mt-10 flex flex-col sm:flex-row gap-6">
                  <FadeIn>
                    <Link
                      href="/ghost-produced-tracks"
                      className="relative rounded-xl px-5 py-2.5 overflow-hidden group bg-blue-700  hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300 flex justify-center"
                    >
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <span className="relative">Browse tracks</span>
                    </Link>
                  </FadeIn>
                  <FadeIn>
                    <Link
                      href="/ghost-production"
                      className="relative rounded-xl px-5 py-[8px] overflow-hidden group border border-zinc-100/20 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300 flex justify-center"
                    >
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-60 ease"></span>
                      <span className="relative">Custom production</span>
                    </Link>
                  </FadeIn>
                </div>
              </FadeInStagger>
            </div>
          </FadeIn>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0  ">
            {/* IMAGE */}
            {/* <Image src={HeroImage} className=" opacity-40 max-w-lg " /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
