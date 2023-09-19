import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FadeIn } from "./FadeIn";

const CustomCta = () => {

  const handlePlay = () => {
    setAudioUrl(props.previewUrl);
    setContextTrack(props);
    setBottomPlayerOn(true);
  };

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="">
      <FadeIn>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 relative">
        <div className="relative isolate border border-zinc-100/10   px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 group/cta "
        onMouseMove={handleMouseMove}
        >
<motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/cta:opacity-100 z-0 "
            style={{
              background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(45, 212, 191, 0.10),
              transparent 80%
            )
          `,
            }}
          />

          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Craft Your Unique Sound Today
          </h2>
          <p className="mx-auto max-w-xl mt-4 text-zinc-400 text-base ">
          Take your music to the next level with our custom ghost production services. Get tracks tailor-made to your style and vision, produced to industry-leading standards.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <Link href="/ghost-production" className="
            text-sm px-3 py-1.5 font-semibold leading-6 rounded-xl text-teal-300 flex gap-2 hover:ring-1 hover:ring-offset-1 hover:ring-teal-200 transition-all ease-out duration-300
            
            ">
              <p>Learn more</p> <Image src="/icons/right-arrow.png" width={14} height={14} alt="Learn more"/>
            </Link >
          </div>
      
         
        </div>
      </div>
      </FadeIn>
    </section>
  )
}

export default CustomCta