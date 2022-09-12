import React from 'react'
import landingImage from '../assets/landingpageimage.svg'
import SignupCard from '../components/SignupCard'
export default function Signup() {
  return (
    <div className='landing-page'>
        <div className='landing-body'>
            <div className='login-form'> 
            <SignupCard/>
            </div>
            <div >
            <img src={landingImage} className='login-image'/> 
            </div>
            
        </div>
          
    </div>
  )
}
