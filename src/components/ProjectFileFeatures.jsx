import Image from "next/image";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const features = [
  {
    name: "Effortless Navigation",
    description:
      "Easily find your way around the project with color-coded tracks and a well-organized layout for a seamless workflow.",
    icon: "/icons/desktop-computer.png",
  },
  {
    name: "Learn the Craft",
    description:
      "Understand the fine details of balancing elements, intricate automations, and effective FX use, all in a single, professionally arranged track.",
    icon: "/icons/mixer.png",
  },
  {
    name: "Ready to use",
    description:
      "All audio and midi tracks are frozen to ensure compatibility, letting you dissect the project even without owning every plugin used.",
    icon: "/icons/plug-and-play.png",
  },
];

const ProjectFileFeatures = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <FadeIn>
      <section className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-xl rounded-lg bg-gradient-radial from-teal-950/60 to-transparent px-8 py-8 ">
                <h2 className="text-base font-semibold text-teal-400">
                  Learn from the Pros
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                  Inside Pro Music Production
                </p>
                <p className="mt-6 text-lg text-zinc-400">
                  Unlock your full creative potential with our meticulously
                  structured project files. Not only do you get a professionally
                  produced track, but you also gain an insider's look into the
                  craft of producing premier quality music.
                </p>
                <FadeInStagger>
                  <dl className="mt-10 max-w-xl space-y-8 text-base text-zinc-400 lg:max-w-none">
                    {features.map((feature) => (
                      <FadeIn key={feature.name}>
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-zinc-200">
                            <Image
                              src={feature.icon}
                              height={20}
                              width={20}
                              className="absolute left-1 top-1 "
                              alt={`${feature.name} icon`}
                            />
                            {feature.name}
                          </dt>{" "}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      </FadeIn>
                    ))}
                  </dl>
                </FadeInStagger>
              </div>
            </div>
            <motion.div
              className="flex items-center justify-end lg:order-first"
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
                src="/images/project-features-photo.jpeg"
                alt="Logic Pro project screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-zinc-100/10 sm:w-[57rem] "
                width={912}
                height={690}
                onLoad={() => setIsLoaded(true)}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default ProjectFileFeatures;
