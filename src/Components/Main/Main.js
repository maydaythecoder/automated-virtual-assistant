import React from 'react'
import "./Main.css"

let Name = ["User"]

//split name
//start as hidden
//reveal one letter at a time

/*

//on hover use effect from parallax file

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index <  iteration ) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if(iteration >= event.target.dataset.value.length){
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

*/

const Main = () => {
  return (
    <div>
      <h1 className='Header'>Hello {Name}</h1>
      <h6 className='Caption'>How can i help you</h6>
      <p className='dash' id='left'>l</p>
      <p className='dash' id='middle'>l</p>
      <p className='dash' id='right'></p>
      <h6 className='ava-small'>AVA</h6>
    </div>
  )
}

export default Main
