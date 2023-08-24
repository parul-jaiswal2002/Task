

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import BlueSquare from "../assets/square.png";
import "../styles/third.css";
import { useNavigate } from "react-router-dom";

const Third = () => {
  const [fourth, setFourth] = useState(false)
  const navigate = useNavigate()

  const handleFourth = () =>{
    setFourth(true)
    navigate('/fourth')
  }

  return (
    <div>
      <Navbar />
      <div className="container" onClick={handleFourth}>

         <div className="text-container">
                <h1 className="blue">Brand Identity</h1>
                <h1 className="white">Made Easy</h1>
                <div className="arrow2 white">
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
         </div>

         
            <div className='box-container'>
                <img src={BlueSquare} alt="square" />
            </div>
            


      </div>
    </div>
  );
};

export default Third;
