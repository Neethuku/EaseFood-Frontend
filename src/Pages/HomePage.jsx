import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryCard from '../Components/CategoryCard';
import FoodCard from '../Components/FoodCard';
import { getAllCategoriesAPI, getAllMenuAPI } from '../Service/AllAPI';
import Spinner from 'react-bootstrap/Spinner';

function HomePage() {
  const pin = sessionStorage.getItem("verifiedPin")
  const [allcategories, setAllcategories] = useState([])
  const[isLoading,setIsLoading] = useState(false)
  console.log('allcategories', allcategories);

  const [tableMenu,setTableMenu] = useState([])
  // console.log(tableMenu);
  

  useEffect(() => {
    getAllCategories()
    getMenu()
  }, [])

  const getAllCategories = async () => {
    setIsLoading(true)
    try {
      const result = await getAllCategoriesAPI(pin)
      if (result.status === 200) {
        setAllcategories(result.data.food_category)
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  }

  const getMenu = async () => {
    setIsLoading(true)
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
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <div>
      {
        isLoading?(
          <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
          <Spinner animation="border" variant="secondary" />
          </div>
        ):(
          <Container>
          <CategoryCard allcategories={allcategories} />
          <hr />
          <Row className="g-4 mt-4 justify-content-center">
          {
            tableMenu?.length>0?
            tableMenu?.map(Menu=>(
              <Col xs={12} sm={6} md={6} lg={4} xl={3} className='mb-4'>
                <FoodCard displaydata={Menu}/> 
              </Col>
            ))
            :
            <div className='fw-bolder text-center'>Nothing to display!!</div>
          }
          </Row>
          </Container>
        )
      }
    
    </div>
  );
}

export default HomePage;