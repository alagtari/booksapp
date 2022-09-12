import React from 'react'
import DetailsAuthor from '../components/DetailsAuthor'
import DetailsBook from '../components/DetailsBook'
import { Container,Row } from 'react-bootstrap'
export default function Details() {
  return (
    <Container className='details-container'>
        <Row>
            <DetailsBook/>
            <DetailsAuthor/>
        </Row>
    </Container>
  )
}
