import React, { Component } from 'react';
import './App.css';
import './animate.css';

export class Contact extends Component {
  
  render(){
    
    return(
      <div id="contactContainer">
        <h1>Welcome</h1>
        <h1>Contact Info</h1>
        <div className="contactLinks">
          <img src={require("./Images/linkedin.png")} />
          <img src={require("./Images/emailico.png")} />
          <img src={require("./Images/githubwhite.png")} />
        </div>
      </div>
    );
  }
};