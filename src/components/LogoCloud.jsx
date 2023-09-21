import { FadeIn } from "./FadeIn";

const logos = [
  { src: "/images/logo-cloud/ableton-logo 1.png", alt: "Ableton logo" },
  { src: "/images/logo-cloud/arturia-logo.png", alt: "Arturia logo" },
  { src: "/images/logo-cloud/elektron-logo.png", alt: "Elektron logo" },
  { src: "/images/logo-cloud/eventide-logo.png", alt: "Eventide logo" },
  { src: "/images/logo-cloud/fabfilter-logo.png", alt: "FabFilter logo" },
  { src: "/images/logo-cloud/izotope-logo.png", alt: "iZotope logo" },
  { src: "/images/logo-cloud/logic-pro-logo.png", alt: "Logic Pro logo" },
  { src: "/images/logo-cloud/moog-logo.png", alt: "Moog logo" },
  {
    src: "/images/logo-cloud/native-instruments-logo.png",
    alt: "Native Instruments logo",
  },
  { src: "/images/logo-cloud/sequential-logo.png", alt: "Sequential logo" },
  { src: "/images/logo-cloud/soundtoys-logo.png", alt: "Soundtoys logo" },
  { src: "/images/logo-cloud/u-he-logo.png", alt: "U-He logo" },
  {
    src: "/images/logo-cloud/universal-audio-logo.png",
    alt: "Universal Audio logo",
  },
  { src: "/images/logo-cloud/valhalla-logo.png", alt: "Valhalla logo" },
];

const LogoCloud = () => {
  return (
    <FadeIn>
    <section className="relative pt-16 bg-zinc-950  py-24 sm:py-32 mb-24 sm:mb-32   overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)] "></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold  text-zinc-400">
          Our tools of choice
        </h2>
        <div className=" mt-16 w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none   animate-infinite-scroll  ">
            {logos.map((logo, i) => (
              <li key={i} className=" " >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className=" w-40 max-h-16 object-scale-down grayscale opacity-60 hover:opacity-100 transition-opacity duration-300 "
                />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none  animate-infinite-scroll aria-hidden='true'  ">
            {logos.map((logo, i) => (
              <li key={i} className=" " >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className=" w-40 max-h-12 object-scale-down grayscale opacity-60 hover:opacity-100 transition-opacity duration-300 "
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </FadeIn>
  );
};

export default LogoCloud;
