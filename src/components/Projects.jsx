import React, { useEffect } from 'react';
import mob from '../assets/app.webp';
import mob2 from '../assets/app2.webp';
import qimg from '../assets/QA.webp';
import qimg2 from '../assets/QA2.webp';
import qimg3 from '../assets/QA3.webp';
import cus from '../assets/cus.webp';
import cus2 from '../assets/cus2.webp';
import ui from '../assets/ui.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  //this part display the project 
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
      anchorPlacement: 'top-bottom',
      once: false,
    });
  }, []);

  const [filter, setFilter] = React.useState('all');
  const projects = [
    { name: 'finStep', category: 'QA testing', details: "We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.", image: qimg },
    { name: 'WeatherCast', category: 'QA testing', details: "We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.", image: qimg2 },
    { name: 'WiseMoney', category: 'QA testing', details: "We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.", image: qimg3 },
    { name: 'Mobile Finance', category: 'Mobile Application', details: "We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.", image: mob },
    { name: 'MPlanner', category: 'Mobile Application', details: "We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.", image: mob2 },
    { name: 'Q-Manage', category: 'Web Application', details: "We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.", image: cus },
    { name: 'Alice Messenger', category: 'Web Application', details: "We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.", image: cus2 },
    { name: 'Home Calendar', category: 'UI design', details: "We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.", image: ui },
  ];

  const handleFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filterProjects = () => {
    if (filter === 'all') {
      return projects;
    } else {
      return projects.filter((project) => project.category === filter);
    }
  };

  return (
    <>
      <div className='main section' id='Projects'>
        <h3 className='first' data-aos="zoom-in">Latest Projects</h3>
        <div className='data' data-aos="zoom-in">
          In our portfolio, you can browse the latest products developed for our clients for different corporate purposes.
          Our qualified team of interface designers and software developers is always ready to create something unique for you.
        </div>

        <div className='filter' data-aos="zoom-in">
          <span className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>All</span>
          <span className={`btn ${filter === 'Mobile Application' ? 'active' : ''}`} onClick={() => handleFilter('Mobile Application')}>Mobile App</span>
          <span className={`btn ${filter === 'Web Application' ? 'active' : ''}`} onClick={() => handleFilter('Web Application')}>Customer Software</span>
          <span className={`btn ${filter === 'QA testing' ? 'active' : ''}`} onClick={() => handleFilter('QA testing')}>QA &amp; Testing</span>
          <span className={`btn ${filter === 'UI design' ? 'active' : ''}`} onClick={() => handleFilter('UI design')}>UX and Design</span>

          <select id="filterSelect" style={{width:"100%",padding:"10px",borderRadius:"10px",}} value={filter} onChange={(e) => handleFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="Mobile Application">Mobile App</option>
            <option value="Web Application">Customer Software</option>
            <option value="QA testing">QA &amp; Testing</option>
            <option value="UI design">UX and Design</option>
          </select>
        </div>

        <div className='col' data-aos="zoom-in">
          {filterProjects().map((project, index) => (
            <div className='col1' data-aos="zoom-in" data-aos-delay={`${index * 200}`} key={index}>
              <div className='img'>
                <img src={project.image} alt="img" />
              </div>
              <div className='info'>
                <h3>{project.name}</h3>
                <p>{project.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
