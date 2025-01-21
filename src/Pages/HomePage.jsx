import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import CategoryCard from '../Components/CategoryCard';
import FoodCard from '../Components/FoodCard';
import Form from 'react-bootstrap/Form';
import { PiChefHatLight } from "react-icons/pi";
import { getAllCategoriesAPI } from '../Service/AllAPI';


function HomePage() {
  const pin = sessionStorage.getItem("verifiedPin")
  const [allcategories,setAllcategories] = useState([])
  console.log('allcategories',allcategories);
  
  useEffect (() => {
    getAllCategories()
  },[])
  
  const getAllCategories = async() => {
    const result  = await getAllCategoriesAPI(pin)
    if(result.status === 200){
      setAllcategories(result.data.food_category)
    }else{
      console.log(result);
      
    } 
  }

  return (
    <Container>
      {
        allcategories?.length>0? allcategories.map((category,index)=>(
          <CategoryCard key={index} category={category} />
        )):<p>Nothing to display</p>
      }
    
      <hr />
      <FoodCard />
    </Container>
  );
}

export default HomePage;







// import React, { useEffect, useState } from 'react';
// import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
// import CategoryCard from '../Components/CategoryCard';
// import FoodCard from '../Components/FoodCard';
// import Form from 'react-bootstrap/Form';
// import { PiChefHatLight } from "react-icons/pi";
// import { getAllCategoriesAPI } from '../Service/AllAPI';


// function HomePage() {
//   const pin = sessionStorage.getItem("verifiedPin")
//   const [allcategories,setAllcategories] = useState([])
//   console.log('allcategories',allcategories);
  
//   useEffect (() => {
//     getAllCategories()
//   },[])
  
//   const getAllCategories = async() => {
//     const result  = await getAllCategoriesAPI(pin)
//     if(result.status === 200){
//       setAllcategories(result.data.food_category)
//     }else{
//       console.log(result);
      
//     } 
//   }

//   return (
//     <Container>
//       {
//         allcategories?.length>0? allcategories.map((category,index)=>(
//           <CategoryCard key={index} category={category} />
//         )):<p>Nothing to display</p>
//       }
    
//       <hr />
//       <FoodCard />
//     </Container>
//   );
// }

// export default HomePage;
