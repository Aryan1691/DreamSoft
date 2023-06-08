import React from 'react'
import creator1 from '../assets/creator.webp'
import creator2 from '../assets/creator2.webp'
import creator3 from '../assets/creator3.webp'
import creator4 from '../assets/creator4.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Creator = () => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out',
        delay: 100,
        anchorPlacement: 'top-bottom',
        once: true,
      });
      //created an array to show the data 
    const arr=[
        {
            name: "Ryan Wilson",
            Desc: "Director of Production",
            img: creator1
        },
        {
            name: "Jill Peterson",
            Desc: "UI Designer",
            img: creator2
        },
        {
            name: "Sam Robinson",
            Desc: "Senior Developer",
            img: creator3
        },
        {
            name: "Mary lee",
            Desc: "Software Developer",
            img: creator4
        }
    ]
  return (
    //displaying the Creators 
    <div className="main section Creator">
    <h2 data-aos="fade-bottom">Meet The Team</h2>
    <div className='creatorContainer'>
    {arr.map((val,ind)=>{
        return(
  
            <div className='creators' key={ind}  data-aos="fade-top">
            <img src={val.img} alt=""  className='images1'/>
            <div className='data1'>
            <h3>{val.name}</h3>
            <div>{val.Desc}</div>
            </div>
            </div>
        
        )
    })}
    </div>
    </div>
  )
}

export default Creator