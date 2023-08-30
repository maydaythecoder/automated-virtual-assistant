import React, { useState, useEffect } from 'react';
import "./Main.css"

const Main = () => {

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
    <div className='all'>
          <h1 className='Header' >Hello User</h1>
      <h6 className='Caption'>How can i help you</h6>
      <p className='dash' id='left'></p>
      <p className='dash' id='middle'></p>
      <p className='dash' id='right'></p>
      <h6 className='ava-small'onMouseOver={handleMouseOver}>{text}</h6>
    </div>
  )
}


export default Main
