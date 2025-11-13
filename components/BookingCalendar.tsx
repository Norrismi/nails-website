// components/BookingCalendar.tsx
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths } from 'date-fns';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM'
];

const BookingCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startDayOfWeek = monthStart.getDay();
  const emptyDays = Array.from({ length: startDayOfWeek }, (_, i) => i);

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <div className="bg-white dark:bg-dark-card rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 max-w-5xl mx-auto">
      <div className="w-full">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handlePrevMonth}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous month"
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {format(currentMonth, 'MMMM yyyy')}
          </h3>

          <button
            onClick={handleNextMonth}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next month"
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Weekday Labels */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Calendar Grid — DARK MODE FIXED */}
        <div className="grid grid-cols-7 gap-1 text-sm mb-8">
          {emptyDays.map((_, idx) => (
            <div key={`empty-${idx}`} className="h-10" />
          ))}

          {monthDays.map((day) => {
            const isSelected = selectedDate && isSameDay(day, selectedDate);
            const isToday = isSameDay(day, new Date());

            return (
              <button
                key={day.toISOString()}
                onClick={() => {
                  setSelectedDate(day);
                  setSelectedTime(null);
                }}
                className={`
                  h-10 flex items-center justify-center rounded-lg transition-all font-medium
                  ${isSelected
                    ? 'bg-primary text-white shadow-md'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                  ${isToday && !isSelected
                    ? 'ring-2 ring-primary dark:ring-primary-400'
                    : ''
                  }
                  text-gray-900 dark:text-gray-100
                `}
              >
                {format(day, 'd')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="mt-6">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="font-medium">
              {format(selectedDate, 'EEEE, MMMM d, yyyy')}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`
                  py-3 px-4 rounded-xl border transition-all flex items-center justify-center gap-2 text-sm font-medium
                  ${selectedTime === time
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }
                `}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {time}
              </button>
            ))}
          </div>

          {/* Confirm Button */}
          <button
            disabled={!selectedTime}
            className={`
              mt-6 w-full py-4 rounded-full font-bold text-lg transition-all
              ${selectedTime
                ? 'bg-gradient-gold text-primaryDark shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              }
            `}
          >
            {selectedTime ? 'Confirm Booking' : 'Select a Time'}
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;