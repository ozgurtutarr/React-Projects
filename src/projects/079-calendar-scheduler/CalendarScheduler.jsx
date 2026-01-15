import { useState } from 'react';
import './CalendarScheduler.css';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const HOURS = Array.from({ length: 13 }, (_, i) => i + 8); // 8 AM to 8 PM

const CalendarScheduler = () => {
  const [events, setEvents] = useState([
    { id: 1, day: 'Mon', hour: 9, title: 'Standup', color: '#ffadad' },
    { id: 2, day: 'Wed', hour: 14, title: 'Client Meeting', color: '#ffd6a5' },
    { id: 3, day: 'Fri', hour: 16, title: 'Code Review', color: '#caffbf' },
  ]);

  const addEvent = (day, hour) => {
    const title = prompt('Enter Event Title:');
    if (title) {
      const newEvent = {
        id: Date.now(),
        day,
        hour,
        title,
        color: '#a0c4ff',
      };
      setEvents([...events, newEvent]);
    }
  };

  const removeEvent = (e, id) => {
    e.stopPropagation();
    if (window.confirm('Delete this event?')) {
      setEvents(events.filter((ev) => ev.id !== id));
    }
  };

  const getEvent = (day, hour) => {
    return events.find((ev) => ev.day === day && ev.hour === hour);
  };

  return (
    <div className="scheduler-container">
      <h2>Calendar Scheduler</h2>
      <p>Click on a slot to add an event. Click 'x' to delete.</p>

      <div className="calendar-grid">
        <div className="corner-header"></div>
        {DAYS.map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}

        {HOURS.map((hour) => (
          <>
            <div key={`time-${hour}`} className="time-label">
              {hour}:00
            </div>
            {DAYS.map((day) => {
              const event = getEvent(day, hour);
              return (
                <div
                  key={`${day}-${hour}`}
                  className="time-slot"
                  onClick={() => !event && addEvent(day, hour)}
                >
                  {event && (
                    <div
                      className="event-card"
                      style={{ backgroundColor: event.color }}
                    >
                      <span>{event.title}</span>
                      <button
                        className="delete-event-btn"
                        onClick={(e) => removeEvent(e, event.id)}
                      >
                        &times;
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        ))}
      </div>
    </div>
  );
};

export default CalendarScheduler;
