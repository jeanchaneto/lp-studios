import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="relative isolate bg-zinc-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <section className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
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
            </div>
            <h2 className="text-4xl sm:text-6xl  font-bold tracking-tight text-zinc-100 ">
              Tune In with Us
            </h2>
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
              Fancy a ready-made track but envision some tweaks? Reach out, and
              we'll tailor it to perfection.
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
                    className="block text-sm font-semibold leading-6 text-zinc-100"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-teal-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-zinc-100"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-teal-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-zinc-100"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-teal-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-zinc-100"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-teal-400 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md w-full bg-blue-700 px-3.5 py-2.5 text-center text-sm font-semibold text-zinc-100 shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
