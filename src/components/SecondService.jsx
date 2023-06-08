import React, { useState } from 'react';
import app from '../assets/application.webp'
import app1 from '../assets/application2.webp'

import AOS from 'aos';
import 'aos/dist/aos.css';
const SecondService = () => {
  //this part is showcasing the services which company is offering 
  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-out',
    delay: 100,
    anchorPlacement: 'top-bottom',
    once: true,
  });
  const [data, setData] = useState('1');

  const arr = [
    {
      name: "FREE APPS",
      Desc: "We regularly upload new free apps to our website, which is fully accessible to our clients and subscribers. You can also find out about free apps in our blog.",
      number: "1"
    },
    {
      name: "GET SOCIAL",
      Desc: "Every app we develop has built-in social support that allows you to stay connected to your accounts on Facebook, Instagram, Twitter and others.",
      number: "2"
    },
    {
      name: "CUSTOMER SERVICE",
      Desc: "Every customer of DreamSoft can get access to our friendly and qualified 24/7 support via chat or phone. Feel free to ask us any questions!",
      number: "3"
    },
    {
      name: "GREAT USABILITY",
      Desc: "All our apps are designed to have great usability in order to easily operate our applications. That is why our software has high ratings and lots of awards.",
      number: "4"
    }
  ];

  const showIt = arr.filter((data2) => data2.number === data);

  const updateTheData = (number) => {
    setData(number);
  };

  return (
    <React.Fragment>
      <div className="section services" >
        <div data-aos="fade-top">
          <h2>Get More With Us</h2>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"100px"}}>
          <span className={data==='1' ? 'num active':'num'} onClick={() => updateTheData("1")}>1</span>
          <span className={data==='2' ? 'num active':'num'} onClick={() => updateTheData("2")}>2</span>
          <span className={data==='3' ? 'num active':'num'}onClick={() => updateTheData("3")}>3</span>
          <span className={data==='4' ? 'num active':'num'} onClick={() => updateTheData("4")}>4</span>
</div>
          {showIt.map((data, index) => {
            return (
           
              <div className='con' key={index}  >
              <div  className='name'>{data.name}</div>
              <div className='docs'>{data.Desc}</div>
              <button className='button'>GET IN TOUCH</button>
              <button className='button'>DOWNLOAD PRESENTATION</button>
              </div>
              
          
             );
          })}
        </div>
        
          <img src={app} className='app1' alt="" data-aos="fade-top" />
        
        
          <img src={app1} alt="" data-aos="fade-top" />
        
        <div className="app"></div>
      </div>
    </React.Fragment>
  );
};

export default SecondService;
