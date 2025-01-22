import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryCard from '../Components/CategoryCard';
import FoodCard from '../Components/FoodCard';
import { getAllCategoriesAPI, getAllMenuAPI } from '../Service/AllAPI';

function HomePage() {
  const pin = sessionStorage.getItem("verifiedPin")
  const [allcategories, setAllcategories] = useState([])
  console.log('allcategories', allcategories);

  const [tableMenu,setTableMenu] = useState([])
  console.log(tableMenu);
  

  useEffect(() => {
    getAllCategories(),getMenu()
  }, [])

  const getAllCategories = async () => {
    const result = await getAllCategoriesAPI(pin)
    if (result.status === 200) {
      setAllcategories(result.data.food_category)
    } else {
      console.log(result);
    }
  }
  const getMenu = async () => {
    try{
      const result = await getAllMenuAPI(pin)
      console.log(result);
      if(result.status==200){
        setTableMenu(result.data.food_items)
      }else{
          console.log(result.responce.data);
          
      }
      
    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <Container>
      <CategoryCard allcategories={allcategories} />
      <hr />
      <Row className="g-4 mt-4 justify-content-center">
      {
        tableMenu?.length>0?
        tableMenu?.map(Menu=>(
          <Col xs={12} sm={6} md={4} lg={3} xl={3} className='mb-4'>
            <FoodCard displaydata={Menu}/> 
          </Col>
        ))
        :
        <div className='fw-bolder text-center'>Not found!!</div>
      }
      </Row>
    </Container>
  );
}

export default HomePage;