import React from 'react';
import FrontPage1 from '../FrontPage/FrontPage1';
import FrontPage2 from '../FrontPage/FrontPage2';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FrontPage3 from '../FrontPage/FrontPage3';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeroSection = () => {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-out',
    delay: 100,
    anchorPlacement: 'top-bottom',
    once: true,
  });

  return (
    //used a carousel over here to show three different pages in the home section
    //File has been created of different pages.....
    <div className="hero-section" id='Home' data-aos="fade-top" >
      <Carousel
     autoPlay
        interval={4000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        transitionTime={1000}
        axis="vertical"
        centerMode={true}

      >
        <div>
          <FrontPage1 className="carousel-slide" />
   
        </div>
        <div>
          <FrontPage2  className="carousel-slide"/>
        </div>
        <div>
          <FrontPage3  className="carousel-slide"/>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
