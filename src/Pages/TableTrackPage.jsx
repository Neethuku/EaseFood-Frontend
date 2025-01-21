import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { fetchFoods } from '../Redux/Slices/foodSlices';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function TableTrackPage() {
  const { foods, loading, error } = useSelector((state) => state.foodSlice);
  const naviagte = useNavigate('')
  const [tableNo,setableNo] = useState('')
  const tables = foods.tables
  // const pin = sessionStorage.getItem("verifiedPin")

  if (loading) {
    <p>Loading...</p>
  }

  const choosetable = (table) => {
    setableNo(table) 
  }
  const reserveTable = () => {
    console.log('inside resrve table t',tableNo);
    if(!tableNo){
      toast.warning("Please choose a table!!!"); 
    }else{
      naviagte('/home-page')
    }
  }

  return (
    <Container className="mb-5">
    <h3 className="text-center Logo mt-3">Reserve Your Table</h3>
    <Row className="mt-5 g-3 align-items-center justify-content-center">
      {
        tables?.length > 0 ? tables.map((table,index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
          <div className="table-container">
            {/* Top Chair */}
            <div className="chair top-chair"></div>
    
            {/* Table */}
            <Button className="table-btn" variant="primary" 
            onClick={()=>choosetable(table.table_number)}
            disabled={tableNo && tableNo !== table.table_number}>
            {table.table_number}
            </Button>
    
            {/* Bottom Chair */}
            <div className="chair bottom-chair"></div>
    
            {/* Left Chair */}
            <div className="chair left-chair"></div>
    
            {/* Right Chair */}
            <div className="chair right-chair"></div>
          </div>
        </Col>
        )):<p>No table found</p>
      }
   
  
    </Row>
  
    <div className="d-flex justify-content-center mt-5">
      <Button className="submit-table fw-bold"
      onClick={reserveTable}>
        Reserve Now
      </Button>
    </div>
    <ToastContainer
                autoClose={1500}
                hideProgressBar={true}
                position="top-center"
            />
  </Container>
  
  );
}

export default TableTrackPage;


































// import React, { useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { fetchFoods } from '../Redux/Slices/foodSlices';
// import { useDispatch, useSelector } from 'react-redux';

// function TableTrackPage() {
//   const { foods, loading, error } = useSelector((state) => state.foodSlice);
//   const [pin,setPin] = useState("")
//   const tables = foods.tables

//   if (loading) {
//     <p>Loading...</p>
//   }

//   const handleSubmit = (e) => {
//     console.log('e',e.target.value);
    
//   }

//   console.log('food', foods);
//   return (
//     <Container className='mb-5'>
//       <h4 className="text-center Logo mt-3">Reserve Your Table</h4>
//       <Row className="mt-4 g-3 align-items-center justify-content-center">
//         {
//           tables?.length > 0 ? tables.map((table, index) => (
//             <Col key={index} xs={4} sm={3} md={2} lg={1} className="d-flex justify-content-center">
//               {
//                 table.is_occupied ? (
//                   <Button disabled className="w-100 table-btn-inactive" variant="primary">{table.table_number}
//                   </Button>
//                 ) : <Button className="w-100 table-btn" variant="primary">{table.table_number}
//                 </Button>
//               }
//             </Col>
//           )) : <p>No table found</p>
//         }
//       </Row>
//       <div className='d-flex justify-content-center mt-5'>
//         <Button className='submit-table fw-bold' onClick={(e)=>handleSubmit(e)}>Reserve Now</Button>
//       </div>
//     </Container>
//   );
// }

// export default TableTrackPage;



