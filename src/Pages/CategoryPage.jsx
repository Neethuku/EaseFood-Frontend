import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import demoimg from '../assets/demoimg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';

function CategoryPage() {
  return (
    <Container className='mt-4'>
         <Row className="g-3 mt-4 justify-content-between">
        <Col xs={4} md={3} lg={2} >
          <Image src={demoimg} roundedCircle fluid />
          <p className='text-center categoryText'>Momos</p>
        </Col>
        <Col xs={4} md={3} lg={2} >
          <Image src={demoimg} roundedCircle fluid />
          <p className='text-center categoryText'>Momos</p>
        </Col>
        <Col xs={4} md={3} lg={2} >
          <Image src={demoimg} roundedCircle fluid />
          <p className='text-center categoryText'>Momos</p>
        </Col>
        <Col xs={4} md={3} lg={2} >
          <Image src={demoimg} roundedCircle fluid />
          <p className='text-center categoryText'>Momos</p>
        </Col>
        <Col xs={4} md={3} lg={2} >
          <Image src={demoimg} roundedCircle fluid />
          <p className='text-center categoryText'>Momos</p>
        </Col>
        <Col xs={4} md={3} lg={2} >
          <Image src={demoimg} roundedCircle fluid />
          <p className='text-center categoryText'>Momos</p>
        </Col>
      </Row>
    </Container>
  )
}

export default CategoryPage