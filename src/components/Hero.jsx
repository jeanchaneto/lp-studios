import Image from "next/image";
import HeroImage from "../../public/images/heroImage.svg";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 0.15], [0, 100]);

  return (
    <section>
      <div className="relative overflow-hidden  ">
        <motion.div
          style={{ y }}
          className=" absolute w-screen  inset-x-0  z-0  "
        >
          <Image
            src={HeroImage}
            className=" w-full object-cover  opacity-70  "
            alt=""
          />
        </motion.div>
        <div className=" z-20 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 isolate ">
          {" "}
          <FadeIn>
            <div className=" mx-auto max-w-2xl lg:mx-0 lg:flex-auto ">
              <h2 className="text-base font-kallisto tracking-widest text-zinc-100 font-semibold">
                Afro House | Melodic house & Techno | Organic House | Deep House
              </h2>
              <h1 className="mt-6 text-5xl font-kallisto font-bold text-transparent sm:text-7xl bg-gradient-to-r from-teal-200 via-blue-200 to-teal-500 bg-clip-text inline-block">
                Ghost Production
                <br />
                Exclusive Tracks
              </h1>
              <p className="mt-6 text-xl leading-8 text-zinc-400">
                Kickstart your music career with LAP Studios. With a history of
                chart-topping successes and support from leading DJs, we
                specialize in Melodic House & Techno, Afro House, Deep House,
                and Organic House. Explore our expertly curated collection or
                collaborate with us for a custom track designed uniquely for
                you.
              </p>
              <FadeInStagger>
                <div className="mt-10 flex flex-col sm:flex-row gap-6">
                  <FadeIn>
                    <Link
                      href="/ghost-produced-tracks"
                      className="relative rounded-xl px-5 py-2.5 overflow-hidden group bg-blue-700  hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300 flex justify-center"
                    >
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 sm:group-hover:-translate-x-40 ease"></span>
                      <span className="relative">Browse tracks</span>
                    </Link>
                  </FadeIn>
                  <FadeIn>
                    <Link
                      href="/ghost-production"
                      className="relative rounded-xl px-5 py-[8px] overflow-hidden group border border-zinc-100 text-zinc-100 hover:ring-2 hover:ring-offset-2 
                      hover:bg-gradient-to-r hover:from-zinc-950 hover:to-zinc-800
                      hover:ring-zinc-100 transition-all ease-out duration-300 flex justify-center"
                    >
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 sm:group-hover:-translate-x-60 ease"></span>
                      <span className="relative">Custom production</span>
                    </Link>
                  </FadeIn>
                </div>
              </FadeInStagger>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
