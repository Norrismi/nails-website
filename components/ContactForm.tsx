
import React, { useState, useCallback } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call or form submission delay
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setTimeout(() => setIsSubmitted(false), 5000); // Hide success message after 5 seconds
    }, 1500);
  }, [formData]);

  return (
    <div className="w-full max-w-lg">
      <h3 className="text-3xl font-playfair font-semibold mb-6 text-primaryDark dark:text-primaryLight text-center">
        Send Us a Message
      </h3>
      {isSubmitted ? (
        <div className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 p-4 rounded-lg text-center mb-6 shadow-md">
          <p className="font-semibold">Thank you for your message! We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-lightText dark:text-darkText mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-secondaryDark focus:ring-primary focus:border-primary transition-all duration-200 text-lightText dark:text-darkText"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-lightText dark:text-darkText mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-secondaryDark focus:ring-primary focus:border-primary transition-all duration-200 text-lightText dark:text-darkText"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-lightText dark:text-darkText mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-secondaryDark focus:ring-primary focus:border-primary transition-all duration-200 text-lightText dark:text-darkText"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary dark:bg-primaryLight text-white py-3 rounded-md font-semibold text-lg hover:bg-primaryDark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isLoading ? 'Sending...' : 'Submit Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
