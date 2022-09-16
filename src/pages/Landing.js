import React from 'react'
import Navbar from '../components/Navbar'
import landingImage from '../assets/landingpageimage.svg'
import { useNavigate } from "react-router-dom";
import { motion  } from "framer-motion";

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
                <motion.div
                initial={{
                  opacity:0,
                  x:-100
                }} 
                whileInView={{
                  opacity:1,
                  x:0,
                  transition:{duration:0.4}
                }}
                 className='landing-title'>
                    Clue Of The Wooden Cottage
                </motion.div>  
                <motion.div
                initial={{
                  opacity:0,
                  x:-100
                }} 
                whileInView={{
                  opacity:1,
                  x:0,
                  transition:{duration:0.5}
                }}
                className='landing-description'>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </motion.div>
                <motion.div
                initial={{
                  opacity:0,
                  x:-100
                }} 
                whileInView={{
                  opacity:1,
                  x:0,
                  transition:{duration:0.55}
                }}
                className='landing-button' onClick={navigateToSignup}>
                Signup now
                </motion.div>
            </div>
            <motion.div
                initial={{
                  opacity:0,
                  x:-100
                }} 
                whileInView={{
                  opacity:1,
                  x:0,
                  transition:{duration:0.6}
                }}
                 className='landing-image'>
            <img src={landingImage}/> 
            </motion.div>
            
        </div>
          
    </div>
  )
}
