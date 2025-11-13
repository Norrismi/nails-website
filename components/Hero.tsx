// components/Hero.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4 animate-fade-in-up">
          Luxe Nails
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Indulge in unparalleled experience of beauty and relaxation.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center animate-fade-in-up delay-400">
          {/* OUR SERVICES → Plain (Accent text, no bg) */}
          <a
            href="#services"
            className="bg-accent text-primaryDark dark:text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg inline-block text-center"
          >
            Our Services
          </a>

          {/* BOOK NOW → Fuchsia / Primary (like old "Our Services") */}
          <Link
            to="/book"
            className="bg-primary dark:bg-primaryLight text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primaryDark transition-colors shadow-lg inline-block text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;