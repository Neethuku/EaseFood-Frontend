import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { verifyPinAPI } from '../Service/AllAPI';

function TableTrackPage() {
  const naviagte = useNavigate('')
  const [tables,setTables] = useState([])
  const [tableNo,setableNo] = useState('')
  const [tableStatus,setTableStatus] = useState(false)
  const pin = sessionStorage.getItem("verifiedPin")

  useEffect(() => {
    getTableDatas()
  },[])

  const getTableDatas = async() => {
    const result = await verifyPinAPI(pin)
    setTables(result.data.tables)
    console.log('tres',result.data.tables);
    
  }

  const choosetable = (table) => {
    setableNo(table) 
    setTableStatus(true)

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
  
    <div className="d-flex justify-content-center" style={{marginTop:'140px'}}>
    <Button className="empty-cart-Btn fw-bold"
     >
        Cancel
      </Button>
      <Button className="submit-table fw-bold ms-3"
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

