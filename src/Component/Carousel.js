import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../Assest/Img1.png'
import img2 from '../Assest/Img 2.png'
import img3 from '../Assest/img3.png'

function Carousel() {
  const settings = {
    
    infinite: true,
    speed: 1000, // Adjust speed of transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust interval between slides
    
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img1}alt="Slide 1" />
      </div>
      <div>
        <img src={img2}alt="Slide 2" />
      </div>
      <div>
        <img src={img3} alt="Slide 3" />
      </div>
    </Slider>
  );
}

export default Carousel;
