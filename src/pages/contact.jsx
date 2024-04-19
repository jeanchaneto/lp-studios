import { FadeIn } from "@/components/FadeIn";
import Form from "@/components/Form";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";

export default function Contact() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 0.9], [0, 100]);
  return (
    <main className="relative isolate bg-zinc-950 min-h-screen">
       <Head>
        <title>LAP Studios | Contact Us</title>
        <meta
          name="description"
          content="Explore LAP Studios' blog for the latest insights, DJ tips, and trends in music production,  ghost producing, and the evolving music industry."
        />
        <meta
          property="og:title"
          content="LAP Studios | The Blog Music Industry Insights"
        />
        <meta
          property="og:description"
          content="Explore LAP Studios' blog for the latest insights, DJ tips, and trends in music production,  ghost producing, and the evolving music industry."
        />
        <meta property="og:image" content="/images/main-og-image.png" />
      </Head>
      <motion.div style={{ y }} className=" absolute w-full  inset-x-0 z-0  ">
        <img
          src="/images/soundwaves.png"
          alt=""
          className=" w-full object-cover opacity-10"
        />
      </motion.div>
      <FadeIn>
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <section className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-40">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <p className="text-base font-semibold  text-teal-300">Connect</p>
              <h1 className="text-4xl sm:text-6xl  font-kallisto text-zinc-100 ">
                Tune In with Us
              </h1>
              <p className="mt-6 text-lg text-zinc-400">
              Reach out for inquiries on custom ghost production or to suggest tracks you’d like in the shop! We’re eager to hear from you!
              </p>
              <p className="mt-3 text-lg  text-zinc-400">
              Reach out for inquiries on custom ghost production or to suggest tracks you’d like in the shop! We’re eager to hear from you!
              </p>
              <p className="mt-3 text-lg leading-8 text-zinc-400">
                For general inquiries, our{" "}
                <Link href="/faq" className="  text-zinc-300">
                  {" "}
                  FAQ
                </Link>{" "}
                page might already have the answers.
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
            <Form messagePlaceHolder="" />
          </section>
        </div>
      </FadeIn>
    </main>
  );
}
