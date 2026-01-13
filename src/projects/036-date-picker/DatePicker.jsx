import { useState } from 'react';
import './DatePicker.css';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);

    const calendarDays = [];

    // Empty slots for previous month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(
        <div key={`empty-${i}`} className="calendar-day empty"></div>
      );
    }

    // Days of current month
    for (let i = 1; i <= days; i++) {
      const isToday =
        i === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();

      calendarDays.push(
        <div key={i} className={`calendar-day ${isToday ? 'today' : ''}`}>
          {i}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="datepicker-container">
      <h2>Date Picker</h2>
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>&lt;</button>
          <span>
            {date.toLocaleDateString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="calendar-weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendar-grid">{renderCalendar()}</div>
      </div>
    </div>
  );
};

export default DatePicker;
