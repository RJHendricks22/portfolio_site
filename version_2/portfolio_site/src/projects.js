import React, { Component } from 'react';
import './App.css';

export class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [
        {name: "GameShot", imageUrl: "./Images/gameshot.png", description: "1"},
        {name: "Brick Breaker", imageUrl: "./Images/brickbreaker.png", description: "2"},
      ],
      projectIndex: 0
    }
    this.clickRight = this.clickRight.bind(this)
  };
  
  clickRight(action){
    action.preventDefault();
    if(this.state.projectIndex < this.state.projects.length-1) {
      let index = this.state.projectIndex + 1
      this.setState({
        projectIndex: index
      }) 
    } else {
      this.setState({
        projectIndex: 0
      })
    }
  }
  
  render(){
    let currentProject = this.state.projects[this.state.projectIndex]
    
    return (
      <div id="projectsContainer">
        <h2>{currentProject.name}</h2>
        <h3 onClick={this.clickRight}>Next</h3>
        <img src={require(`${currentProject.imageUrl}`)} className="projectImage"/>
        <h3>{currentProject.description}</h3>
      </div>
    );
  }
};