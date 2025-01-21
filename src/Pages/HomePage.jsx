import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CategoryCard from '../Components/CategoryCard';
import FoodCard from '../Components/FoodCard';
import { getAllCategoriesAPI } from '../Service/AllAPI';


function HomePage() {
  const pin = sessionStorage.getItem("verifiedPin")
  const [allcategories, setAllcategories] = useState([])
  console.log('allcategories', allcategories);

  useEffect(() => {
    getAllCategories()
  }, [])

  const getAllCategories = async () => {
    const result = await getAllCategoriesAPI(pin)
    if (result.status === 200) {
      setAllcategories(result.data.food_category)
    } else {
      console.log(result);
    }
  }

  return (
    <Container>
      <CategoryCard allcategories={allcategories} />
      <hr />
      <FoodCard />
    </Container>
  );
}

export default HomePage;





