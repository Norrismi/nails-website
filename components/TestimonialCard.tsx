import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-secondaryDark rounded-lg shadow-md p-6 w-full max-w-sm transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-6 h-6 ${i < testimonial.rating ? 'text-accent' : 'text-gray-300 dark:text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-lightText dark:text-darkText italic mb-4 text-center">
        "{testimonial.quote}"
      </p>
      <p className="text-right font-semibold text-primaryDark dark:text-primaryLight">
        - {testimonial.author}
      </p>
    </div>
  );
};

export default TestimonialCard;