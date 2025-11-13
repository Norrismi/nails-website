// components/BookPage.tsx
import BookingCalendar from './BookingCalendar';
import { Link } from 'react-router-dom';

const BookPage = () => {
  return (
    <section className="py-20 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">Book Appointment</h1>

        {/* This is the CARD with outer padding */}
        <div className="max-w-4xl mx-auto">
          <BookingCalendar />  {/* ← This is your calendar */}
        </div>

        <div className="text-center mt-8">
          <Link to="/#contact" className="text-primary">Back to Main Page</Link>
        </div>
      </div>
    </section>
  );
};

export default BookPage;