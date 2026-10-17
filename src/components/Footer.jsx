
function Footer() {
  return (
    <footer id="plan-trip" className="bg-slate-950 px-4 py-10 text-center text-slate-300">
      <h2 className="text-xl font-bold text-white">
        Ready for your next adventure?
      </h2>

      <p className="mt-3">
        Start planning your next unforgettable journey with Wanderlust.
      </p>

      <a
        href="mailto:hello@wanderlust.example"
        className="mt-5 inline-block rounded-lg bg-amber-500 px-5 py-3 font-semibold text-slate-950 hover:bg-amber-400"
      >
        Contact Us
      </a>

      <p className="mt-8 text-sm">
        © {new Date().getFullYear()} Wanderlust Destinations
      </p>
    </footer>
  );
}

export default Footer;
