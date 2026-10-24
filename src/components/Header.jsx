
import { useState } from 'react';
import { authClient } from '../auth-client';
import AuthModal from './AuthModal';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header id="home" className="bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-8 lg:px-16">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3 text-lg font-bold"
        >
          <img
            src="/images/compass-icon.jpg"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span>Wanderlust Destinations</span>
        </a>

        {/* Hamburger button: mobile only */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-slate-600 px-3 py-2 text-2xl md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 text-sm md:flex">
          <a href="#home" className="hover:text-amber-400">Home</a>
          <a href="#packages" className="hover:text-amber-400">Tour Packages</a>
          <a href="#testimonials" className="hover:text-amber-400">Testimonials</a>
          <a href="#plan-trip" className="hover:text-amber-400">Plan Your Trip</a>
        </div>

        {isPending ? null : session ? (
          <button
            type="button"
            onClick={() => authClient.signOut()}
            className="hidden rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-950 hover:bg-amber-400 md:inline-flex"
          >
            Sign out
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowAuth(true)}
            className="hidden rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-950 hover:bg-amber-400 md:inline-flex"
          >
            Sign in
          </button>
        )}

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="flex w-full flex-col gap-4 border-t border-slate-700 pt-4 md:hidden"
          >
            <a href="#home" onClick={closeMenu} className="hover:text-amber-400">
              Home
            </a>
            <a href="#packages" onClick={closeMenu} className="hover:text-amber-400">
              Tour Packages
            </a>
            <a href="#testimonials" onClick={closeMenu} className="hover:text-amber-400">
              Testimonials
            </a>
            <a href="#plan-trip" onClick={closeMenu} className="hover:text-amber-400">
              Plan Your Trip
            </a>
            {session ? (
              <button
                type="button"
                onClick={() => { authClient.signOut(); closeMenu(); }}
                className="self-start rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-950 hover:bg-amber-400"
              >
                Sign out
              </button>
            ) : (
              <button
                type="button"
                onClick={() => { setShowAuth(true); closeMenu(); }}
                className="self-start rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-950 hover:bg-amber-400"
              >
                Sign in
              </button>
            )}
                      </div>
                    )}
                  </nav>
                  {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
                </header>
              );
            }

export default Header;
