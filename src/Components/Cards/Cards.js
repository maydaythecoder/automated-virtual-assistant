import React, { useState, useEffect,} from 'react';
import "./Cards.css"
import CardData from '../Cards/Cards.json'


/*
TODO: add 3 Cards, 1 for calender/ 1 for socials/ 1 for News based off user preferences|
get data from api
*/

/*

update style, remove absolute positioning

*/


const CardsMapping = () => {
  const [Cards, setCards] = useState([]);

  useEffect(() => {
    setCards(CardData);
  }, []);

  
  return (
  <div>
          {Cards.map((Card) => (
        <div key={Card.id}>
            <div className='Card' >
                <h1 id='Card-Header'>{Card.Title}</h1>
                <h6 id='Card-Footer'>{Card.Description}</h6>
                <button id='Card-Button2'>{Card.Button}</button>
            </div>
        </div>
              ))}
  </div>
  );
};

export default CardsMapping
