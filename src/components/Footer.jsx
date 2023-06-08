import React, { useState } from 'react'
import icon from '../assets/icon.webp'
import {AiFillFacebook,AiFillTwitterCircle,AiFillGooglePlusCircle,AiOutlineInstagram} from 'react-icons/ai'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {

  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-out',
    delay: 100,
    anchorPlacement: 'top-bottom',
    once: true,
  });

const [input1,setInput]= useState('');
const [input2,setInput2]= useState('');
const [textArea,setTextarea]= useState('');


    const showHandle=()=>{
      //when clicking on the submit the data is getting empty
      // so that we don't have to refresh the page to submit the data 
    setInput("");
    setInput2("");
    setTextarea("");
    toast("Thank You",{
        position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 3000,
    closeOnClick: true, 
    pauseOnHover: true,

    });

    }
    const isDisabled = input1.trim() === '' || input2.trim() === '' || textArea.trim() === '';

  return (
    <div className='section footer'>
<div className='left'>

<div className='firstLeft' data-aos="fade-top">
<img src={icon} alt="" />
    <h1>DreamSoft</h1>
</div>

<div className='header'>Our company has been developing high-quality and reliable software for corporate needs since 2008. We are renowned professionals of software development.</div>

<div className="secondLeft">
    <div>ADDRESS</div>
    <div>4730 Crystal Springs Dr, Los Angeles, CA 90027</div>
</div>  
<hr /> 
<div className="secondLeft">
    <div>PHONES</div>
    <div>
    <div>+1 323-913-4688, </div>
    <div>+1 323-888-4554</div>
    </div>
</div>  
<hr /> 
<div className="secondLeft" >
    <div>E-MAILS
</div>
    <div>
    <div>info@demolink.org, </div>
    <div>mail@demolink.org</div>
    </div>
</div> 
<hr />
<div>
<AiFillFacebook/>
<AiFillTwitterCircle/>
<AiFillGooglePlusCircle/>
<AiOutlineInstagram/>
</div>

</div>


<div className='middle' data-aos="fade-bottom">
<h1>Questions?</h1>
<h1>Contact Us</h1>

<div className="form-control">
  <input id='input' value={input1} onChange={(e)=>{setInput(e.target.value)}} className="input input-alt" placeholder="Type Your Name" required type="text" />
  <span className="input-border input-border-alt" />
</div>
<br />
<div className="form-control">

  <input  id='input' value={input2} onChange={(e)=>{setInput2(e.target.value)}} className="input input-alt" placeholder="Type Your E-mail" required type="text" />
  <span className="input-border input-border-alt" />
</div>
<br />
<div className="form-control">
  <textarea  id='input' value={textArea} onChange={(e)=>{setTextarea(e.target.value)}} className="input input-alt" placeholder="Any Message you would like to give?" required type="text" style={{height:"50vh"}}/>
  <span className="input-border input-border-alt" />
</div>
<div><button className='but' onClick={showHandle} disabled={isDisabled}>Submit</button>
<ToastContainer /></div>

</div>
<div className='right' data-aos="fade-top">
<h1>What We Offer</h1>
<hr />
<h2>DB Management</h2>
<hr />
<h2>IOS/MacOS</h2>
<hr />
<h2>Android Apps</h2>
<hr />
<h2>Windows Apps</h2>
<hr />
<h2>UX & U</h2>
</div>
    </div>
  )
}

export default Footer