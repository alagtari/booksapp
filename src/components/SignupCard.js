import React from 'react'
import { useNavigate } from "react-router-dom";

export default function SignupCard() {
    let navigate = useNavigate();

    function navigateToFeed() {
        navigate("/feed");
      }
      function navigateToLogin() {
        navigate("/login");
      }  


  return (
    <div>
    <div className='login-text'> Create New Account</div>
    <input className='input' type={'text'} placeholder='full name'/>
    <input className='input' type={'email'} placeholder='email'/>
    <input className='input' type={'password'} placeholder='password'/>
    <input className='input' type={'password'} placeholder='confirm password'/>
    <input className='input' type={'number'} placeholder='phone number'/>
    <input className='input' type={'text'} placeholder='address'/>
    <input className='input' type={'date'} placeholder='date of birth'/>
    <div className='login-btn' onClick={navigateToFeed}>Signup</div>
    <div className='login-footer'>Have an account ?<span className='active-login-footer' onClick={navigateToLogin}>Login</span></div>
    </div>
  )
}
