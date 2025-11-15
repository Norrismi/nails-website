// components/HamburgerMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  onNavLinkClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  toggleMenu,
  onNavLinkClick,
}) => {
  return (
    <>
      <button
        onClick={toggleMenu}
        className="relative w-6 h-6 focus:outline-none z-50 md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`block absolute h-0.5 w-6 bg-primary dark:bg-primary-400 transform transition-all duration-300 ${
            isOpen ? 'rotate-45 top-2.5' : 'top-1'
          }`}
        />
        <span
          className={`block absolute h-0.5 w-6 bg-primary dark:bg-primary-400 transition-all duration-300 top-2.5 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block absolute h-0.5 w-6 bg-primary dark:bg-primary-400 transform transition-all duration-300 ${
            isOpen ? '-rotate-45 top-2.5' : 'top-4'
          }`}
        />
      </button>

      {/* Full-screen overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-dark-bg dark:bg-dark-bg z-[70] flex flex-col items-center justify-start px-4 pt-6 pb-16">
          <nav className="flex flex-row items-center justify-center gap-4 w-full max-w-sm">
            <Link
              to="/"
              onClick={onNavLinkClick}
              className="flex-1 text-center py-2.5 px-3 text-base font-playfair font-bold text-white hover:text-primary-300 border-2 border-white/30 rounded-full transition-colors"
            >
              Home
            </Link>
            <Link
              to="/book"
              onClick={onNavLinkClick}
              className="flex-1 text-center py-2.5 px-3 bg-gradient-gold text-primaryDark font-bold text-base rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;