import React, { useState, useEffect } from 'react';
import './index.css';

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const Calendar: React.FC = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  useEffect(() => {
    renderCalendar();
  }, [month, year]);

  console.log(date)

  const renderCalendar = () => {
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    const datesHtml: JSX.Element[] = [];

    for (let i = start; i > 0; i--) {
      datesHtml.push(<li className="inactive" key={`prev-${i}`}>{endDatePrev - i + 1}</li>);
    }

    for (let i = 1; i <= endDate; i++) {
      let className = "";
      if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
        className = "today";
      }
      datesHtml.push(<li className={className} key={i}>{i}</li>);
    }

    for (let i = end; i < 6; i++) {
      datesHtml.push(<li className="inactive" key={`next-${i}`}>{i - end + 1}</li>);
    }

    return datesHtml;
  };

  const changeMonth = (direction: number) => {
    let newMonth = month + direction;
    let newYear = year;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setDate(new Date(newYear, newMonth, today.getDate()));
    setMonth(newMonth);
    setYear(newYear);
  };

  return (
    <div className="calendar">
      <header>
        <h3>{`${months[month]} ${year}`}</h3>
        <nav>
          <button id="prev" onClick={() => changeMonth(-1)}></button>
          <button id="next" onClick={() => changeMonth(1)}></button>
        </nav>
      </header>
      <section>
        <ul className="days">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="dates">
          {renderCalendar()}
        </ul>
      </section>
    </div>
  );
};
