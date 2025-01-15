import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PiChefHatLight } from "react-icons/pi";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { verifyPinAPI } from '../Service/AllAPI';
import { fetchFoods } from '../Redux/Slices/foodSlices';
import { useDispatch, useSelector } from 'react-redux';

//658872
function Landingpage() {
    const [modalShow, setModalShow] = useState(true);
    const [pin, setPin] = useState('')
    const navigate = useNavigate()
    console.log(typeof(pin)); 
    const dispatch = useDispatch()
    const { foods, loading, error } = useSelector((state) => state.foodSlice);

    console.log(foods);
    
      const handleSubmit = () => {
        const result = dispatch(fetchFoods(pin))
        console.log(result);
        
      }

    // const handleSubmit = async() => {
    //     if (!pin) {
    //         toast.warning('Please enter the "PIN"')
    //         return
    //     }
    //     try {
    //         const result = await verifyPinAPI(pin)
    //         if(result.status === 200){
    //             toast.success('PIN Verified')
    //             console.log(result.data);
    //             setTimeout(()=>{
    //                 navigate('/table-track-page')
    //                 setPin("")
    //             },2000)
    //         }
    //         else{
    //             toast.error('Incorrect "PIN".Try again !!!')
    //         }            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
   
    

    // const handleSubmit = async() => {
    //     if (!pin) {
    //         toast.warning('Please enter the "PIN"')
    //         return
    //     }
    //     try {
    //         const result = await dispatch(fetchFoods(pin))
    //         if(result.status === 200){
    //             toast.success('PIN Verified')
    //             console.log(result.data);
    //             setTimeout(()=>{
    //                 navigate('/home-page')
    //                 setPin("")
    //             },2000)
    //         }
    //         else{
    //             toast.error('Incorrect "PIN".Try again !!!')
    //         }            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    return (
        <div>
            <Modal
                show={modalShow}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <h4 className='LogoText'> <PiChefHatLight className='Logo' size={30} /> Ease<span className='Logo'>Food</span></h4>
                    <InputGroup className="mb-3">
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder='Enter Your "PIN" to proceed'
                            onChange={(e) => setPin(e.target.value)}
                            value={pin}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit} variant="secondary">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                autoClose={1500}
                hideProgressBar={true}
                position="top-center"
            />
        </div>
    )
}

export default Landingpage