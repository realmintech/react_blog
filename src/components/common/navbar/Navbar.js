import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [click, setClicked] = useState(false)
  const handleClick =(e) => setClicked(!click)
  return (
    <>
      <div className='navbar'>
        <div className='nav-logo'>
          <h2>Untitled UI</h2>
        </div>
        <div className={click ? 'nav-menu active' : "nav-menu"}>
            <li className='nav-item'>
              <Link to='/' className='nav-link' activeClassName='active' onClick={handleClick}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='./components/pages/about/About' className='nav-link' onClick={handleClick} activeClassName='active'>About</Link>
            </li>
            <li className='nav-item'>
              <Link to='./components/pages/contact/Contact' className='nav-link' onClick={handleClick} activeClassName='active'>Contact</Link>
            </li>
        </div>
        <div className='context'>
               <li className='nav-item'><Link to='./components/context/login/Login' className='nav-link'>Login</Link></li>
               <li className='nav-item'><Link to='./components/context/register/Register' className='nav-link'>Register</Link></li>
            </div>
            <div className='nav-icon' onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fa-solid fa-bars"} ></i>
            </div>
        </div>
    </>
  )
}