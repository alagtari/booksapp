import React from 'react'
import landingImage from '../assets/landingpageimage.svg'
import SignupCard from '../components/SignupCard'
import { motion } from 'framer-motion'
export default function Signup() {
  return (
    <div className='landing-page'>
        <div className='landing-body'>
            <div className='login-form'> 
            <SignupCard/>
            </div>
            <div >
            <motion.img
             initial={{
                opacity:0,
                x:-80
              }} 
              whileInView={{
                opacity:1,
                x:0,
                transition:{duration:0.7}
              }} src={landingImage} className='login-image'/>             </div>
            
        </div>
          
    </div>
  )
}
