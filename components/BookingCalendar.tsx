// components/BookingCalendar.tsx
'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format, isSameDay, startOfDay } from 'date-fns';
import { Clock, CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-calendar/dist/Calendar.css'; // default styles (we’ll override)

type DateValue = Date | null;
type TimeSlot = string; // e.g., "10:00 AM"

const AVAILABLE_TIMES: TimeSlot[] = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

const BookingCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<DateValue>(null);
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [step, setStep] = useState<'date' | 'time'>('date');

  // Reset time when date changes
  const handleDateChange = (value: DateValue) => {
    setSelectedDate(value);
    setSelectedTime(null);
    setStep('time');
  };

  const handleTimeSelect = (time: TimeSlot) => {
    setSelectedTime(time);
  };

  const handleBack = () => {
    setStep('date');
    setSelectedTime(null);
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;
    alert(
      `Booking Request:\nDate: ${format(selectedDate, 'PPP')}\nTime: ${selectedTime}\n\n(This will be sent to your backend later!)`
    );
    // Later: POST to /api/book or Formspree
  };

  return (
    <div className="bg-white dark:bg-darkCard rounded-2xl shadow-card p-6 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-playfair font-bold text-primaryDark dark:text-white">
          {step === 'date' ? 'Choose a Date' : 'Choose a Time'}
        </h2>
        {step === 'time' && (
          <button
            onClick={handleBack}
            className="text-primary hover:text-primaryDark flex items-center gap-1 text-sm"
          >
            <ChevronLeft size={16} /> Back
          </button>
        )}
      </div>

      {/* Step 1: Calendar */}
      {step === 'date' && (
        <div className="calendar-container">
          <Calendar
            onChange={handleDateChange as any}
            value={selectedDate}
            tileClassName={({ date, view }) => {
              if (view === 'month' && selectedDate && isSameDay(date, selectedDate)) {
                return 'bg-primary text-white rounded-full';
              }
              return '';
            }}
            prevLabel={<ChevronLeft className="text-primary" />}
            nextLabel={<ChevronRight className="text-primary" />}
            className="border-0"
          />
        </div>
      )}

      {/* Step 2: Time Slots */}
      {step === 'time' && selectedDate && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <CalendarIcon size={16} />
            <span>{format(selectedDate, 'EEEE, MMMM d, yyyy')}</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {AVAILABLE_TIMES.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                  selectedTime === time
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'border-gray-300 dark:border-gray-600 hover:border-primary text-gray-700 dark:text-gray-200'
                }`}
              >
                <Clock size={16} className="inline mr-1" />
                {time}
              </button>
            ))}
          </div>

          <button
            onClick={handleConfirm}
            disabled={!selectedTime}
            className="w-full mt-6 bg-gradient-gold text-primaryDark font-bold py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;