// components/Header.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    const shouldBeDark = initial === "dark";

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-white/20 dark:border-dark-card/20 shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-playfair font-bold text-primary dark:text-primary-400">
          <Link to="/" onClick={closeMenu}>Luxe Nails</Link>
        </div>

        {/* Desktop Nav — Only Home + Book */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-lg font-medium transition-colors ${
              isActive('/') ? 'text-primary dark:text-primary-400' : 'text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary-300'
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/book"
            className={`px-5 py-2 text-lg font-bold rounded-full transition-all ${
              isActive('/book')
                ? 'bg-gradient-gold text-primaryDark shadow-md'
                : 'bg-primary/10 text-primary dark:text-primary-400 hover:bg-primary/20 dark:hover:bg-primary-400/20'
            }`}
            onClick={closeMenu}
          >
            Book Now
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              const newDark = !isDark;
              setIsDark(newDark);
              document.documentElement.classList.toggle("dark", newDark);
              localStorage.setItem("theme", newDark ? "dark" : "light");
            }}
            className="p-2 rounded-full glass shadow-md hover:shadow-lg transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4-4a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 616.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile — Hamburger + Theme */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => {
              const newDark = !isDark;
              setIsDark(newDark);
              document.documentElement.classList.toggle("dark", newDark);
              localStorage.setItem("theme", newDark ? "dark" : "light");
            }}
            className="p-2 rounded-full glass shadow-md hover:shadow-lg transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4-4a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 616.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} onNavLinkClick={closeMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;// cache-bust Thu Nov 13 19:02:19 EST 2025
