import React from 'react'
import "./Cards.css"


/*
TODO: Make Card Data Dynamic: Json File
TODO: add 3 cards, 1 for calender/ 1 for socials/ 1 for News based off user preferences|
*/
const Cards = () => {
  return (
  <div>
    <div className='Card'>
      <h1 id='Card-Header' >Header</h1>
        <h6 id='Card-Footer' >Footer</h6>
      <button id='Card-Button' >Action</button>
    </div>
     <div className='Card2'>
      <h1 id='Card-Header2' >Header</h1>
        <h6 id='Card-Footer2' >Footer</h6>
      <button id='Card-Button2' >Action</button>
    </div>
    <div className='Card3'>
      <h1 id='Card-Header3' >Header</h1>
        <h6 id='Card-Footer3' >Footer</h6>
      <button id='Card-Button3' >Action</button>
    </div>
  </div>
  )
}

export default Cards
