
function Header() {
  return (
    <header id="home" className="bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <a href="#home" className="flex items-center gap-3 text-lg font-bold">
          <img
            src="/images/compass-icon.jpg"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span>Wanderlust Destinations</span>
        </a>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href="#home" className="hover:text-amber-400">Home</a>
          <a href="#packages" className="hover:text-amber-400">Tour Packages</a>
          <a href="#testimonials" className="hover:text-amber-400">Testimonials</a>
          <a href="#plan-trip" className="hover:text-amber-400">Plan Your Trip</a>
        </div>

        <a
          href="#plan-trip"
          className="self-start rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-950 hover:bg-amber-400 sm:self-auto"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

export default Header;
