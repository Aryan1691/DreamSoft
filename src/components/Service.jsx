import React from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import {TfiHeadphoneAlt} from 'react-icons/tfi'
import {AiOutlineCloudServer} from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  AOS.init({
    offset: 200,
    duration: 1000,
    easing: 'ease-in-out',
    delay: 100,
    anchorPlacement: 'top-bottom',
    once: true,
  });
 
  // This section showcases the services offered by the company.
// The details are split into two separate files: 'Service' and 'SecondService'.
const arr =[
 
  {
    name :"CORPORATE SOLUTIONS",
    icon : <BiPhoneCall/>,
    details : "Need specific software for your company? We are ready to develop it!"
  },
  {
    name : "CALL CENTER SOLUTIONS",
    icon : <TfiHeadphoneAlt/>,
    details : "Our experts provide custom products of any complexity for call centers."
  },
  {
    name : "CLOUD DEVELOPMENT",
    icon : <AiOutlineCloudServer/>,
    details : "We can also offer you reliable cloud development solutions."
  }
]
  return (
    <div className='main' id='Service'>
      <div className="servImg" data-aos="zoom-in" ></div>
      <div className="block">
    <div className='check' data-aos="fade-bottom" > 
    <h1 style={{width:'160px',textAlign:'center'}}
    >See all Services</h1>
    <hr/>
    <button className="button">All services</button>
    </div>
    {arr.map((val) => {
  return (
    <div key={val.name} className="check" data-aos="zoom-in">
      {val.icon}
      <h4>{val.name}</h4>
      <hr />
      <div className="caption">{val.details}</div>
    </div>
  );
})}

   
    
    
    </div>
 
    </div>
  )
}

export default Service