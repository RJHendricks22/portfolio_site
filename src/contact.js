import React, { Component } from 'react';
import './App.css';
import './animate.css';

export class Contact extends Component {
  
  render(){
    
    return(
      <div id="contactContainer">
        <h1>Contact Me</h1>
        <div className="contactLinks">
          <div className="animated fadeInUpBig"><a href="https://www.linkedin.com/in/raymond-hendricks/"><img src={require("./Images/linkedin.png")} /></a></div>
          <div className="animated3 fadeInUpBig"><a href="mailto:rayjhendricks22@gmail.com"><img src={require("./Images/emailico.png")} /></a></div>
          <div className="animated4 fadeInUpBig"><a href="https://github.com/RJHendricks22"><img src={require("./Images/githubwhite.png")} /></a></div>
          <div className="animated5 fadeInUpBig"><a href="https://drive.google.com/open?id=0B9AtsgwGJQq4anNZVFVHZDk5UUk"><img src={require("./Images/resumeicon.png")} /></a></div>
        </div>
      </div>
    );
  }
};