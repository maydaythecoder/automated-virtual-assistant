import React from 'react'
import "./Cards.css"


/*
TODO: Make Card Data Dynamic: Json File
TODO: add 3 cards, 1 for calender/ 1 for socials/ 1 for News based off user preferences|
*/
const Cards = () => {
  return (
    <div className='Card'>
      <h1 id='Card-Header' >Header</h1>
      <h6 id='Card-Footer' >Footer</h6>
      <button id='Card-Button' >Action</button>
    </div>
  )
}

export default Cards
