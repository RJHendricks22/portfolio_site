import React, { Component } from 'react';
import './App.css';
import './animate.css';

export class AboutMe extends Component {
  
  render(){
    
    return(
      <div id="AboutMe">
        <div className="aboutmecontainer animated fadeIn">
          <img src={require("./Images/hs1.jpg")} />
          <div className="aboutmetype">
          <p>
            My background in music and engineering supports me in approaching a problem using both facts and creativity.  I use logical thinking to combine both aspects and come to an effective solution.  I am always curious about the various routes to an answer, and value building relationships and receiving feedback from peers.
            <br/><br/>
            I discovered my passion for programming and web development later in life, but that hasn't stopped me from pursuing my passion.  Building these vast websites and apps joins my creativity and intuition in ways I've never experienced.  Because of this, my skills traverse both Front-end and Back-end development, and so does my enjoyment.
          </p>
            </div>
        </div>
      </div>
    )
  }
}