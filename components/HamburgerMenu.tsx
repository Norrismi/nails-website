// components/HamburgerMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  onNavLinkClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu, onNavLinkClick }) => {
  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative w-6 h-6 focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        <span className={`block absolute h-0.5 w-6 bg-primary dark:bg-primary-400 transform transition-all duration-300 ${isOpen ? 'rotate-45 top-2.5' : 'top-1'}`} />
        <span className={`block absolute h-0.5 w-6 bg-primary dark:bg-primary-400 transition-all duration-300 top-2.5 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block absolute h-0.5 w-6 bg-primary dark:bg-primary-400 transform transition-all duration-300 ${isOpen ? '-rotate-45 top-2.5' : 'top-4'}`} />
      </button>

      {/* Mobile Menu — ONLY Home + Book */}
      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-dark-bg z-40 flex flex-col items-center justify-center space-y-8 pt-20">
          <Link
            to="/"
            className="text-3xl font-playfair font-bold text-primary dark:text-primary-400 hover:text-primaryDark dark:hover:text-primary-300 transition-colors"
            onClick={onNavLinkClick}
          >
            Home
          </Link>
          <Link
            to="/book"
            className="px-8 py-4 text-xl font-bold bg-gradient-gold text-primaryDark rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            onClick={onNavLinkClick}
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;