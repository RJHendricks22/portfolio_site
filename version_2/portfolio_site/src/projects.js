import React, { Component } from 'react';
import './App.css';

export class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [
        {name: "GameShot", imageUrl: "./Images/gameshot.png", description: "1"},
        {name: "Brick Breaker", imageUrl: "./Images/brickbreakre.png", description: "2"},
      ],
      projectIndex: 0
    }
    this.clickRight = this.clickRight.bind(this)
  };
  
  clickRight(action){
    if(this.state.projectIndex < this.state.projects.length-1) {
      this.state.projectIndex += 1
      console.log(this.state.projectIndex)
      console.log(this.state.projects[this.state.projectIndex])
      
    } else {
      this.state.projectIndex = 0
      console.log(this.state.projectIndex)
      console.log(this.state.projects[this.state.projectIndex])
    }
  }
  
  render(){
    let projectId = this.state.projectIndex
    let projectrender = this.state.projects[projectId].name
    
    return (
      <div id="projectsContainer">
        <h2>Project Title</h2>
        <h3 onClick={this.clickRight}>Next</h3>
        <h2>{this.state.projectIndex}</h2>
        <img src="" />
        <h3>{projectrender}</h3>
      </div>
    );
  }
};