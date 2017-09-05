import React, { Component } from 'react';
import './App.css';

export class MySkills extends Component {
  
  render(){
    
    return (
      <div id="myskills">
        <h1>My Skills</h1>
        <div className="myskillscontainer">
          <div className="FrontEndSkills">
            <p>HTML5</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>jQuery</p>
            <p>React JS</p>
            <p>Angular 2</p>
          </div>
          <div className="BackEndSkills">
            <p>Ruby</p>
            <p>Rails</p>
            <p>Node JS</p>
            <p>Express</p>
            <p>PostgreSQL</p>
            <p>AJAX</p>
          </div>
          <div className="MiscSkills">
            <p>Adobe Photoshop</p>
            <p>Adobe Illustrator</p>
            <p>Adobe InDesign</p>
            <p>Microsoft Office Suite</p>
            <p>AutoCad</p>
            <p>LabView</p>
          </div>
        </div>
      </div>
    )
  }
}