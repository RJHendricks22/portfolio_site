import React, { Component } from 'react';
import './App.css';
import './animate.css';

export class Homepage extends Component {
  // <img src={require("./Images/welcome1.png")} /> if i want the welcome picture
  render(){
    
    return(
      
      <div id="welcomePanel" className="animatedSmall colorChange animated">
        <h1 className="animated6 fadeIn animated">Hello, I'm Ray</h1>
        <h2 className="animated7 fadeIn animated">I'm a Full Stack Web Developer</h2>
        <h2 className="animated8 fadeIn animated">Please check out my work and links to my contact info! If you have any questions, email me at RayJHendricks22@gmail.com</h2>
      </div>
    );
  }
};