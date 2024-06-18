import './Home.css'
import { Navbar } from '../components/Navbar.jsx';
import { Footer } from '../components/Footer.js';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';


import logo_bitt from '../assets/bitt-circle.png';

export function Home() {
    return (
        <body className = 'home'>

            <div className = 'background'>
              <Navbar/>

              <motion.div 
                animate={{ y: 145 }}
                transition={{ type: "spring", duration: 1.5 }}
              >
              <img 
                src = {logo_bitt} 
                alt = "bitt logo" 
                className = 'bitt' 
              />
              </motion.div>
 
              <motion.div 
                animate={{ y: 150 }}
                transition={{ type: "spring", duration: 1.5 }}
              >             
                <h2 className='pitt'>
                  Pitt Men's Ultimate B Team
                </h2>
              </motion.div>
        
              <motion.div 
                animate={{ y: 152 }}
                transition={{ type: "spring", duration: 1.5 }}
              >              
                <h2 className='bitt-text'>
                  Bitt Ultimate
                </h2>  
              </motion.div> 

              <div className="button-container">
                <NavLink to = "/join" activeStyle>
                  <motion.div
                    animate = {{
                      y: -150,
                      transition: { type: "spring", duration: 1.6, delay: 1.3}
                    }}
                    whileHover={{
                      scale: 1.1
                    }}   
                    whileTap={{
                      scale: 0.9
                    }}      
                  >
                    <button className="join-button">
                      Join
                    </button>
                  </motion.div>
                </NavLink>
              </div>

            </div>

            <div className = 'credits'>
                <a href = 'https://www.flickr.com/photos/158318576@N05/albums/'>
                  Photo by Alison Duncan
                </a>
            </div>

            <Footer/>
            
        </body>
    );
}