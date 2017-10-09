import React, { Component } from 'react';
import './App.css';
import './animate.css';

export class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [
        {name: "GameShot", imageUrl: "./Images/gameshot.png", description: ["Built using Rails and various Ruby gems.  Based on functionality of Instagram (image posts, comments, followers, timeline) with an emphasis towards PC Gamers.  AWS used to host images and display them on profiles and timeline."],
        technologies: ["Ruby on Rails","JavaScript","HTML/CSS","PostgreSQL","AWS S3","Paperclip","Devise","Ransack","HTTParty"],
        github: "https://github.com/RJHendricks22/gaming_instagram", website: "https://gameshot.herokuapp.com/"},
        {name: "Brick Breaker",
        imageUrl: "./Images/brickbreaker.png", 
        description: ["Built in JavaScript, using HTML canvas and CSS.  Animation frames on canvas element allows ball velocity, which increases over time.  Hit detection between elements was derived by hand."],
        technologies: ["JavaScript","HTML/CSS"], 
        github: "https://github.com/RJHendricks22/rjhendricks22.github.io", website: "https://rjhendricks22.github.io/"},
        {name: "Attr_Reader", imageUrl: "./Images/attrreader.png", 
        description: ["Group project built in Rails where users can request to trade books with other users.  Virtual Bookshelf is rendered through ERB and HTML based on number of books available.  On request, an email is sent to book owner with shipping info of the book requester."],
        technologies: ["Ruby on Rails","JavaScript","HTML/CSS","GoogleBooks API","Ransack","Action Mailer","HTTParty","Devise"],
        github: "https://github.com/RJHendricks22/Flourish_and_Blotts",
        website: "http://attrreader3.herokuapp.com/"},
        {name: "MagicTCG Card Builder", imageUrl: "./Images/magiccardbuilder.png", description: ["NodeJS Express App where users create an account to customize their own magic trading card.  Complete cards saved to account profile which can be downloaded as JPG.  API calls MagicTGio for examples.  Blank card backgrounds were made using Photoshop."],
        technologies: ["NodeJS","ExpressJS","JavaScript","MagicTheGathering.io API","HTML/CSS","B-Crypt","BodyParser","Multer","Mustache","Animate.css"], 
         github: "https://github.com/RJHendricks22/MagicTGCardBuilder", 
         website: "https://github.com/RJHendricks22/MagicTGCardBuilder"},
        {name: "Custom Mad Libs Builder", imageUrl: "./Images/constructionimage.jpg", description: ["ReactJS app allowing users to generate custom MadLib.  Copy and paste story, then choose where the blanks will go.  Then pick what part of speech each blank is, render the story and play!"],
         technologies: ["ReactJS","JavaScript","HTML/CSS","Webpack","Babel.js"],
         github: "https://github.com/RJHendricks22/mad-libs-site",
         website: "https://github.com/RJHendricks22/mad-libs-site"}
      ],
      projectIndex: 0
    }
    this.clickRight = this.clickRight.bind(this)
    this.clickLeft = this.clickLeft.bind(this)
    this.clickNav = this.clickNav.bind(this)
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
  
  clickLeft(action){
    action.preventDefault();
    if(this.state.projectIndex > 0) {
      let index = this.state.projectIndex - 1
      this.setState({
        projectIndex: index
      }) 
    } else {
      this.setState({
        projectIndex: this.state.projects.length-1
      })
    }
  }
  
  clickNav(action){
    action.preventDefault();
    this.setState({
      projectIndex: action.target.value
    });
  }
  
  render(){
    let currentProject = this.state.projects[this.state.projectIndex]
    
    let descriptionRender = currentProject.description.map( (desc, key) => <li key={key}>{desc}</li>);
                                     
    let technologiesRender = currentProject.technologies.map( (tech, key) => <li key={key}>{tech}</li>);
    
    let confirmProject = function(panel, val){
      if (panel === val) {
        return {color: 'deepskyblue', background: 'rgba(100,100,100,.5)'}
      }
    }
    
    let projectNavBar = this.state.projects.map( (project, index) => <li onClick={this.clickNav} value={index} key={index} style={confirmProject(this.state.projectIndex, index)}>{project.name}</li>);
    
    return (
      <div id="myprojects">
        <div className="projectNavBar animated fadeIn">
          {projectNavBar}
        </div>
        <div className="projectsContainer animated fadeIn">
            <img id="leftarrow" className="projectArrows" src={require("./Images/prev.png")} onClick={this.clickLeft} />
            <img id="rightarrow" className="projectArrows" src={require("./Images/next.png")} onClick={this.clickRight} />
            <a href={currentProject.website}><img id="projectImg" src={require(`${currentProject.imageUrl}`)}  className="projectImage"/></a>
          <div className="projectLinks">
            <a href={currentProject.github}><h2>GitHub</h2></a><br />
            <a href={currentProject.website}><h2>Website</h2></a>
          </div>
            <div  className="description">
              <h2>{currentProject.name}</h2>
              <ul>{descriptionRender}</ul>
              <h2>Languages/Frameworks</h2>
              <ul className="techList">{technologiesRender}</ul>
            </div>
        </div>
      </div>
    );
  }
};