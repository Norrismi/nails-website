
import React from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  onNavLinkClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu, onNavLinkClick }) => {
  return (
    <>
      <button
        className="text-primaryDark dark:text-lightText focus:outline-none md:hidden z-50"
        onClick={toggleMenu}
        aria-label="Open navigation menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-darkBg md:hidden flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out">
          <a
            href="#home"
            className="text-2xl font-playfair text-primaryDark dark:text-accent hover:text-primary transition-colors"
            onClick={onNavLinkClick}
          >
            Home
          </a>
          <a
            href="#services"
            className="text-2xl font-playfair text-primaryDark dark:text-accent hover:text-primary transition-colors"
            onClick={onNavLinkClick}
          >
            Services
          </a>
          <a
            href="#about"
            className="text-2xl font-playfair text-primaryDark dark:text-accent hover:text-primary transition-colors"
            onClick={onNavLinkClick}
          >
            About
          </a>
          <a
            href="#gallery"
            className="text-2xl font-playfair text-primaryDark dark:text-accent hover:text-primary transition-colors"
            onClick={onNavLinkClick}
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-2xl font-playfair text-primaryDark dark:text-accent hover:text-primary transition-colors"
            onClick={onNavLinkClick}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
