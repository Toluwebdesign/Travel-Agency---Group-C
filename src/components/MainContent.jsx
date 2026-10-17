
import { useState } from 'react';
import packages from '../data/packages';
import QuantityStepper from './QuantityStepper';

function MainContent() {
  const [category, setCategory] = useState('All');

  const filteredPackages =
    category === 'All'
      ? packages
      : packages.filter((tour) => tour.category === category);

      /*This stores the selected quantity separately for each tour, using its ID. */
      
  const [quantities, setQuantities] = useState({});

  function updateQuantity(id, newQuantity) {
    setQuantities((current) => ({
      ...current,
      [id]: newQuantity,
    }));
  }

  return (
    <main>
      <section id="packages" className="bg-slate-50 px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-widest text-amber-600">
            PREMIUM EXPERIENCES
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Featured Tour Packages
          </h2>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-slate-600">
              Hand-picked journeys across seven continents, crafted with
              passion and local expertise for the modern explorer.
            </p>

            <label className="flex flex-col gap-2 font-medium text-slate-800 sm:flex-row sm:items-center">
              Filter tours
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2"
              >
                <option value="All">All tours</option>
                <option value="Adventure">Adventure</option>
                <option value="Culture">Culture</option>
                <option value="Nature">Nature</option>
              </select>
            </label>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((tour) => (
              <article
                key={tour.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="h-56 w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white">
                    {tour.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-sm text-slate-500">
                    {tour.duration}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {tour.name}
                  </h3>

                  <ul className="mt-4 list-inside list-disc space-y-2 text-slate-600">
                    {tour.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
                    <p className="font-bold text-slate-900">
                      <span className="block text-xs font-normal text-slate-500">
                        Starting from
                      </span>
                      ${tour.price.toLocaleString()}
                    </p>

                  <div className="mt-4">
                    <QuantityStepper
                      value={quantities[tour.id] ?? 0}
                      onChange={(newQuantity) =>
                        updateQuantity(tour.id, newQuantity)
                      }
                    />
                  </div>

                    <button
                      type="button"
                      className="shrink-0 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-600 sm:px-4"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


export default MainContent;
