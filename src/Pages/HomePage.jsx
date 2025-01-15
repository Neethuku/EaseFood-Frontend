import React, { useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import CategoryCard from '../Components/CategoryCard';
import FoodCard from '../Components/FoodCard';
import Form from 'react-bootstrap/Form';
import { PiChefHatLight } from "react-icons/pi";


function HomePage() {
  const [modalShow, setModalShow] = useState(true);
  const handleModalClose = () => setModalShow(false);

  return (
    <Container>
      <CategoryCard />
      <hr />
      <FoodCard />
      <Modal
        show={modalShow}
        onHide={handleModalClose}
        
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h4 className='LogoText'> <PiChefHatLight className='Logo' size={30} /> Ease<span className='Logo'>Food</span></h4>
        <Form.Select aria-label="Default select example">
      <option>Select your table number</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default HomePage;
