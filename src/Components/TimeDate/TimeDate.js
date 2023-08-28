import React, { useState, useEffect } from 'react';
import "./TimeDate.css"

const TimeDate = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const hours = currentTime.getHours();
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const formattedHours = (hours % 12) || 12; // Display 12 instead of 0 for 12 AM/PM

  const formattedTime = `${formattedHours}:${minutes}:${seconds} ${amOrPm}`;
  const formattedDate = `${String(currentTime.getMonth() + 1).padStart(2, '0')}/${String(currentTime.getDate()).padStart(2, '0')}/${currentTime.getFullYear()}`;

  return (
    <div>
      <span className='time'>
        <p>{formattedTime}</p>
      </span>

      <span className='date'>
        <p>{formattedDate}</p>
      </span>
    </div>
  );
}

export default TimeDate;

