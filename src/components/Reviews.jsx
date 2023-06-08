import React from 'react'
import client1 from '../assets/client1.webp'
import client2 from '../assets/client2.webp'
import client3 from '../assets/client3.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Reviews = () => {
  //This part showcasing reviews of the customers 
  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-out',
    delay: 100,
    anchorPlacement: 'top-bottom',
    once: true,
  });

  const arr= [
    {
      name: "Catherine Williams",
      type: "Regular client",
      Desc: "DreamSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years.",
      img: client1
    },
    {
      name: "Rupert Wood",
      type: "Regular client",
      Desc: "DreamSoft powered us with a competent team to develop products for banking services. The team has been delivering results within budget and time, which is amazing.",
      img: client2
    },
    {
      name: "Samantha Brown",
      type: "Regular client",
      Desc: "DreamSoft is a highly skilled and uniquely capable firm with multitudes of talent on-board. We have collaborated on a number of diverse projects that have been a great success.",
      img: client3
    },

  ]
  return (
    <React.Fragment>
<div className='reviews section'>
<h2 data-aos="fade-top">What People Say</h2>
<div className='client'>
  {arr.map((val,index)=>{
    return(
      <div className='clientDetails' key={index} data-aos="fade-bottom">
        <div className='top'>
          <img src={val.img} className='clientImage' alt="clients" />
          <div className='info2'>
            <div className='name'>{val.name}</div>
            <div className='type'>{val.type}</div>
          </div>
        </div>
        <div className='bottom'>{val.Desc}</div>
      </div>
    )
  })}
</div>
</div>
    </React.Fragment>
   
  )
}

export default Reviews