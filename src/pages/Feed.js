import React from 'react'
import FeedNavbar from '../components/FeedNavbar'
import Items from '../components/Items'
export default function Feed() {
  return (
    <div className='feed-page'>
        <FeedNavbar/>
        <Items/>
    </div>
  )
}
