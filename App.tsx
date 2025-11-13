// App.tsx
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesCarousel from './components/ServicesCarousel';
import TestimonialCard from './components/TestimonialCard';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import BookPage from './components/BookPage';
import { TESTIMONIALS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <section className="bg-lightBg dark:bg-darkBg py-16 transition-colors duration-300">
                  <ServicesCarousel />
                  <div className="container mx-auto px-4 mt-16">
                    <h2 className="text-4xl font-playfair font-bold text-center mb-10 text-primaryDark dark:text-accent">
                      What Our Clients Say
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                      {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                      ))}
                    </div>
                  </div>
                </section>
                <ServicesSection />
                <AboutSection />
                <GallerySection />
                <ContactSection />
              </>
            }
          />

          {/* Booking Page */}
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;