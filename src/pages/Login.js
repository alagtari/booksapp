import React from 'react'
import landingImage from '../assets/landingpageimage.svg'
import LoginCard from '../components/LoginCard'
export default function Login() {
  return (
    <div className='landing-page'>
        <div className='landing-body'>
            <div className='login-form' style={{paddingTop:'10%'}}> 
            <LoginCard/>
            </div>
            <div >
            <img src={landingImage} className='login-image'/> 
            </div>
            
        </div>
          
    </div>
  )
}
