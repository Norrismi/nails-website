import React from 'react';
import { SERVICE_CATEGORIES } from '../constants';
import { Service } from '../types';

const ServicesCarousel: React.FC = () => {
  const featuredServices: Service[] = SERVICE_CATEGORIES.flatMap(category =>
    category.services.slice(0, 2)
  );

  return (
    <section className="py-16 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-10 text-primaryDark dark:text-primary-400">
          Featured Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
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
                <h3 className="text-xl font-playfair font-semibold mb-2 text-primaryDark dark:text-primary-400">
                  {service.name}
                </h3>

                <p className="text-2xl font-bold text-primary dark:text-primary-300 mb-3">
                  {service.price}
                </p>

                <p className="text-sm text-lightText dark:text-dark-textSecondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;