import React from 'react';
import './Navbar.css';







const Navbar = () => {
  return (
    <div>
        <ul>
            <li> <p className='logo'>A V A</p> </li>
            <span className= "active-links" >
            <li> <a className='nav-links' href= "home">Settings</a> </li>
            <li> <a className='nav-links' href= "Contacts"> Contacts</a></li>
            <li> <a className='nav-links' href= "reminders">Reminders</a></li>
            </span>
        </ul>
    </div>
  )
}

export default Navbar
