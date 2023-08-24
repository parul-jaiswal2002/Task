import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlueSquare from '../assets/square.png'
import hamburger from '../assets/Group 2.png'
import logo from '../assets/LOGO2 1.png'
import '../styles/Navbar.css'
import '../styles/first.css'


const First = () => {
    const [second, setSecond] = useState(false)
    const navigate = useNavigate()
    
    const handleSecond = () => {
        setSecond(!second)
        navigate('/second')
    }

  return (
    <div>
       
           {/* ---------------Navbar-------------------------- */}
    
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

           
           {/* -----------------------First page-------------------- */}

        <div className='main-container' onClick={handleSecond}>
            <div className='first-containr'>
                <img src={BlueSquare} alt='square'/>
            </div>
            <div className='second-container'>
                    <h1 className='white'>Key to your</h1>
                    <h1 className='blue'>Digital Empire</h1>
                    <div className='arrow white'><i class="fa-solid fa-arrow-down"></i></div>
            </div>
        </div>


        

    </div>
  )
}

export default First