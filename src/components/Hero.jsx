const Hero = () => {
  return (
    <section className="relative isolate pt-14 ">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h2 className="text-base font-kallisto leading-7 text-teal-500">
            Afro House | Melodic house & Techno | Organic House | Deep House
          </h2>
          <h1 className="mt-6 max-w-7xl text-5xl font-kallisto font-bold text-zinc-100 sm:text-7xl">
            Ghost Production
            <span className="text-teal-500">
              <br />
              Exclusive
            </span>{" "}
            Tracks
          </h1>
          <p className="mt-6 text-xl leading-8 text-zinc-400">
            Kickstart your career in music with tracks that the top DJs rave
            about and that consistently top the Beatport charts. At LAP Studios,
            we're the pulse of melodic house & techno, afro house, deep house
            and organic house. Dive into our curated collection or get a bespoke
            track tailored for you. Quality and vibe are our game.
          </p>
          <div className="mt-10 flex items-center gap-x-6">     
            <a
              href="#latest-tracks"
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-700  hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Get started</span>
            </a>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow ">
          {/* IMAGE */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
