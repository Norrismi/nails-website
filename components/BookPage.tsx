// components/BookPage.tsx
import BookingCalendar from './BookingCalendar';
import { Link } from 'react-router-dom';

const BookPage = () => {
  return (
    <section className="py-20 bg-lightBg dark:bg-darkBg min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-primaryDark dark:text-primary-400">
          Book Your Appointment
        </h1>

        {/* Calendar Card */}
        <div className="max-w-4xl mx-auto">
          <BookingCalendar />
        </div>

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:text-primaryDark dark:hover:text-primary-300 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookPage;