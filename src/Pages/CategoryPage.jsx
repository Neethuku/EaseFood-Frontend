import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import demoimg from '../assets/demoimg.png'
import { getAllCategoriesAPI } from '../Service/AllAPI';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { SERVER_URL } from '../Service/ServerUrl';
import { Link, useParams } from 'react-router-dom';


function CategoryPage() {
  const [allCategories,setAllCategories] = useState([])
  const [filteredCategories,setFilteredCategories] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const {id} = useParams()
  console.log(id);
  

  useEffect(()=>{
    getAllCategories()
  },[])

  const pin = sessionStorage.getItem("verifiedPin")
  const getAllCategories = async() => {
    setIsLoading(true)
    try {
      const result = await getAllCategoriesAPI(pin)
      setAllCategories(result.data.food_category)      
      // console.log(allCategories);
      if(id){
        
      }else{

      }
      
    } catch (error) {
      toast.error("Failed to load categories")
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <Container>
      {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
          <Spinner animation="border" variant="secondary" />
  </div>
      ):(
        <Row className="g-3 justify-content-start">
          <h2 className='text-center Logo'>All Categories</h2>
          {
            allCategories?.length>0? allCategories.map((category,index)=>(
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
            )):<p>No categories found</p>
          }
       
      </Row>
      )}
    
      <ToastContainer
                autoClose={1500}
                hideProgressBar={true}
                position="top-center"
            />
    </Container>
  )
}

export default CategoryPage










// import React, { useEffect, useState } from 'react'
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import demoimg from '../assets/demoimg.png'
// import { getAllCategoriesAPI } from '../Service/AllAPI';
// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-bootstrap';
// import Spinner from 'react-bootstrap/Spinner';
// import { SERVER_URL } from '../Service/ServerUrl';
// import { Link, useParams } from 'react-router-dom';


// function CategoryPage() {
//   const [allCategories,setAllCategories] = useState([])
//   const [isLoading,setIsLoading] = useState(false)
//   const {id} = useParams()
//   console.log(id);
  

//   useEffect(()=>{
//     getAllCategories()
//   },[])

//   const pin = sessionStorage.getItem("verifiedPin")
//   const getAllCategories = async() => {
//     setIsLoading(true)
//     try {
//       const result = await getAllCategoriesAPI(pin)
//       setAllCategories(result.data.food_category)      
//       // console.log(allCategories);
      
//     } catch (error) {
//       toast.error("Failed to load categories")
//     }finally{
//       setIsLoading(false)
//     }
//   }
//   return (
//     <Container>
//       {isLoading ? (
//           <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
//           <Spinner animation="border" variant="secondary" />
//   </div>
//       ):(
//         <Row className="g-3 justify-content-start">
//           <h2 className='text-center Logo'>All Categories</h2>
//           {
//             allCategories?.length>0? allCategories.map((category,index)=>(
//               <Col key={index} xs={6} md={4} lg={2} className="category-col">
               
//                   <div className="category-img-wrapper">
//                   <Link to={`/categories/${category.id}`}>
//                     <Image 
//                       src={`${SERVER_URL + category.category_image}`} 
//                       className="category-img"
//                       alt={category.food_category_name}
//                     />
//                      </Link>
//                   </div>
               
//                 <p className='ms-3 categoryText'>{category.food_category_name}</p>
//               </Col>
//             )):<p>No categories found</p>
//           }
       
//       </Row>
//       )}
    
//       <ToastContainer
//                 autoClose={1500}
//                 hideProgressBar={true}
//                 position="top-center"
//             />
//     </Container>
//   )
// }

// export default CategoryPage