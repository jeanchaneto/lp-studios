import Image from "next/image";
import React, { useState } from "react";
import BenefitsImage from "../../public/images/benefits-image.jpg";
import Benefits from "./Benefits";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const BenefitsSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          {" "}
          <FadeIn>
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
                  Elevate Your Sound, Achieve Your Goals
                </h2>
                <p className="mt-4 text-zinc-400 text-lg ">
                  Choosing LAP Studios means you're investing in a proven path
                  to musical success. With a decade of expertise under our belt,
                  we've carved out a reputation for producing tracks that don't
                  just top the Beatport charts but also gain support from
                  leading industry DJs.
                </p>
              </div>
              <motion.div
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg text-zinc-200 "
                initial={false}
                animate={
                  isLoaded && isInView
                    ? {
                        WebkitMaskImage: visibleMask,
                        maskImage: visibleMask,
                      }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
              >
                <Image
                  src={BenefitsImage}
                  className="object-cover object-center"
                  alt="Moog Subsequent 37"
                  onLoad={() => setIsLoaded(true)}
                />
              </motion.div>
            </div>{" "}
          </FadeIn>
          <Benefits />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
