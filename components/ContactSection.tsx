// components/ContactSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-lightBg dark:bg-darkBg transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-primaryDark dark:text-primary-400">
          Visit Us
        </h2>

        {/* Full-Width Card */}
        <div className="bg-white dark:bg-dark-card rounded-3xl shadow-xl p-8 md:p-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left: Get in Touch */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-primaryDark dark:text-primary-400">
                Get in Touch
              </h3>

              <div className="space-y-5 text-lightText dark:text-dark-textSecondary">
                {/* Address */}
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-3 text-primary dark:text-primary-400 flex-shrink-0 mt-0.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="text-base md:text-lg leading-tight">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-3 text-primary dark:text-primary-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.106l-1.412-.395m-.736 1.956l-3.486 1.743a.75 .75 0 01-.932-.569A11.95 11.95 0 0112 21.75c-2.906 0-5.653-.9-7.875-2.42A13.95 13.95 0 01.25 6.75V4.5A2.25 2.25 0 012.5 2.25h1.372c.516 0 .966.351 1.106.852l.395 1.412M4.5 12.75l-.395 1.412a2.25 2.25 0 001.106 2.518L7.5 19.5m4.364-1.956l1.412.395M12 12.75a.75 .75 0 01.75-.75h7.5a.75 .75 0 010 1.5h-7.5a.75 .75 0 01-.75-.75z" />
                  </svg>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-base md:text-lg hover:text-primaryDark dark:hover:text-primary-300 transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-3 text-primary dark:text-primary-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-base md:text-lg hover:text-primaryDark dark:hover:text-primary-300 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                {/* Google Maps */}
                <a
                  href={CONTACT_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primaryDark dark:hover:text-primary-300 font-medium text-sm md:text-base transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-3.498l4.875-2.437c.381-.19.622-.58.622-1.006 0-.426-.241-.816-.622-1.006l-4.875-2.437a1.125 1.125 0 00-1.005 0l-4.875 2.437c-.381.19-.622.58-.622 1.006 0 .426.241.816.622 1.006l4.875 2.437a1.125 1.125 0 001.005 0z" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Center: Book Button */}
            <div className="flex flex-col items-center justify-center px-6">
              <Link
                to="/book"
                className="group relative inline-flex items-center justify-center w-full max-w-xs px-8 py-5 text-lg md:text-xl font-bold text-primaryDark bg-gradient-gold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Appointment
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Right: Salon Hours */}
            <div className="space-y-6 text-right">
              <h4 className="text-2xl md:text-3xl font-playfair font-semibold text-primaryDark dark:text-primary-400">
                Salon Hours
              </h4>
              <div className="space-y-2 text-lightText dark:text-dark-textSecondary">
                <p className="text-base md:text-lg font-medium">{CONTACT_INFO.hours.mondayFriday}</p>
                <p className="text-base md:text-lg">{CONTACT_INFO.hours.saturday}</p>
                <p className="text-base md:text-lg">{CONTACT_INFO.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fallback */}
        <p className="text-center mt-10 text-sm text-lightText dark:text-dark-textSecondary">
          Prefer to call? Walk-ins welcome during open hours.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;