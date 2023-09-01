import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CustomCta = () => {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-zinc-900/20 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-teal-600 sm:text-5xl">
          Craft Your Unique Sound Today
          </h2>
          <p className="mx-auto  max-w-xl mt-4 text-zinc-400 text-xl ">
          Take your music to the next level with our custom ghost production services. Get tracks tailor-made to your style and vision, produced to industry-leading standards.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#" className="text-sm font-semibold leading-6 text-teal-300 flex gap-2 ">
              <p>Learn more</p> <Image src="/icons/right-arrow.png" width={14} height={14} alt="Learn more"/>
            </Link >
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#134e4a" />
                <stop offset={1} stopColor="#134e4a" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default CustomCta