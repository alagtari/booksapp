import React from 'react'
import { useNavigate } from "react-router-dom";

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
        <span className='App-logo'>
            Author
        </span>
        <span className='signupButton' onClick={navigateToSignup}>
            Sign up
        </span>
        <span className='loginButton' onClick={navigateToLogin}>
            Login
        </span>
        
    </div>
  )
}
