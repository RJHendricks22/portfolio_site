import React, { Component } from 'react';
import './App.css';

export class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [
        {name: "GameShot", imageUrl: "./Images/gameshot.png", description: ""},
        {name: "Brick Breaker", imageUrl: "./Images/brickbreakre.png", description: ""},
      ]
    }
  };
  
  render(){
    let nextProject = function() {
      
    }
    return (
      <div id="projectsContainer">
        <h2>Project Title</h2>
        <img src={nextProject} />
      </div>
    );
  }
};