import React from 'react';
import type { ServiceCategory } from '../types';

interface ServiceCategoryProps {
  category: ServiceCategory;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ category }) => {
  return (
    <div className="mb-12">
      {/* Category Header with Dropdown */}
      <details className="group mb-8 rounded-xl shadow-lg bg-white dark:bg-dark-card transition-all duration-300">
        <summary className="flex justify-between items-center p-6 cursor-pointer text-2xl font-playfair font-semibold text-primaryDark dark:text-primary-400 border-b border-gray-200 dark:border-gray-700 group-open:border-transparent transition-all">
          <span>{category.name}</span>
          <svg
            className="w-6 h-6 text-primary dark:text-primary-400 transform transition-transform duration-300 group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>

        {/* Services Grid */}
        <div className="p-6 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-lightBg dark:bg-darkBg rounded-lg shadow-md p-5 transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-primary/20 dark:hover:border-primary-500/30"
            >
              {/* Image */}
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  loading="lazy"
                />
              )}

              {/* Service Name */}
              <h4 className="text-xl font-playfair font-semibold mb-2 text-primaryDark dark:text-primary-400">
                {service.name}
              </h4>

              {/* Price */}
              <p className="text-lg font-bold mb-3 text-primary dark:text-primary-300">
                {service.price}
              </p>

              {/* Description */}
              <p className="text-sm text-lightText dark:text-dark-textSecondary flex-grow leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default ServiceCategory;