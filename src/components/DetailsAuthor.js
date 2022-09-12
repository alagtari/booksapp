import React from 'react'
import { Col,Row } from 'react-bootstrap'
import profile from '../assets/profile.png'
export default function DetailsAuthor() {
  return (
    <Col md={5}>
        <div style={{marginLeft: '70px'}}>
        <Row>
         <Col md={5}><img src={profile} className='profile-image'/> </Col>
         <Col md={12}><div className='author-name'>Rayen Harbaoui</div> </Col>
        </Row>
        <Row style={{marginTop:'18px'}}>
        <Col md={5}><div className='author-detail-title'>Name:</div> </Col>
         <Col md={7}><div className='author-detail-info'>Franklin Henderson</div> </Col>
        </Row>
        <Row style={{marginTop:'18px'}}>
        <Col md={5}><div className='author-detail-title'>Date of birth:</div> </Col>
         <Col md={7}><div className='author-detail-info'>November 28, 1980</div> </Col>
        </Row>
        <Row style={{marginTop:'18px'}}>
        <Col md={5}><div className='author-detail-title'>Address:</div> </Col>
         <Col md={7}><div className='author-detail-info'>San Francisco CA 97987 USA</div> </Col>
        </Row>
        <Row style={{marginTop:'18px'}}>
        <Col md={5}><div className='author-detail-title'>Email:</div> </Col>
         <Col md={7}><div className='author-detail-info'>franklinsample@gmail.com</div> </Col>
        </Row>
        <Row style={{marginTop:'18px'}}>
        <Col md={5}><div className='author-detail-title'>Phone:</div> </Col>
         <Col md={7}><div className='author-detail-info'>+1-2234-5678-9-0</div> </Col>
        </Row>
        </div>
        
    </Col>
  )
}
