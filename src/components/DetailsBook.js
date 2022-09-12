import React from 'react'
import { Col } from 'react-bootstrap'
import bookImage from '../assets/book.png'
export default function DetailsBook() {
  return (
    <Col md={7} className='details-book'>
        <div className='book-title'>
            You Are Your Ony Limit
        </div>
        <div className='book-description'>
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
        <img src={bookImage} className='book-image' />
    </Col>
  )
}
