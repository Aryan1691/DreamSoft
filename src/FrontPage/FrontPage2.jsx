import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import bg from '../assets/img2.webp'
import mobileBg from '../assets/ant3.webp'


const FrontPage2 = () => {
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
    <div className='container2'>
    <img src={isMobile ? mobileBg : bg} alt="bg" style={{ width: '100%', height: 'auto' }} />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <TypeAnimation
        sequence={[
          'Experienced Team',
          2000,
          '',
          1000,
        ]}
        speed={50}
        style={{ fontSize: '3.1em', color: 'white' }}
        repeat={Infinity}
      /><br></br>
      <div style={{color:"white"}}>We are a team of qaulified software developers,aimed at creating unique and powerful tools for your business & everyday life.</div>
      <button className="button">
      Get in touch
</button>
    </div>
  </div>
  )
}

export default FrontPage2