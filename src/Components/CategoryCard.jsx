import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import demoimg from '../assets/demoimg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';


function CategoryCard() {
    const navigate = useNavigate()
  return (
    <Container>
         <Row className="g-3 mt-4 justify-content-between">
        <div className='d-flex justify-content-between'>
          <h3 className='Logo'>Browse our food categories!</h3>
          <button   onClick={() => navigate('/categories')} className=' view-category-btn'>
            <FontAwesomeIcon icon={faGrip} bounce/> View More
          </button>
        </div>
        <Col xs={4} md={3} lg={1} >
       <Link to={'/categories/1'}>
       <Image src="https://www.indianveggiedelight.com/wp-content/uploads/2017/07/veg-pulao-karnataka-style-featured.jpg" roundedCircle fluid />
       </Link> 
          <p className='text-center categoryText'>Veg</p>
        </Col>
        <Col xs={4} md={3} lg={1} >
          <Image src="https://www.nehascookbook.com/wp-content/uploads/2022/09/Medu-vada-with-sambar-WS-1.jpg" roundedCircle fluid />
          <p className='text-center categoryText'>Snacks</p>
        </Col>
        <Col xs={4} md={3} lg={1} >
          <Image src={demoimg} roundedCircle fluid />
          <p className='text-center categoryText'>Momos</p>
        </Col>
        <Col xs={4} md={3} lg={1} >
          <Image src="https://www.mukhorochak.com/wp-content/uploads/2023/09/motton-biriyani-1.jpeg" roundedCircle fluid />
          <p className='text-center categoryText'>Biriyani</p>
        </Col>
        <Col xs={4} md={3} lg={1} >
          <Image src="https://www.teaforturmeric.com/wp-content/uploads/2023/06/Fish-Curry-Recipe.jpg" roundedCircle fluid />
          <p className='text-center categoryText'>Curry</p>
        </Col>
        <Col xs={4} md={3} lg={1} >
          <Image src="https://images.immediate.co.uk/production/volatile/sites/30/2023/10/Pistachio-tiramisu-6d3d0da.jpg" roundedCircle fluid />
          <p className='text-center categoryText'>Desserts</p>
        </Col>
        <Col xs={4} md={3} lg={1} >
          <Image src="https://www.cubesnjuliennes.com/wp-content/uploads/2022/07/Mango-Juice-Recipe.jpg" roundedCircle fluid />
          <p className='text-center categoryText'>Drinks</p>
        </Col>
        <Col xs={4} md={3} lg={1} >
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQcsW2wJXE7bzrKVV67qgjp2-iw0qeJa1wA&s" roundedCircle fluid />
          <p className='text-center categoryText'>Meals</p>
        </Col>
        <Col xs={4} md={3} lg={1} >
          <Image src={demoimg} roundedCircle fluid />
          <p className='text-center categoryText'>Momos</p>
        </Col>
      </Row>
    </Container>
  )
}

export default CategoryCard