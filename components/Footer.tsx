
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary dark:bg-primaryDark text-white py-8 mt-12 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-playfair mb-2">Luxe Nails</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#gallery" className="hover:text-accent transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
