// components/BookPage.tsx
import React from 'react';
import BookingCalendar from './BookingCalendar';
import { Link } from 'react-router-dom';

const BookPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-playfair font-bold text-center mb-6 text-primaryDark dark:text-primary-400">
          Book Your Appointment
        </h1>
        <p className="text-center text-lightText dark:text-dark-textSecondary mb-12 max-w-2xl mx-auto">
          Select your preferred date and time. We’ll confirm your booking shortly!
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-card p-8">
            <BookingCalendar />
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link
            to="/#contact"
            className="inline-flex items-center text-primary hover:text-primaryDark dark:hover:text-primary-300 font-medium transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back to Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookPage;