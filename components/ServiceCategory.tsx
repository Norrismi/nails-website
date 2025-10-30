
import React from 'react';
import { ServiceCategory as ServiceCategoryType } from '../types';

interface ServiceCategoryProps {
  category: ServiceCategoryType;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ category }) => {
  return (
    <details className="group mb-8 rounded-xl shadow-lg bg-white dark:bg-secondaryDark transition-all duration-300">
      <summary className="flex justify-between items-center p-6 cursor-pointer text-2xl font-playfair font-semibold text-primaryDark dark:text-accent border-b border-gray-200 dark:border-gray-700 group-open:border-transparent transition-colors duration-300">
        {category.name}
        <span className="transform group-open:rotate-180 transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary dark:text-primaryLight"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="p-6 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col bg-lightBg dark:bg-darkBg rounded-lg shadow-md p-5 transform hover:scale-105 transition-transform duration-300"
          >
            {service.image && (
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover rounded-md mb-4"
                loading="lazy"
              />
            )}
            <h4 className="text-xl font-playfair font-semibold mb-2 text-primaryDark dark:text-primaryLight">
              {service.name}
            </h4>
            <p className="text-primary dark:text-accent text-lg mb-3">
              {service.price}
            </p>
            <p className="text-sm text-lightText dark:text-darkText flex-grow">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </details>
  );
};

export default ServiceCategory;
