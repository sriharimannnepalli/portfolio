import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='outer'>
        <div className='name'>
            <p>SRIHARI MANNEPALLI</p> 
        </div>

        <ul className='inner'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Qualifications</li>
        <li>Projects</li>
        <li>Contact</li>
        </ul>

        <div className='button'>
        <button >Resume</button>
        </div>
        <img src="https://api.iconify.design/material-symbols:partly-cloudy-day-rounded.svg" alt="" />

    </div>
  )
}

export default NavBar