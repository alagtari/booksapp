import React from 'react'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
export default function Navbar() {
  let navigate = useNavigate();
  
    function navigateToSignup() {
        navigate("/signup");
      }
      function navigateToLogin() {
        navigate("/login");
      }  
  return (
    <div className='navbarr'>
        <motion.span
                initial={{
                  opacity:0,
                  x:-200
                }} 
                whileInView={{
                  opacity:1,
                  x:0,
                  transition:{duration:0.6}
                }}
                className='App-logo'>
            Author
        </motion.span>
        <motion.span
                initial={{
                  opacity:0,
                  x:-200
                }} 
                whileInView={{
                  opacity:1,
                  x:0,
                  transition:{duration:0.6}
                }}
                className='signupButton' onClick={navigateToSignup}>
            Sign up
        </motion.span>
        <motion.span
                initial={{
                  opacity:0,
                  x:-200
                }} 
                whileInView={{
                  opacity:1,
                  x:0,
                  transition:{duration:0.6}
                }}
                className='loginButton' onClick={navigateToLogin}>
            Login
        </motion.span>
        
    </div>
  )
}
