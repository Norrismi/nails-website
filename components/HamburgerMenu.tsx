// components/HamburgerMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  onNavLinkClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu, onNavLinkClick }) => {
  if (!isOpen) {
    return (
      <button
        onClick={toggleMenu}
        className="relative w-6 h-6 focus:outline-none z-50"
        aria-label="Open menu"
      >
        <span className={`block absolute h-0.5 w-6 bg-primary dark:bg-primary-400 transform transition-all duration-300 ${isOpen ? 'rotate-45 top-2.5' : 'top-1'}`} />
        <span className={`block absolute h-0.5 w-6 bg-primary dark:bg-primary-400 transition-all duration-300 top-2.5 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block absolute h-0.5 w-6 bg-primary dark:bg-primary-400 transform transition-all duration-300 ${isOpen ? '-rotate-45 top-2.5' : 'top-4'}`} />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-dark-bg dark:bg-dark-bg z-50 flex flex-col items-center justify-center">
      {/* Close Button */}
      <button
        onClick={toggleMenu}
        className="absolute top-8 right-8 text-primary-400 hover:text-primary-300 text-3xl font-light transition-colors"
        aria-label="Close menu"
      >
        ×
      </button>

      {/* Horizontal Nav */}
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-md px-8">
        {/* Home Link */}
        <Link
          to="/"
          onClick={onNavLinkClick}
          className="text-2xl font-playfair font-bold text-primary-400 hover:text-primary-300 transition-colors"
        >
          Home
        </Link>

        {/* Book Now Button */}
        <Link
          to="/book"
          onClick={onNavLinkClick}
          className="px-8 py-3 bg-gradient-gold text-primaryDark font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
        >
          Book Now
        </Link>
      </nav>
    </div>
  );
};

export default HamburgerMenu;// MENU STYLE V2 1763079858
