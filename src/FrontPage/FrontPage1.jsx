import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import bg from '../assets/img.webp'
import mobileBg from '../assets/ant.webp'



const FrontPage1 = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();

    
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='container2' >
    <img src={isMobile ? mobileBg : bg} alt="bg" style={{ width: '100%', height: 'auto' }} />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <TypeAnimation
        sequence={[
          'Mobile App Development',
          1000,
          '',
          1000
        ]}
        speed={50}
        style={{ fontSize: '3.1em', color: 'white',paddingTop:'100px' }}
        repeat={Infinity}
      /><br></br>
      <div style={{color:"white"}}>Since our establishment,we have delivering high-quality and sustainable software solutions for corporate purposes of worldwide business.</div>
      <button className="button">
    Get in touch
</button>
    </div>
  </div>
  )
}

export default FrontPage1