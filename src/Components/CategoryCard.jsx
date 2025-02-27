import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../Service/ServerUrl';

function CategoryCard({ allcategories }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="g-4 mt-2 justify-content-start">
        <div className='d-flex justify-content-between'>
          <h3 className='Logo'>Browse our food categories!</h3>
          <button onClick={() => navigate('/categories')} className='view-category-btn'>
            <FontAwesomeIcon icon={faGrip} bounce /> View More
          </button>
        </div>
        {
          allcategories?.length > 0 ? (
            allcategories.map((category, index) => (
              <Col key={index} xs={6} md={4} lg={2} className="category-col">
               
                  <div className="category-img-wrapper">
                  <Link to={`/categories/${category.food_category_name}`}>
                    <Image 
                      src={`${SERVER_URL + category.category_image}`} 
                      className="category-img"
                      alt={category.food_category_name}
                    />
                     </Link>
                  </div>
               
                <p className='ms-3 categoryText'>{category.food_category_name}</p>
              </Col>
            ))
          ) : <p>Nothing to display</p>
        }
      </Row>
    </Container>
  )
}

export default CategoryCard;




