import React,{useState} from 'react'
import { Col } from 'react-bootstrap'
import book from '../assets/book.png'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
export default function Item({item}) {
  let navigate = useNavigate();
  const [hovered ,setHovered] = useState(false)

    function navigateToDetails() {
        navigate("/details");
      }
  return (
    <Col md={3} onClick={navigateToDetails} style={{transform:hovered? 'scale(1.02)':'scale(1)'}} >
        <motion.div 
        initial={{
          opacity:0,
          y:50
        }} 
        whileInView={{
          opacity:1,
          y:0,
          transition:{duration:0.6+item.id*0.03}
        }}
        className='item' style={{ backgroundImage: `url(${book})`,backgroundRepeat:'round'  }}> 
          <div className='item-cover'
          
          onMouseEnter={()=>setHovered(true)}
          onMouseLeave={()=>setHovered(false)}
          style={{opacity:hovered?1:0}}
        >
            <div className='item-text'>
            <div className='item-title'>
              {item.name}
            </div>
            <div className='item-genre'>
              {item.genre}
            </div>
          </div>
          </div>
          
          
        </motion.div>
    </Col>
    
  )
}
