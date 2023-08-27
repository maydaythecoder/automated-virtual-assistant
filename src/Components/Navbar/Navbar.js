import React from 'react';
import './Navbar.css';







const Navbar = () => {
  return (
    <div>
        <ul>
            <li><p className='logo'>AVA</p></li>
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
