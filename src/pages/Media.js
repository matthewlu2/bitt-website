import YoutubeEmbed from "./YouTubeEmbed"
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.js";
import "./styles.css";
import "./Media.css";

export default function Media(){
    return (
        <div className = 'media'>
          <Navbar/>

          <div className="text1">
            <h1>Media</h1>
          </div>

          <div className="group">

            <div className="video">
              <YoutubeEmbed embedId="wJyWz9m96AA"/>
            </div>

            <div className="text3">
              <h2>Kyle Halstater for Callahan 2024</h2>
              <p>
              In my three years of coaching Pitt B, Kyle has been a leader in every sense of the word. 
              He brings a passion and intensity into his play on the field which is inspiring and infectious. 
              He manages to be a fiery player, while at the same time keeping the fun loving and lighthearted attitude that reminds people why they fell in love with the sport.
              Rumor has it that Bitt is the more fun Pitt team to play on, and the atmosphere created by Kyle has a large hand in that. 
              On the field, Kyle takes the hardest defensive matchups, and brings needed firepower to the D Line’s offense. 
              Off the field Kyle does much of the unseen and thankless work to keep the team running logistically and works hard to bring up the younger players around him. 
              He is constantly supporting his teammates with sideline talk, feedback, and positivity. 
              I am excited to watch Kyle as progresses in his ultimate and professional career. <br/> <br/> – Jake Christian
              </p>
            </div>

          </div>


            <div className="text2">
                <h2>Other videos</h2>
            </div>

          <div className="grid-container">
            <div className="grid-item"><YoutubeEmbed embedId="G9G7FRCVui0"/></div>
            <div className="grid-item"><YoutubeEmbed embedId="hEaZfvm0QTw"/></div>   
            <div className="grid-item"><YoutubeEmbed embedId="8WOFkD_5oE0"/></div>
            <div className="grid-item"><YoutubeEmbed embedId="s5usr7wgLQY"/></div>   
            <div className="grid-item"><YoutubeEmbed embedId="ZYOyurO4zlc"/></div>
            <div className="grid-item"><YoutubeEmbed embedId="RMF3SEDURUM"/></div>                        
          </div>
            
            <Footer/>
        </div>
    )
}
