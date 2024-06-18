import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PhotoSlider.css"
import ajp from "../assets/ajp-sectionals-small.jpg"
import jake from "../assets/jake-small.jpg"

function PhotoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };
  return (
    <div className="slide-container">
      <Slider {...settings}>
        <div className="card">
          <img 
            src = {ajp} 
            alt = 'ajp'
          />
        </div>
        <div className="card">
          <img 
            src = {jake} 
            alt = 'jake'
          />
        </div>
      </Slider>
    </div>
  );
}

export default PhotoSlider;