
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-secondary dark:bg-secondaryDark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primaryDark dark:text-accent">
          Our Story
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12 mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://picsum.photos/seed/about1/800/600"
              alt="Luxe Nails"
              className="rounded-xl shadow-lg w-full object-cover h-full"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-playfair font-semibold mb-4 text-primaryDark dark:text-primaryLight">
              Where Elegance Meets Serenity
            </h3>
            <p className="text-lg leading-relaxed text-lightText dark:text-darkText mb-6">
              Luxe Nails was founded with a vision to create a sanctuary where beauty and tranquility coexist.
              Our journey began with a simple belief: every individual deserves a moment of pampering and self-care
              in a luxurious, pristine environment.
            </p>
            <p className="text-lg leading-relaxed text-lightText dark:text-darkText">
              We are dedicated to providing exceptional nail and spa services using only the highest quality products
              and techniques. Our skilled technicians are passionate about their craft, ensuring that each visit leaves
              you feeling refreshed, beautiful, and utterly relaxed. Come experience the Luxe difference.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-playfair font-semibold mb-6 text-primaryDark dark:text-primaryLight">
            Our Commitments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white dark:bg-secondaryDark rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://picsum.photos/seed/badge1/100/100"
                alt="Quality Badge"
                className="w-20 h-20 mx-auto mb-4 rounded-full"
                loading="lazy"
              />
              <h4 className="text-xl font-semibold font-playfair text-primaryDark dark:text-primaryLight mb-2">
                Uncompromising Quality
              </h4>
              <p className="text-sm text-lightText dark:text-darkText">
                We use premium products and adhere to the highest standards of service.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-secondaryDark rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://picsum.photos/seed/badge2/100/100"
                alt="Hygiene Badge"
                className="w-20 h-20 mx-auto mb-4 rounded-full"
                loading="lazy"
              />
              <h4 className="text-xl font-semibold font-playfair text-primaryDark dark:text-primaryLight mb-2">
                Impeccable Hygiene
              </h4>
              <p className="text-sm text-lightText dark:text-darkText">
                Your health and safety are our top priority with strict sanitation protocols.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-secondaryDark rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://picsum.photos/seed/badge3/100/100"
                alt="Experience Badge"
                className="w-20 h-20 mx-auto mb-4 rounded-full"
                loading="lazy"
              />
              <h4 className="text-xl font-semibold font-playfair text-primaryDark dark:text-primaryLight mb-2">
                Personalized Experience
              </h4>
              <p className="text-sm text-lightText dark:text-darkText">
                Tailored services to meet your unique preferences and needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
