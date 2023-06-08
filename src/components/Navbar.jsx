import React, { useEffect, useState } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

const Navbar = () => {
  const [color, setColor] = useState('transparent');
  const [main, setMain] = useState('white');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const upward = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const Scrollbar = () => {
      //the function basically performs 2-3 things
      //1.when the user scroll the navbar color should change 
      //from transparent to white
      //2.it is also changing the navbar button color as well
      //3  it is also showing the arrow icon
      const deal = window.scrollY;
      const check = 500;

      if (deal > check) {
        setColor('white');
        setMain('black');
        document.getElementById('icon').style.display = 'block';
      } else {
        setColor('transparent');
        setMain('white');
        document.getElementById('icon').style.display = 'none';
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', Scrollbar);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', Scrollbar);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={`container ${isMobile ? 'mobile' : ''}`} style={{ backgroundColor: color }}>
        <div className="logo">DreamSoft</div>
        {!isMobile && (
          <div className="nav">
            <a href="#Home" style={{ color: main }}>
              Home
            </a>
            <a href="#Service" style={{ color: main }}>
              Service
            </a>
            <a href="#Projects" style={{ color: main }}>
              Projects
            </a>
            <a href="#History" style={{ color: main }}>
              History
            </a>
            <a href="#Blog" style={{ color: main }}>
              Blog
            </a>
          </div>
        )}
        {isMobile && (
          <div className="sidebar-toggle" onClick={toggleSidebar}>
            <div className={`bar ${isOpen ? 'active' : ''}`}></div>
            <div className={`bar ${isOpen ? 'active' : ''}`}></div>
            <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          </div>
        )}
        {isMobile && isOpen && (
          <div className="sidebar">
            <nav className="sidebar-nav">
              <div className="logo">DreamSoft</div>
              <a href="#Home" onClick={toggleSidebar}>
                Home
              </a>
              <a href="#Service" onClick={toggleSidebar}>
                Service
              </a>
              <a href="#Projects" onClick={toggleSidebar}>
                Projects
              </a>
              <a href="#History" onClick={toggleSidebar}>
                History
              </a>
              <a href="#Blog" onClick={toggleSidebar}>
                Blog
              </a>
            </nav>
          </div>
        )}
      </div>
      <BsFillArrowUpSquareFill
        id="icon"
        onClick={upward}
        style={{
          position: "fixed",
          display: `${color === "white" ? "block" : "none"}`,
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          fontSize: "4em",
          color: "lightblue"
        }}
      />
    </>
  );
};

export default Navbar;
