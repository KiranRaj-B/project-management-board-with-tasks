import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Calendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const currentMonth = new Date(year, month).toLocaleString('default', { month: 'long' });

  // Generate number of days in the selected month
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const daysInMonth = getDaysInMonth(month, year);

  // Create dummy event data
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    return {
      day,
      events: day % 5 === 0 ? ['Team Meeting', 'Project Review'] : [],
    };
  });

  // Handle month navigation
  const prevMonth = () => {
    setMonth(prev => (prev === 0 ? 11 : prev - 1));
    if (month === 0) setYear(prev => prev - 1);
  };

  const nextMonth = () => {
    setMonth(prev => (prev === 11 ? 0 : prev + 1));
    if (month === 11) setYear(prev => prev + 1);
  };

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="p-4 flex items-center justify-between border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              {currentMonth} {year}
            </h2>
            <div className="flex space-x-2">
              <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Days of Week */}
          <div className="p-4">
            <div className="grid grid-cols-7 gap-2 mb-4">
              {days.map(day => (
                <div key={day} className="text-center text-sm font-semibold text-gray-600">
                  {day}
                </div>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((date, index) => {
                const isToday =
                  date.day === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear();

                return (
                  <div
                    key={index}
                    className={`min-h-[120px] p-2 border rounded-lg relative hover:shadow transition-all ${
                      isToday ? 'bg-blue-50 border-blue-300' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-700">{date.day}</span>
                      {isToday && (
                        <span className="text-[10px] text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                          Today
                        </span>
                      )}
                    </div>

                    {date.events.length > 0 ? (
                      <>
                        {date.events.map((event, idx) => (
                          <div
                            key={idx}
                            className="text-xs bg-blue-100 text-blue-800 rounded px-2 py-1 mb-1 truncate"
                          >
                            {event}
                          </div>
                        ))}
                        <div className="text-[10px] text-blue-500 mt-1 cursor-pointer hover:underline">
                          + Add
                        </div>
                      </>
                    ) : (
                      <div className="text-xs text-gray-400 mt-6">No Events</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
