import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "/images/albumcover.jpg",
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "/images/albumcover.jpg",
  },
];

export default function Blog() {
  return (
    <main className="bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
        <div className="mx-auto max-w-2xl lg:max-w-4xl ">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 ">
            Ghost Production Chronicles
          </h1>
          <p className="mt-2 text-xl text-zinc-400">
            Delve into the intricacies of the music industry, from ghost
            production to DJing techniques, and uncover the secrets to leaving a
            lasting impression. Your journey through the electronic music realm
            begins here. Dive in.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20 ">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row pt-16 before:absolute after:absolute before:bg-teal-300 after:bg-teal-300/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px 
              "
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    width={256}
                    height={256}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </div>
                <div>
                  <div className="group relative max-w-xl">
                    <h2 className="mt-3 text-lg font-semibold text-zinc-300 group-hover:text-zinc-100">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h2>
                    <p className="mt-5 text-base text-zinc-400">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
