import React from 'react'
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
    let navigate = useNavigate();

    function navigateToFeed() {
        navigate("/feed");
      }
      function navigateToSignup() {
        navigate("/signup");
      }  
  return (
    <div>
    <div className='login-text' > Welcome back !</div>
    <input className='input' type={'email'} placeholder='email'/>
    <input className='input' type={'password'} placeholder='password'/>
    <div className='login-btn' onClick={navigateToFeed}>Login</div>
    <div className='login-footer'>Don't have an account ?<span className='active-login-footer' onClick={navigateToSignup}>Signup</span></div>
    </div>
  )
}
