import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import bg from '../assets/img3.webp'
import mobileBg from '../assets/ant4.webp'


const FrontPage3 = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as per your requirements
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
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
          'Award-Winning Software',
          1000,
          '',
          1000,
        ]}
        speed={50}
        style={{ fontSize: '3.1em', color: 'white' }}
        repeat={Infinity}
      /><br></br>
      <div style={{color:"white"}}>The software solutions developed by our company have been numerously awarded for usability and innovative features.</div>
      <button className="button">
      Get in touch
</button>
    </div>
    
  </div>
  )
}

export default FrontPage3