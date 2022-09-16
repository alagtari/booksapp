import React from 'react'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

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
     <motion.div
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.55}
     }}
     className='login-text'> Create New Account</motion.div>
    <motion.input
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.6}
     }}
     className='input' type={'text'} placeholder='full name'/>
    <motion.input
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.64}
     }}
     className='input' type={'email'} placeholder='email'/>
    <motion.input
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.68}
     }}
     className='input' type={'password'} placeholder='password'/>
    <motion.input
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.72}
     }}
     className='input' type={'password'} placeholder='confirm password'/>
    <motion.input
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.76}
     }}
     className='input' type={'number'} placeholder='phone number'/>
    <motion.input
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.8}
     }}
     className='input' type={'text'} placeholder='address'/>
    <motion.input
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.84}
     }}
     className='input' type={'date'} placeholder='date of birth'/>
     <motion.div
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.9}
     }}
      className='login-btn' onClick={navigateToFeed}>Signup</motion.div>
     <motion.div
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.94}
     }}
      className='login-footer'>Have an account ?<span className='active-login-footer' onClick={navigateToLogin}>Login</span></motion.div>
    </div>
  )
}
