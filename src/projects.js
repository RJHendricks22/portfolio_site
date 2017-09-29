import React, { Component } from 'react';
import './App.css';
import './animate.css';

export class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [
        {name: "GameShot", imageUrl: "./Images/gameshot.png", description: ["Built using Rails and various Ruby gems", "based on functionality of Instagram (image posts, comments, followers, timeline) with an emphasis on PC Gamers"],
        technologies: ["Ruby on Rails","JavaScript","HTML/CSS","PostgreSQL","AWS S3","Paperclip","Devise","Ransack","HTTParty"],
        github: "https://github.com/RJHendricks22/gaming_instagram", website: "https://gameshot.herokuapp.com/"},
        {name: "Brick Breaker",
        imageUrl: "./Images/brickbreaker.png", 
        description: ["Built in JavaScript, using HTML canvas and CSS", "Animation frames on canvas element allow ball velocity", "Created all hit detection functions from scratch"],
        technologies: ["JavaScript","HTML/CSS"], 
        github: "https://github.com/RJHendricks22/rjhendricks22.github.io", website: "https://rjhendricks22.github.io/"},
        {name: "Attr_Reader", imageUrl: "./Images/attrreader.png", 
        description: ["Group project built in Rails","Users can request to trade books with other users", "Virtual Bookshelf rendered through ERB and HTML","Requested books send email with shipping info to book owner"],
        technologies: ["Ruby on Rails","JavaScript","HTML/CSS","GoogleBooks API","Ransack","Action Mailer","HTTParty","Devise"],
        github: "https://github.com/RJHendricks22/Flourish_and_Blotts",
        website: "http://attrreader3.herokuapp.com/"},
        {name: "MagicTCG Card Builder", imageUrl: "./Images/magiccardbuilder.png", description: ["NodeJS Express App","Users create an account to customize their own magic trading card", "Complete cards saved to account profile"],
        technologies: ["NodeJS","ExpressJS","JavaScript","MagicTheGathering.io API","HTML/CSS","B-Crypt","BodyParser","Multer","Mustache","Animate.css"], 
         github: "https://github.com/RJHendricks22/MagicTGCardBuilder", 
         website: "https://github.com/RJHendricks22/MagicTGCardBuilder"},
        {name: "Custom Mad Libs Builder", imageUrl: "./Images/constructionimage.jpg", description: ["ReactJS app allowing users to generate custom MadLib", "Copy and past story, choose where blanks will go","Pick what part of speech each blank is","Render the story and play!"],
         technologies: ["ReactJS","JavaScript","HTML/CSS","Webpack","Babel.js"],
         github: "https://github.com/RJHendricks22/mad-libs-site",
         website: "https://github.com/RJHendricks22/mad-libs-site"}
      ],
      projectIndex: 0
    }
    this.clickRight = this.clickRight.bind(this)
    this.clickLeft = this.clickLeft.bind(this)
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
  
  render(){
    let currentProject = this.state.projects[this.state.projectIndex]
    
    let descriptionRender = currentProject.description.map( desc => <li>{desc}</li>);
                                     
    let technologiesRender = currentProject.technologies.map( tech => <li>{tech}</li>);
    
    return (
      <div id="myprojects">
        <div className="projectsContainer animated fadeIn">
            <h2>{currentProject.name}</h2>
            <img id="leftarrow" className="projectArrows" src={require("./Images/uparrow.png")} onClick={this.clickLeft} />
            <img id="rightarrow" className="projectArrows" src={require("./Images/uparrow.png")} onClick={this.clickRight} />
            <a href={currentProject.website}><img src={require(`${currentProject.imageUrl}`)} className="projectImage"/></a>
            <a href={currentProject.github}><img id="githubproject" src={require("./Images/githubwhite.png")} /></a>
            <a href={currentProject.website}><img id="webproject" src={require("./Images/whiteglobe.png")} /></a>
          <ul className="descriptionList">{descriptionRender}</ul>
          <ul className="techList">{technologiesRender}</ul>
        </div>
      </div>
    );
  }
};