import Image from 'next/image'
import React from 'react'
import BenefitsImage from '../../public/images/benefits-image.jpg'

const benefits = [
    {
      name: '100% Royalties',
      icon: "/icons/agreement.png",
      description: "The profits are yours to keep. From live performances to digital platforms like Spotify and YouTube, all income generated is entirely yours.",
    },
    {
      name: 'Industry-Standard Excellence',
      icon: "/icons/headphones.png",
      description: "Each track is meticulously produced, mixed, and mastered to meet the highest standards, ready to impress labels and perform flawlessly across varied sound systems.",
    },
    {
      name: '100% Exclusivity',
      icon: "/icons/diamond.png",
      description:
        "Every track is sold only once. As soon as you acquire it, the track becomes exclusively yours, removed from our catalog for good.",
    },
    {
        name: 'All Files Included',
        icon: "/icons/music-folder.png",
        description: "Receive your track in high-resolution WAV format including mastered, mixdowned versions. We also provide the project file, offering you a chance to learn directly from industry experts",
      },
      {
        name: 'Originality',
        icon: "/icons/audio-editing.png",
        description: "Each track you purchase is a unique production, crafted from original compositions as well as royalty-free sounds, ensuring you a worry-free experience regarding copyrights.",
      },
      {
        name: 'Confidentiality',
        icon: "/icons/secret-file.png",
        description:
          "All transactions and collaborations are held in strict confidentiality, reinforced by a Non-Disclosure Agreement",
      },
  ]

const Benefits = () => {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-bold tracking-tight text-teal-600">
              Elevate Your Sound, Achieve Your Goals
              </h2>
              <p className="mt-4 text-zinc-400 text-xl ">
              Choosing LAP Studios means you're investing in a proven path to musical success. With a decade of expertise under our belt, we've carved out a reputation for producing tracks that don't just top the Beatport charts but also gain support from leading industry DJs.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg text-zinc-200 ">
              <Image 
              src={BenefitsImage}
              className="object-cover object-center"
              alt="LAP music studio"
              />
            </div>
          </div>
          <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 text-base ">
            {benefits.map((benefit,i) => (
              <li key={i} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0 ">
                <Image 
              src={benefit.icon}
              className="object-cover object-center"
              alt="LAP music studio"
              width={64}
              height={64}
              />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="font-medium text-teal-600 ">{benefit.name}</h3>
                  <p className="mt-2  text-zinc-400 ">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Benefits