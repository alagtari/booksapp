import React from 'react'

export default function FeedNavbar() {
  return (
    <div className='feed-navbar'>
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
    </div>
  )
}
