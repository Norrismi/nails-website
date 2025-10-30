import React from 'react';
import { SERVICE_CATEGORIES } from '../constants';
import { Service } from '../types';

const ServicesCarousel: React.FC = () => {
  // Flatten services from categories for the carousel
  const featuredServices: Service[] = SERVICE_CATEGORIES.flatMap(category =>
    category.services.slice(0, 2) // Take first two services from each category
  );

  return (
    <section className="py-16 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-10 text-primaryDark dark:text-accent">
          Featured Services
        </h2>
        <div className="relative">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
          >
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="w-full max-w-sm bg-white dark:bg-secondaryDark rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover object-center"
                    loading="lazy"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-primaryDark dark:text-primaryLight">
                    {service.name}
                  </h3>
                  <p className="text-primary dark:text-darkText mb-3">
                    {service.price}
                  </p>
                  <p className="text-sm text-lightText dark:text-darkText leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;