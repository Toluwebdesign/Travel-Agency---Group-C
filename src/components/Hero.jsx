
function Hero() {
  return (
    <section className="bg-slate-950 px-4 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold tracking-[0.2em] text-amber-400">
          EXPERIENCE THE EXTRAORDINARY
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Explore the World's Best Destinations
        </h1>

        <p className="mt-6 max-w-2xl leading-7 text-slate-300">
          Curated luxury travel experiences designed to inspire your spirit
          and create memories that last a lifetime.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#plan-trip"
            className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-400"
          >
            Plan Your Trip
          </a>

          <a
            href="#packages"
            className="rounded-lg border border-white/50 px-6 py-3 font-semibold hover:bg-white/10"
          >
            Explore Packages
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
