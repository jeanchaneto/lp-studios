import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function BlogPostLayout({ children, meta }) {
  const pages = [
    {
      name: "blog",
      href: "/blog",
      current: false,
    },
    { name: meta.title, href: `/blog/${meta.slug}`, current: true },
  ];

  return (
    <main className="bg-zinc-950 py-24 sm:py-32 lg:py-48 lg:px-8 relative ">
      <Head>
        <title>{meta.title} | LAP Studios</title>
        <meta name="description" content={meta.excerpt} />
        <meta name="author" content="LAP Studios Team" />
      </Head>
      <div className="-z-10 ">
        <Image
          src={meta.coverImage}
          width={1097}
          height={845}
          alt=""
          className="absolute opacity-50 blur-xl inset-0 h-1/3 w-full object-cover object-right-top"
          quality={1}
        />
      </div>

      <nav
        className="flex mb-6 mx-auto max-w-3xl z-20 isolate "
        aria-label="Breadcrumb"
      >
        <ol role="list" className="flex items-center text-zinc-500  space-x-4">
          <li>
            <div>
              <Link href="/" className=" hover:text-zinc-300">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 flex-shrink-0 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <a
                  href={page.href}
                  className="ml-4 text-sm text-zinc-500 hover:text-zinc-300 "
                  aria-current={page.current ? "page" : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <div className="bg-zinc-900 w-fit mx-auto rounded-xl pb-32 isolate shadow-xl overflow-hidden">
        <Image
          className=" mx-auto aspect-video  bg-zinc-950 object-cover shadow-lg z-20 "
          src={meta.coverImage}
          alt={meta.imageAlt}
          width={768}
          height={432}
        />
        <div className="  mx-auto max-w-3xl text-base sm:text-lg  text-zinc-400 px-6 ">
          <h1 className="mt-20 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            {meta.title}
          </h1>
          {children}
          <address className="mt-10 ">
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
