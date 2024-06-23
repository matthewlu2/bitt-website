import React from "react";
import Slider from "react-slick";

import { Navbar } from "../components/Navbar.jsx"
import { Footer } from "../components/Footer.js"

import "./Join.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";


import ajp from "../assets/ajp.png"
import highfives from "../assets/highfives.png"
import endofregionals from "../assets/endofregionals.png"
import four from "../assets/four.png"
import together from "../assets/together.png"


export default function Join(){
  const settings = {
    dots: true,
    accessibility: true,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "photos"
  };
    return (
      <div className = 'join'>
        <Navbar/>

      <div className="group">
        <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img 
                  src = {ajp}
                  alt = 'ajp'
                  className= "card"
                />
              </div>
              <div>
                <img 
                  src = { highfives }
                  alt = 'high fives'
                  className= "card"
                />
              </div>
              <div>
                <img 
                  src = { endofregionals }
                  alt = 'end of regionals 2024'
                  className= "card"
                />
              </div>   
              <div>
                <img 
                  src = { four }
                  alt = 'jessie, kyle, jake, tywy'
                  className= "card"
                />
              </div> 
              <div>
                <img 
                  src = { together }
                  alt = 'together'
                  className= "card"
                />
              </div>              
            </Slider>
          </div>


        <div className="writeup">
          <h1>About Us</h1>
            <p className="p1">
              Bitt offers a fun yet competitive environment, making it a fantastic place to make friends and stay in shape. 
              It's also a great opportunity to develop skills both on and off the field. 
              We practice around 3 times a week and participate in 3 to 4 tournaments, including out-of-state competitions against other universities.
            </p>
          <h2>Join Now</h2>
            <p className="p2">
              No experience is necessary! Everyone is welcome to join and learn how to play. 
              With dedicated coaching and a friendly atmosphere, you'll quickly feel at home and confident on the field. 
              Join today!
            </p>
        </div>
      </div>


      <div className="button-container-join">
          <motion.div
            whileHover={{
              scale: 1.1
            }}   
            whileTap={{
              scale: 0.9
            }}      
          >
          <a href ="mailto:pitt.b.ultimate@gmail.com" target = "_blank" rel = "noreferrer">
            <button className="button">Join</button>
          </a>
          </motion.div>
      </div>



        <div className="footer-join">
          <Footer/>
        </div>

      </div>

    )
}

