import React, { useState, useEffect } from 'react';
import './Navbar.css';







const Navbar = () => {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [intervalId, setIntervalId] = useState(null);
  const [text, setText] = useState('');
  
  const handleMouseOver = () => {
    let iteration = 0;
    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setText((prevText) =>
        prevText
          .split('')
          .map((_letter, index) => {
            if (index < iteration) {
              return text.charAt(index);
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    const initialText = 'AVA'; // Set your initial text here
    setText(initialText);
  }, []);

  //onMouseOver={handleMouseOver}>{text}

  return (
    <div>
        <ul>
            <li><p className='logo'onMouseOver={handleMouseOver}>{text}</p></li>
            <span className= "active-links" >
            <li><a className='nav-links' href= "Contacts"> Contacts</a></li>
            <li><a className='nav-links' href= "Reminders">Reminders</a></li>
            <li><a className='nav-links' href= "Settings">Settings</a></li>
            </span>
        </ul>
    </div>
  )
}

export default Navbar
