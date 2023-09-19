import Image from "next/image";
import React from "react";
import BenefitsImage from "../../public/images/benefits-image.jpg";
import Benefits from "./Benefits";
import { FadeIn } from "./FadeIn";

const BenefitsSection = () => {
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
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg text-zinc-200 ">
                <Image
                  src={BenefitsImage}
                  className="object-cover object-center"
                  alt="LAP music studio"
                />
              </div>
            </div>{" "}
          </FadeIn>
          <Benefits />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
