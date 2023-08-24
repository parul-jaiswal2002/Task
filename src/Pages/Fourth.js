import React, { useState, useEffect } from "react";
import hamburger from '../assets/hamburger2.png'
import logo from '../assets/WhiteLogo.png'
import BlueSquare from "../assets/square.png";
import '../styles/Navbar.css'
import "../styles/fourth.css";

const Fourth = () => {
  const [isRotated, setIsRotated] = useState(false);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div>

        {/* Navbar */}
            <div className="nav">
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
  








      <div className="container">

         <div className="text-container">
                <h1 className="blue">Brand Identity</h1>
                <h1 className="white">Made Easy</h1>
                <p className="white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset
                </p>
                <div className="down-arrow white">
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
         </div>

         <div className="box"  onMouseEnter={toggleRotation}>
            <div className="up-sliding-box">
               <img src={BlueSquare} alt="square" />
            </div>
            <div className={`box-container ${isRotated ? "rotated" : ""}`}>
                <img src={BlueSquare} alt="square" />
            </div>
            <div className="down-sliding-box">
               <img src={BlueSquare} alt="square" />
            </div>
          </div>


      </div>
    </div>
  );
};

export default Fourth;
