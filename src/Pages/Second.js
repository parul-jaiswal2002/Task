import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import BlueSquare from '../assets/square.png'
import '../styles/first.css'
import '../styles/second.css'
import { useNavigate } from 'react-router-dom'

const Second = () => {
    const [third, setThird] = useState(false)
    const navigate = useNavigate()

    const handleThird = () => {
      setThird(!third)
      navigate('/third')
    }

  return (
    <div>
        <Navbar/>
        <div className='main-container' onClick={handleThird}>
            <div className='first-container second-page'>
                <img src={BlueSquare} alt='square'/>
            </div>
            <div className='second-container'>
                    <h1 className='blue'>Brand Identity</h1>
                    <h1 className='white'>Made Easy</h1>
                    <div className='arrow white'><i class="fa-solid fa-arrow-down"></i></div>
            </div>
        </div>
    </div>
  )
}

export default Second