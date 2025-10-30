import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 bg-lightBg dark:bg-darkBg transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primaryDark dark:text-primary-400">
          Our Story
        </h2>

        {/* Main Content */}
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
            <h3 className="text-3xl font-playfair font-semibold mb-4 text-primaryDark dark:text-primary-400">
              Where Elegance Meets Serenity
            </h3>
            <p className="text-lg leading-relaxed text-lightText dark:text-dark-textSecondary mb-6">
              Luxe Nails was founded with a vision to create a sanctuary where beauty and tranquility coexist.
              Our journey began with a simple belief: every individual deserves a moment of pampering and self-care
              in a luxurious, pristine environment.
            </p>
            <p className="text-lg leading-relaxed text-lightText dark:text-dark-textSecondary">
              We are dedicated to providing exceptional nail and spa services using only the highest quality products
              and techniques. Our skilled technicians are passionate about their craft, ensuring that each visit leaves
              you feeling refreshed, beautiful, and utterly relaxed. Come experience the Luxe difference.
            </p>
          </div>
        </div>

        {/* Commitments */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-playfair font-semibold mb-6 text-primaryDark dark:text-primary-400">
            Our Commitments
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                img: "https://picsum.photos/seed/badge1/100/100",
                title: "Uncompromising Quality",
                desc: "We use premium products and adhere to the highest standards of service.",
              },
              {
                img: "https://picsum.photos/seed/badge2/100/100",
                title: "Impeccable Hygiene",
                desc: "Your health and safety are our top priority with strict sanitation protocols.",
              },
              {
                img: "https://picsum.photos/seed/badge3/100/100",
                title: "Personalized Experience",
                desc: "Tailored services to meet your unique preferences and needs.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-dark-card rounded-xl shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
                  loading="lazy"
                />
                <h4 className="text-xl font-semibold font-playfair text-primaryDark dark:text-primary-400 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-lightText dark:text-dark-textSecondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;