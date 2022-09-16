import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Item from './Item'
const ITEMS = [
  {
    id:1,
    name:'You Are Your Ony Limit',
    genre:'ROMANCE'
  },
  {
    id:2,
    name:'You Are Your Ony Limit',
    genre:'ROMANCE'
  },
  {
    id:3,
    name:'You Are Your Ony Limit',
    genre:'ROMANCE'
  },
  {
    id:4,
    name:'You Are Your Ony Limit',
    genre:'ROMANCE'
  },
  {
    id:5,
    name:'You Are Your Ony Limit',
    genre:'ROMANCE'
  },
  {
    id:6,
    name:'You Are Your Ony Limit',
    genre:'ROMANCE'
  },
  {
    id:7,
    name:'You Are Your Ony Limit',
    genre:'ROMANCE'
  },
  {
    id:8,
    name:'You Are Your Ony Limit',
    genre:'ROMANCE'
  },
  {
    id:9,
    name:'You Are Your Ony Limit',
    genre:'ROMANCE'
  },
  {
    id:10,
    name:'You Are Your Ony Limit',
    genre:'ROMANCE'
  },
]
export default function Items() {
  return (
    <Container className='items' >
        <Row>
          {ITEMS.map((item,index)=> <Item key={index} item={item}/>)}
        </Row>
    </Container>
  )
}
