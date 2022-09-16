import React from 'react'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
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
    <motion.div
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.5}
     }}
      className='login-text' > Welcome back !
      </motion.div>
    <motion.input
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.56}
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
       transition:{duration:0.64}
     }}
    className='input' type={'password'} placeholder='password'/>
    <motion.div
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.7}
     }}
    className='login-btn' onClick={navigateToFeed}>Login</motion.div>
    <motion.div
    initial={{
       opacity:0,
       x:-80
     }} 
     whileInView={{
       opacity:1,
       x:0,
       transition:{duration:0.74}
     }}
    className='login-footer'>Don't have an account ?<span className='active-login-footer' onClick={navigateToSignup}>Signup</span></motion.div>
    </div>
  )
}
