
import React, { useState, useCallback } from 'react';
import ThemeToggle from './ThemeToggle';
import HamburgerMenu from './HamburgerMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-lightBg dark:bg-darkBg shadow-md dark:shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-playfair font-bold text-primaryDark dark:text-accent">
          <a href="#home" onClick={closeMenu}>Luxe Nails</a>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-lg font-medium text-lightText dark:text-darkText hover:text-primary dark:hover:text-primaryLight transition-colors">Home</a>
          <a href="#services" className="text-lg font-medium text-lightText dark:text-darkText hover:text-primary dark:hover:text-primaryLight transition-colors">Services</a>
          <a href="#about" className="text-lg font-medium text-lightText dark:text-darkText hover:text-primary dark:hover:text-primaryLight transition-colors">About</a>
          <a href="#gallery" className="text-lg font-medium text-lightText dark:text-darkText hover:text-primary dark:hover:text-primaryLight transition-colors">Gallery</a>
          <a href="#contact" className="text-lg font-medium text-lightText dark:text-darkText hover:text-primary dark:hover:text-primaryLight transition-colors">Contact</a>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} onNavLinkClick={closeMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
