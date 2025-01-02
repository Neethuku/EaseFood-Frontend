import React, { useState } from 'react';
import EmptyCartImage from '../assets/cart-image.gif';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dummyImg from '../assets/dummy img.webp'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';



function CartPage() {
  const [emptyCart,setEmptyCart] = useState(false)
  const handleEmptyCart = () => {
    setEmptyCart(true)
  }
  return (
    <div className='container mt-5'>
      {
        !emptyCart ? (
          <div className="row d-flex">
          <div className="col-lg-8 col-md-12">
          <Table  className='shadow'>
        <thead>
          <tr>
            <th>#</th>
            <th>Items</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='td-price'>1</td>
            <td className='d-flex align-items-center'>
              <div>
                <img className="img-fluid" width={'80px'} src={dummyImg} alt="food img" />
              </div>
              <div className='d-flex align-items-center'>
                <p className='ms-3 mb-0'>Masala Dosa</p>
              </div>
              </td>
             <td>
              <div className='d-flex  align-items-center mt-2'>
                <button className="quantity-btn  me-2">-</button>
                3
                <button className="quantity-btn ms-2">+</button>
              </div>
             </td>
            <td className='td-price'>₹180</td>
          </tr>
          <tr>
            <td className='td-price'>2</td>
            <td className='d-flex'>
              <div>
                <img width={'80px'} src={dummyImg} alt="food img" />
              </div>
              <div className='d-flex align-items-center'>
                <p className='ms-3'>Masala Dosa</p>
              </div>
              </td>
             <td>
              <div className='d-flex mt-3'>
                <button className="quantity-btn me-2">-</button>
                3
                <button className="quantity-btn ms-2">+</button>
              </div>
             </td>
            <td className='td-price'>₹180</td>
          </tr>
          <tr>
            <td className='td-price'>3</td>
            <td className='d-flex'>
              <div>
                <img width={'80px'} src={dummyImg} alt="food img" />
              </div>
              <div className='d-flex align-items-center'>
                <p className='ms-3'>Masala Dosa</p>
              </div>
              </td>
  
              <td>
              <div className='d-flex mt-3'>
                <button className="quantity-btn me-2">-</button>
                3
                <button className="quantity-btn ms-2">+</button>
              </div>
             </td>
            <td className='td-price'>₹180</td>
          </tr>
        </tbody>
      </Table>
      <div className='d-flex flex-wrap justify-content-end mt-4 mb-3'>
          <Button onClick={handleEmptyCart} className='empty-cart-Btn me-2 mb-2'>
            Empty Cart
          </Button>
          <Link  to = {'/'}>
          <Button className='view-more-Btn mb-2'>
            View More
          </Button>
          </Link>
        </div>
          </div>

          <div className="col-lg-4 col-md-12">
          <Card style={{ border:'none'}} className='shadow'>
        <Card.Body>
          <Card.Title className='fw-bold'>Price Details</Card.Title>
          <div className='d-flex justify-content-between mb-3'>
            <p>Price (3) items</p>
          <p>₹460</p>
          </div>
          <Button className='checkout-Btn'>Checkout</Button>
        </Card.Body>
      </Card>
          </div>
        </div>
        ):(
           <div className='container-fluid cart-container'>
      <div className='text-center'>
        <img
          className='img-fluid'
          src={EmptyCartImage}
          alt='Empty Cart'
          style={{ maxWidth: '100%', height: '250px' }}
        />
        <h3 className='cart-Heading fw-bold mt-1'>Your cart is empty</h3>
        <p className='cart-Paragraph mb-4'>
          You can go to home page to view more menu.
        </p>
        <Link  to = {'/'}>
        <Button className='explore-Btn'>
          Explore Dishes
        </Button>
        </Link>
      </div>
    </div>
        )
      }
     
     
    </div>
   
  );
}

export default CartPage;








