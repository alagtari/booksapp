import React from 'react'
import { Col } from 'react-bootstrap'
import book from '../assets/book.png'
import { useNavigate } from "react-router-dom";

export default function Item() {
  let navigate = useNavigate();

    function navigateToDetails() {
        navigate("/details");
      }
  return (
    <Col md={3} onClick={navigateToDetails} >
        <div className='item' style={{ backgroundImage: `url(${book})`,backgroundRepeat:'round'  }}> 
          <div className='item-cover'>
            <div className='item-text'>
            <div className='item-title'>
              You Are Your Ony Limit
            </div>
            <div className='item-genre'>
              ROMANCE
            </div>
          </div>
          </div>
          
          
        </div>
        
    </Col>
    
  )
}
