
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
    <section className="relative pt-32 sm:pt-48  pb-24 sm:pb-32 bg-zinc-950 ">
      <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold  text-zinc-100">
          Some of the awesome tools we use
        </h2>

        <div className=" mt-10 w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none   animate-infinite-scroll  ">
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
  );
};

export default LogoCloud;
