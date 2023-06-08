import React from 'react'
import blog1 from '../assets/blogs1.webp';
import blog2 from '../assets/blogs2.webp';
import blog3 from '../assets/blogs3.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Blogs = () => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out',
        delay: 100,
        anchorPlacement: 'top-bottom',
        once: true,
      });
//created an array to show the data 
    const arr =[
        {
            name: "Benefits Of Async/Await",
            rating: "07/04",
            Desc: "Asynchronous functions are a good and bad thing in JavaScript. The good side is that asynchronous functions are non-blocking and…",
            img: blog1
        },
        {
            name:"Key Considerations Of IPaaS",
            rating: "07/17",
            Desc: "Digital transformation requires cloud appropriate adoption, legacy IT systems modernization, and Agile-based methodologies for faster…",
            img: blog2
        },
        {
            name:"Hibernate Query Language",
            rating:"07/22",
            Desc:"In this tutorial, we will discuss the Hibernate Query Language. HQL is an object-oriented query language. Hibernate Query...",
            img: blog3
        }

    ]
  return (
    //displaying the Blogs 
   <React.Fragment>
    <div className='section blogs' id='Blog'>
    <h2 data-aos="fade-top">Latest Blog Posts</h2>
    <div className='Blogs'>

    {arr.map((val,index)=>{
        const ratingNumbers = val.rating.split('/');
         // Split the rating into two numbers so that we can show one number bigger and another one smaller 
        return(
            <div className="posts" key={index}  data-aos="fade-right">
                <img className='blogimg' src={val.img} alt="" />
                <div className='rating'>
                  <span className='larger-number'>{ratingNumbers[0]}</span>/
                  {ratingNumbers[1]}
                </div>
                <div className='name' data-aos="fade-left">{val.name}</div>
                <div className='des' data-aos="fade-left">{val.Desc}</div>
            </div>
        )
    })}
    </div>
    </div>
   </React.Fragment>
  )
}

export default Blogs