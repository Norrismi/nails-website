import React from 'react';
import ContactForm from './ContactForm';
import { CONTACT_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-lightBg dark:bg-darkBg transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primaryDark dark:text-primary-400">
          Contact Us
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:space-x-12 space-y-12 lg:space-y-0">
          {/* Contact Info Card */}
          <div className="lg:w-1/2 w-full bg-white dark:bg-dark-card rounded-xl shadow-lg p-8 text-center lg:text-left">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-primaryDark dark:text-primary-400">
              Get in Touch
            </h3>

            <div className="space-y-4 mb-8">
              {/* Address */}
              <p className="text-lg text-lightText dark:text-dark-textSecondary flex items-center justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-3 text-primary dark:text-primary-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                {CONTACT_INFO.address}
              </p>

              {/* Phone */}
              <p className="text-lg text-lightText dark:text-dark-textSecondary flex items-center justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-3 text-primary dark:text-primary-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.106l-1.412-.395m-.736 1.956l-3.486 1.743a.75.75 0 01-.932-.569A11.95 11.95 0 0112 21.75c-2.906 0-5.653-.9-7.875-2.42A13.95 13.95 0 01.25 6.75V4.5A2.25 2.25 0 012.5 2.25h1.372c.516 0 .966.351 1.106.852l.395 1.412M4.5 12.75l-.395 1.412a2.25 2.25 0 001.106 2.518L7.5 19.5m4.364-1.956l1.412.395M12 12.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z"
                  />
                </svg>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-primaryDark dark:hover:text-primary-300 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>

              {/* Email */}
              <p className="text-lg text-lightText dark:text-dark-textSecondary flex items-center justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-3 text-primary dark:text-primary-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-primaryDark dark:hover:text-primary-300 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>

            {/* Hours */}
            <h4 className="text-2xl font-playfair font-semibold mb-4 text-primaryDark dark:text-primary-400">
              Our Hours
            </h4>
            <div className="space-y-2 text-lightText dark:text-dark-textSecondary">
              <p className="text-lg">{CONTACT_INFO.hours.mondayFriday}</p>
              <p className="text-lg">{CONTACT_INFO.hours.saturday}</p>
              <p className="text-lg">{CONTACT_INFO.hours.sunday}</p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:w-1/2 w-full bg-white dark:bg-dark-card rounded-xl shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;