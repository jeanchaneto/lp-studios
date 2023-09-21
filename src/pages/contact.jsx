import { FadeIn } from "@/components/FadeIn";
import Form from "@/components/Form";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="relative isolate bg-zinc-950">
      <FadeIn>
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <section className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-40">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              {/* <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem]  opacity-20"
                  style={{
                    clipPath:
                      "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                  }}
                />
              </div>
            </div> */}
              <p className="text-base font-semibold  text-teal-300">Connect</p>
              <h1 className="text-4xl sm:text-6xl  font-kallisto text-zinc-100 ">
                Tune In with Us
              </h1>
              <p className="mt-6 text-lg  text-zinc-400">
                At LAP Music Studios, we believe that clear communication paves
                the way for every successful collaboration.
              </p>
              <p className="mt-3 text-lg text-zinc-400">
                If you have a preference for our ready-made tracks, let us know.
                You'll be among the first to get notified when we unveil a track
                that matches your taste.
              </p>
              <p className="mt-3 text-lg  text-zinc-400">
                Fancy a ready-made track but envision some tweaks? Reach out,
                and we'll tailor it to perfection.
              </p>
              <p className="mt-3 text-lg  text-zinc-400">
                Whether you have a unique vision for a track or you're curious
                about our ghost production services, we're here to help you
                manifest that sound.
              </p>
              <p className="mt-3 text-lg leading-8 text-zinc-400">
                For general inquiries, our{" "}
                <Link href="/faq" className="  text-zinc-300">
                  {" "}
                  FAQ
                </Link>{" "}
                main might already have the answers.
              </p>
              <dl className="mt-10 space-y-4 text-lg leading-7 text-zinc-300">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-zinc-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-zinc-100"
                      href="mailto:info@lap-studios.com"
                    >
                      info@lap-studios.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
          <section>
            <Form />
          </section>
        </div>
      </FadeIn>
    </main>
  );
}
