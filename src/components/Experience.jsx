import React from 'react'

import CountUp from 'react-countup';

import AOS from 'aos';
import 'aos/dist/aos.css';
import  {useInView} from 'react-intersection-observer';

import com from '../assets/company.webp'
import com1 from '../assets/company2.webp'
import com2 from '../assets/company3.webp'
import com3 from '../assets/company4.webp'


const Experience = () => {
  const [startAnimation, setStartAnimation] = React.useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

//AOS has been used to show the data sliding when scrolling at the particular place 
 React.useEffect(() => {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-out',
    delay: 100,
    anchorPlacement: 'top-bottom',
    once: true,
  });
  
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);
 
  return (
    //displaying the experience part 
    <React.Fragment>
        <div className='main section cont2' id='History' data-aos="fade-top">

<div className="year" ref={ref} >
<span className="star"></span>
<span className="star1"></span>
<span className="star2"></span>
<CountUp start={0} end={startAnimation ? 10 : 0} duration={6} />
</div>
<div className="show" >
  <div className='exp'>
  <div className='one'>Years of Experience</div>  
  <div className='two'> DreamSoft is a team of highly experienced app designers and developers creating unique software for you.</div> 
  <button className="but" style={{width:"50%"}}>Check it </button>
  </div>
</div>
<div className="about">
<div className='ele'>
  <h2> <CountUp start={0} end={startAnimation ? 2 : 0} duration={6} />K</h2>
  <div className='words'>APPS DEVELOPED</div>
</div>
<div className='ele'>
  <h2>      <CountUp start={0} end={startAnimation ? 40 : 0} duration={6} /></h2>
  <div className='words'>COSULTANTS</div>
</div>
<div className='ele'>
  <h2>      <CountUp start={0} end={startAnimation ? 12 : 0} duration={6} /></h2>
  <div className='words'>AWARDS WON</div>
</div>
<div className='ele'>
  <h2>      <CountUp start={0} end={startAnimation ? 160 : 0} duration={6} /></h2>
  <div className='words'>EMPLOYEES</div>
</div>
</div>
</div>
<div className='main section images' data-aos="fade-bottom">
  <img src={com} className='im' alt="im"  />
  <img src={com1} className='im' alt="im"  />
  <img src={com2} className='im' alt="im"  />
  <img src={com3} className='im' alt="im"  />

</div>
    </React.Fragment>
  
  )
}

export default Experience