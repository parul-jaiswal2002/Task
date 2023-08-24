import React from 'react'
import hamburger from '../assets/hamburger2.png'
import logo from '../assets/LOGO2 1.png'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='hamburger'><img src={hamburger} alt='hamburger'/></div>
            <div className='logo'><img src={logo} alt='logo' /></div>
            <div className='menu'>
                <a href='#'>About</a>
                <a href='#'>Work</a>
                <a href='#'>Contact Us</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar