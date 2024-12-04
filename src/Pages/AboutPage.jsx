import React from 'react'
import aboutimg from '../assets/ab2.jpeg'
import aboutImg1 from '../assets/ab11.jpeg'
import { IoFastFood } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";



function AboutPage() {
  return (
    <div className='container mt-5'>
      <div className="row d-flex justify-content-evenly align-items-center">
        <div className="col-6">
          <h2 className='fw-bold Logo'>About Us</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem veritatis ipsum nihil, eaque quisquam maxime
             rem delectus velit fugiat corporis obcaecati maiores blanditiis nostrum suscipit qui accusantium ea harum!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem veritatis ipsum nihil, eaque quisquam maxime
             rem delectus velit fugiat corporis obcaecati maiores blanditiis nostrum suscipit qui accusantium ea harum!</p>
        </div>
        <div className="col-6">
          <img width={'400px'} src={aboutimg} alt="" />
        </div>
      </div>
      <div className="row d-flex justify-content-evenly align-items-center mt-5">
      <div className="col-6">
          <img width={'400px'} src={aboutImg1} alt="" />
        </div>
        <div className="col-6">
          <h2 className='fw-bold Logo'>Why Us</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem veritatis ipsum nihil, eaque quisquam maxime
             rem delectus velit fugiat corporis obcaecati maiores blanditiis nostrum suscipit qui accusantium ea harum!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem veritatis ipsum nihil, eaque quisquam maxime
             rem delectus velit fugiat corporis obcaecati maiores blanditiis nostrum suscipit qui accusantium ea harum!</p>
        </div> 
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="col Logo"><IoFastFood size={44}/>
        <p >Eat well, Live well</p>
        </div>
        <div className="col Logo"><MdFastfood size={44}/>
        </div>
        <div className="col Logo"><MdEmojiFoodBeverage size={44}/></div>
        <div className="col Logo"><PiBowlFoodFill size={44}/>
        </div>
      </div>
    </div>
  )
}

export default AboutPage