import { Card } from "../components/Card";
import "./Roster.css"
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.js";

import { motion } from "framer-motion";

import ty from "../assets/roster/ty.png";
import graham from "../assets/roster/graham.png"
import jackson from "../assets/roster/jackson.png"
import sperry from "../assets/roster/sperry.png"
import sam from "../assets/roster/sam.png"
import henry from "../assets/roster/henry.png"
import jake from "../assets/roster/jake.png"
import tommy from "../assets/roster/tommy.png"
import brandon from "../assets/roster/brandon.png"
import leo from "../assets/roster/leo.png"
import goodwin from "../assets/roster/goodwin.png"
import tywy from "../assets/roster/tywy.png"
import ullman from "../assets/roster/ullman.png"
import quinn from "../assets/roster/quinn.png"
import jessie from "../assets/roster/jessie.png"
import christian from "../assets/roster/christian.png"
import david from "../assets/roster/david.png"
import ben from "../assets/roster/ben.png"
import kyle from "../assets/roster/kyle.png"
import seth from "../assets/roster/seth.png"
import noah from "../assets/roster/noah.png"
import michael from "../assets/roster/michael.png"
import jared from "../assets/roster/jared.png"
import clarke from "../assets/roster/clarke.png"
import matthew from "../assets/roster/matthew.png"
import karl from "../assets/roster/karl.png"
import joey from "../assets/roster/joey.png"
import brendan from "../assets/roster/brendan.png"
import yager from "../assets/roster/yager.png"
import dort from "../assets/roster/dort.png"








