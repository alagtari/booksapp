import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion';
export default function FeedNavbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 120) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });
    }, []);
  return (
    <motion.div
     initial={{
       opacity:0,
       y:-50
     }} 
     whileInView={{
       opacity:1,
       y:0,
       transition:{duration:0.6}
     }} className={scrolled?'feed-navbar scrolled-navbar':'feed-navbar'}>
        <span className='feed-App-logo'>
            Author
        </span>
        <span className='feed-nav-link active'>
            All
        </span>
        <span className='feed-nav-link'>
            Romance
        </span>
        <span className='feed-nav-link'>
            Drama
        </span>
        <span className='feed-nav-link'>
            Comedy
        </span>
        <span className='feed-nav-link'>
            Horror
        </span>
        <span className='feed-nav-link'>
            Historical
        </span>
        <span className='add-book-button'>
            Add a book
        </span>
    </motion.div>
  )
}
