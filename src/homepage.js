import React, { Component } from 'react';
import './App.css';
import './animate.css';

export class Homepage extends Component {
  
  render(){
    
    return(
      <div id="welcomePanel" className="animated2 fadeIn">
        <img src={require("./Images/welcome1.png")} />
      </div>
    );
  }
};