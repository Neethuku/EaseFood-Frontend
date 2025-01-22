import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';


function CategoryCard({ allcategories }) {
  const navigate = useNavigate()
  return (
    <Container>
      <Row className="g-3 mt-4 justify-content-between">
        <div className='d-flex justify-content-between'>
          <h3 className='Logo'>Browse our food categories!</h3>
          <button onClick={() => navigate('/categories')} className=' view-category-btn'>
            <FontAwesomeIcon icon={faGrip} bounce /> View More
          </button>
        </div>
        {
          allcategories?.length > 0 ? (allcategories.map((category, index) => (
            <Col key={index} xs={4} md={3} lg={1} >
              <Link to={'/categories/1'}>
                <Image src="https://www.indianveggiedelight.com/wp-content/uploads/2017/07/veg-pulao-karnataka-style-featured.jpg" roundedCircle fluid />
              </Link>
              <p className='text-center categoryText'>{category.food_category_name}</p>
            </Col>
          ))
          ) : <p>nothing to display</p>
        }
      </Row>
    </Container>
  )
}

export default CategoryCard






