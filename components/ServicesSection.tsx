
import React from 'react';
import ServiceCategory from './ServiceCategory';
import { SERVICE_CATEGORIES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-lightBg dark:bg-darkBg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primaryDark dark:text-accent">
          Our Services
        </h2>
        <div>
          {SERVICE_CATEGORIES.map((category, index) => (
            <ServiceCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
