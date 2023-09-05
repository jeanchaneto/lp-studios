
const Hero = () => {
  return (
    <section className="relative isolate pt-14 bg-zinc-950 ">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
        <h2 className="text-base font-semibold leading-7 text-teal-700">Afro House | Melodic Techno | Organic House | Deep House</h2>
          <h1 className="mt-6 max-w-lg text-5xl font-bold tracking-tight text-zinc-100 sm:text-7xl">
            <span className="text-teal-500" >Premium</span> Ghost Production<span className="text-teal-500" ><br />Exclusive</span> Tracks
          </h1>
          <p className="mt-6 text-xl leading-8 text-zinc-400">
            Kickstart your career in music with tracks that the top DJs rave
            about and that consistently top the Beatport charts. At LAP Studios,
            we're the pulse of melodic techno, afro house, and organic house.
            Dive into our curated collection or get a bespoke track tailored for
            you. Quality and vibe are our game.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-zinc-100 hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 
              shadow-sm shadow-blue-700/40"
            >
              Get started
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
