import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <main className="bg-zinc-950 py-32 lg:px-8 relative ">
      <Head>
        <title>Javascript for Beginner | LAP Studios</title>
        <meta name="description" content="Here is a precise description of my awesome webpage."/>
        <meta name="author" content="LAP Studios Team"/>
      </Head>
      <div className="-z-10 ">
        <Image
          src="/images/albumcover.jpg"
          width={1097}
          height={845}
          alt="Album cover"
          className="absolute opacity-50 blur-xl inset-0 h-1/3 w-full object-cover object-right-top"
        />
      </div>
      <div className="bg-zinc-900 w-fit mx-auto rounded-xl pb-32 isolate shadow-xl">
        <Image
          className=" mx-auto aspect-video rounded-xl bg-gray-50 object-cover shadow-lg z-20 "
          src="/images/albumcover.jpg"
          alt=""
          width={768}
          height={432}
        />
        <div className="mx-auto max-w-3xl text-base sm:text-lg  text-zinc-400 px-6 ">
          <h1 className="mt-20 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            JavaScript for Beginners
          </h1>
          <p className="mt-6 ">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
            feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
            Eleifend egestas fringilla sapien.
          </p>
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-zinc-300 sm:text-3xl">
            Subtitle
          </h2>

          <p className="mt-6 ">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
            feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
            Eleifend egestas fringilla sapien.
          </p>

          <address className="mt-10 ">
            Written by{" "}
            <Link
              className=" font-semibold text-zinc-300 hover:text-zinc-100"
              href="https://lap-studios.com/"
            >
              LAP Studios Team
            </Link>
          </address>
        </div>
      </div>
    </main>
  );
}
