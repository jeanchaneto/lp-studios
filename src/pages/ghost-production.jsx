import Form from "@/components/Form";
import TimeLine from "@/components/TimeLine";

import Image from "next/image";
import HeroImage from "../../public/images/ghost-production-hero-image.png";


import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'


import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$15', annually: '$144' },
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$30', annually: '$288' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$48', annually: '$576' },
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
]



const features = [
  {
    name: "Risk-Free Collaboration",
    description:
      "Start your project with us with zero commitments on your part until you reach complete satisfaction.",
    icon: "/icons/risk-free-icon.svg",
  },
  {
    name: "Pay When Satisfied",
    description:
      "We ensure you are 100% happy with the track composition and arrangement before any payment is made",
    icon: "/icons/satisfaction-icon.svg",
  },
  {
    name: "A decade of experience",
    description:
      "We understand the expectations of the music industry and know precisely what labels are seeking.",
    icon: "/icons/experience-icon.svg",
  },
  {
    name: "Keep Your Royalties",
    description:
      "Once payment is made, you gain full ownership of the track, with no credit or royalty claims from our side.",
    icon: "/icons/royalties-icon.svg",
  },
];

const GhostProduction = () => {

  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <main className="  py-24 sm:py-32 relative">
      <FadeIn>
        <section className=" pb-24 sm:pb-32 z-20 isolate lg:flex gap-16 justify-between max-w-7xl mx-auto">
          <div className="  px-6 lg:px-8 rounded-xl flex-shrink-0 ">
            <div
              className="mx-auto max-w-2xl lg:mx-0 
          "
            >
              <p className="text-base font-semibold  text-teal-300">
                Bespoke Sound
              </p>
              <h1 className="mt-2 text-4xl font-kallisto text-zinc-100 sm:text-6xl">
                Custom Ghost Production
              </h1>
              <p className="mt-6 text-xl  text-zinc-400 ">
                Are you aiming for unparalleled Afro House, Melodic House &
                Techno, Organic House, or Deep House? You're in the right place.
                Welcome to a highly exclusive opportunity offered by a small,
                in-demand team that has enabled tracks to get signed on top
                labels and gain recognition from leading DJs globally.
              </p>
            </div>
          </div>

          <Image
            src={HeroImage}
            alt=""
            className=" px-6 lg:px-0 mx-auto mt-24 md:max-w-xl lg:max-w-4xl flex-shrink bg-gradient-radial from-teal-950/80   to-70% to-transparent "
          />
        </section>
      </FadeIn>

      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold  text-teal-300">
              Pro music
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Why choose{" "}
              <span className=" font-kallisto font-normal">
                LAP <span className="font-thin">Studios</span>{" "}
              </span>{" "}
              ?
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Whether you're an aspiring artist or an established musician, we
              understand your need for innovation and individuality in the music
              industry.
            </p>
          </FadeIn>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <FadeInStagger>
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <FadeIn key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold text-zinc-100">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400">
                        <img
                          src={feature.icon}
                          className="h-6 w-6 text-black"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base text-zinc-400">
                      {feature.description}
                    </dd>
                  </FadeIn>
                ))}
              </dl>
            </FadeInStagger>
          </div>
        </div>
      </div>

      <TimeLine />

      <section className="container mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32  ">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-white/10 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Pricing
            </h2>
            <p className="mt-6 text-lg text-zinc-400">
              At LAP Studios, our focus is on delivering professional Afro
              House, Melodic House & Techno, Organic House, or Deep House. Our
              pricing is both transparent and fixed, mirroring our dedication to
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
                    €1499 €
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










      <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
        At LAP Studios, our focus is on delivering professional Afro
              House, Melodic House & Techno, Organic House, or Deep House. Our
              pricing is both transparent and fixed, mirroring our dedication to
              quality.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(checked ? 'bg-indigo-500' : '', 'cursor-pointer rounded-full px-2.5 py-1')
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>












      {/* <section
        id="contact-ghost-production"
        className="relative  my-24 sm:my-32 "
      >
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
             
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Let's make some music
              </h2>
              <p className="mt-2 text-lg text-zinc-400">
                Got a tune in your head? Let us bring it to life. Fill out the
                form below and receive a free demo, no strings attached.
              </p>
              <Form />
              <div className=" sm:mb-8 sm:flex pb-12 sm:pb-0 ">
                <div className="relative rounded-full px-6 py-1 text-xs mt-6  text-yellow-500 ring-1 ring-yellow-200/30 ">
                  While we wish we could collaborate with everyone, our
                  commitment to quality and high demand means we can only take
                  on a limited number of projects.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="relative isolate bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-800/20"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    545 Mavis Island
                    <br />
                    Chicago, IL 99191
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-white"
                      href="tel:+1 (555) 234-5678"
                    >
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-white"
                      href="mailto:hello@example.com"
                    >
                      hello@example.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default GhostProduction;
