import { getAllPostsMeta } from "@/libs/posts";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <main className="bg-zinc-950 py-24 sm:py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
        <div className="mx-auto max-w-2xl lg:max-w-4xl ">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 ">
            Ghost Production Chronicles
          </h1>
          <p className="mt-2 text-xl text-zinc-400">
            Delve into the intricacies of the music industry, from ghost
            production to DJing, and uncover the secrets to leaving a lasting
            impression.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20 ">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="relative isolate  pt-16 before:absolute after:absolute before:bg-teal-300 after:bg-teal-300/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px 
              "
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col gap-8 lg:flex-row bg-zinc-900/50 rounded-2xl overflow-hidden"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <Image
                      src={post.coverImage}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-zinc-950 object-cover"
                      width={256}
                      height={256}
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-950" />
                  </div>

                  <div className="group relative max-w-xl px-6 lg:px-0 pb-6">
                    <h2 className="mt-6 text-lg font-semibold text-zinc-300 group-hover:text-zinc-100">
                      <span className="absolute inset-0" />
                      {post.title}
                    </h2>
                    <p className="mt-5 text-base text-zinc-400">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllPostsMeta();

  return {
    props: {
      posts,
    },
  };
}
