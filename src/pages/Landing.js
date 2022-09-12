import React from 'react'
import Navbar from '../components/Navbar'
import landingImage from '../assets/landingpageimage.svg'
import { useNavigate } from "react-router-dom";

export default function Landing() {
  let navigate = useNavigate();

  function navigateToSignup() {
        navigate("/signup");
      }
  return (
    <div className='landing-page'>
        <Navbar/>
        <div className='landing-body'>
            <div className='landing-text'> 
                <div className='landing-title'>
                    Clue Of The Wooden Cottage
                </div>  
                <div className='landing-description'>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </div>
                <div className='landing-button' onClick={navigateToSignup}>
                Signup now
                </div>
            </div>
            <div className='landing-image'>
            <img src={landingImage}/> 
            </div>
            
        </div>
          
    </div>
  )
}