export default function Roster(){
    return (
        
        <div className = 'roster'>

          <div className = 'background-image'>
            <Navbar/>

            <motion.div 
              animate={{ x: 110}}
              transition={{ type: "spring", duration: 1.1 }}
            >
              <h1 className="roster-text">
                2023-2024 Roster
              </h1>
            </motion.div>
          </div>

            <div className = 'content'>
              <Card 
                imgSrc = { ty }
                imgAlt= "#00 Ty Cobb" 
                title = "#00 Ty Cobb" 
              />
              <Card 
                imgSrc =  { joey } 
                imgAlt= "#2 Joey Rowley ⭐" 
                title = "#2 Joey Rowley ⭐" 
              />
              <Card 
                imgSrc = { clarke }
                imgAlt= "#3 Clarke Piatt ⭐" 
                title = "#3 Clarke Piatt ⭐" 
              />   
              <Card 
              imgSrc = { sam }
              imgAlt= "#4 Sam Gombiner" 
              title = "#4 Sam Gombiner" 
              />
              <Card 
              imgSrc = { seth } 
              imgAlt= "#5 Seth Williams" 
              title = "#5 Seth Williams" 
              />     
              <Card 
              imgSrc = { graham }
              imgAlt= "#6 Graham Barton" 
              title = "#6 Graham Barton" 
              /> 
              <Card 
              imgSrc = { dort }
              imgAlt= "#7 Will Dougherty" 
              title = "#7 Will Dougherty" 
              />
              <Card 
              imgSrc = "https://picsum.photos/1920/1920" 
              imgAlt= "#9 Yehuda Skromne" 
              title = "#9 Yehuda Skromne" 
              />
              <Card 
              imgSrc = { brendan }
              imgAlt= "#10 Brendan Slack" 
              title = "#10 Brendan Slack" 
              />
              <Card 
              imgSrc = { ullman }
              imgAlt= "#11 Liam Ullman" 
              title = "#11 Liam Ullman" 
              />
              <Card 
              imgSrc = { matthew }
              imgAlt= "#12 Matthew Lu" 
              title = "#12 Matthew Lu" 
              />
              <Card 
              imgSrc = { michael }
              imgAlt= "#13 Michael Lowry" 
              title = "#13 Michael Lowry" 
              />
              <Card 
              imgSrc = { leo }
              imgAlt= "#14 Leo Friedman" 
              title = "#14 Leo Friedman" 
              />   
              <Card 
              imgSrc = "https://picsum.photos/1920/1920" 
              imgAlt= "#15 Riley Prell" 
              title = "#15 Riley Prell" 
              />
              <Card 
              imgSrc = { kyle } 
              imgAlt= "#16 Kyle Halstater ⭐" 
              title = "#16 Kyle Halstater ⭐" 
              />     
              <Card 
              imgSrc = { jackson } 
              imgAlt= "#20 Jackson Morrow" 
              title = "#20 Jackson Morrow" 
              /> 
              <Card 
              imgSrc = { ben }
              imgAlt= "#22 Ben Green" 
              title = "#22 Ben Green" 
              />
              <Card 
              imgSrc = { karl }
              imgAlt= "#25 Karl Rennick-Zuefle" 
              title = "#25 Karl Rennick-Zuefle" 
              />
              <Card 
              imgSrc = { brandon }
              imgAlt= "#30 Brandon Haines" 
              title = "#30 Brandon Haines" 
              />
              <Card 
              imgSrc = { noah }
              imgAlt= "#32 Noah Knishkowy" 
              title = "#32 Noah Knishkowy" 
              />
              <Card 
              imgSrc = "https://picsum.photos/1920/1920" 
              imgAlt= "#33 Daniel Gatiru" 
              title = "#33 Daniel Gatiru" 
              />
              <Card 
              imgSrc = "https://picsum.photos/1920/1920" 
              imgAlt= "#36 Avneet Singh" 
              title = "#36 Avneet Singh" 
              />
              <Card 
              imgSrc = { jared }
              imgAlt= "#37 Jared Kartschoke" 
              title = "#37 Jared Kartschoke" 
              />
              <Card 
              imgSrc = "https://picsum.photos/1920/1920" 
              imgAlt= "#40 Cain Pfoutz" 
              title = "#40 Cain Pfoutz" 
              />   
              <Card 
              imgSrc = { goodwin }
              imgAlt= "#42 Liam Goodwin" 
              title = "#42 Liam Goodwin" 
              />
              <Card 
              imgSrc = { quinn }
              imgAlt= "#55 Quinn Siegel" 
              title = "#55 Quinn Siegel" 
              />     
              <Card 
              imgSrc = { tywy }
              imgAlt= "#57 Tyler Weinberger ⭐" 
              title = "#57 Tyler Weinberger ⭐" 
              /> 
              <Card 
              imgSrc = { henry }
              imgAlt= "#71 Henry Zou" 
              title = "#71 Henry Zou" 
              />
              <Card 
              imgSrc = { sperry } 
              imgAlt= "#72 Jake Sperry" 
              title = "#72 Jake Sperry" 
              />
              <Card 
              imgSrc = { yager }
              imgAlt= "#83 Matthew Yager" 
              title = "#83 Matthew Yager" 
              />
              <Card 
              imgSrc = { tommy }
              imgAlt= "#84 Tommy Selwood" 
              title = "#84 Tommy Selwood" 
              />
              <Card 
              imgSrc = { david }
              imgAlt= "#85 David DeColli" 
              title = "#85 David DeColli" 
              />
              <Card 
              imgSrc = { christian }
              imgAlt= "#86 Christian Harper" 
              title = "#86 Christian Harper" 
              />
              <Card 
              imgSrc = "https://picsum.photos/1920/1920" 
              imgAlt= "#87 Will Beach" 
              title = "#87 Will Beach" 
              />
              <Card 
              imgSrc = "https://picsum.photos/1920/1920" 
              imgAlt= "#89 Toby Mast" 
              title = "#89 Toby Mast" 
              />
              <Card 
              imgSrc = { jake }
              imgAlt= "Coach Jake Christian" 
              title = "Coach Jake Christian" 
              />
              <Card 
              imgSrc = { jessie } 
              imgAlt= "Coach Jessie Sun" 
              title = "Coach Jessie Sun" 
              />
            </div>
 

            <Footer/>

        </div>

    )
}