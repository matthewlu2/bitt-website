import React from 'react';
import './Navbar.css';
import logo_bitt from '../assets/bitt-circle.png';
import instagram from '../assets/instagram-transparent-white.png'
import twitter from '../assets/twitter-transparent-white.png'
import youtube from '../assets/youtube-transparent-white.png'
import {NavLink} from './NavbarElements.js';
import { motion } from "framer-motion"


export const Navbar = (

) => {
  
  return (
    <div className = 'navbar'>

      <NavLink to = "/home" activeStyle>
        <motion.div 
          whileHover={{scale: 1.15}}
          whileTap={{scale: 0.9}}
        >
          <img 
            src = {logo_bitt} 
            alt = "bitt logo" 
            className = 'logo' 
          />
        </motion.div>
      </NavLink>
        
      <ul>
        <li>
          <NavLink to = "/home" activeStyle>Home</NavLink>
        </li>
        <li>
          <NavLink to = "/roster" activeStyle>Roster</NavLink>
        </li>
        <li>
          <NavLink to = "/media" activeStyle>Media</NavLink>
        </li>
        <li>
          <NavLink to = "/join" activeStyle>Join</NavLink>
        </li>
      </ul>

        <motion.div 
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.8}} 
        >
          <a href = 'https://twitter.com/BittUltimate' target = "_blank" rel = "noreferrer">
            <img 
              src = {twitter} 
              alt = "twitter logo" 
              className = 'twitter' 
            />
          </a>
        </motion.div>

        <motion.div 
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.8}}
        >
          <a href = 'https://www.instagram.com/bittultimate/' target = "_blank" rel = "noreferrer">
            <img 
              src = {instagram} 
              alt = "instagram logo" 
              className = 'instagram' 
            />
          </a>
        </motion.div>

        <motion.div 
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.8}}
        >
          <a href = 'https://www.youtube.com/@bittultimate' target = "_blank" rel = "noreferrer">
            <img 
              src = {youtube} 
              alt = "youtube logo" 
              className = 'youtube' 
            />
          </a>
        </motion.div>
    </div>
  )
}


