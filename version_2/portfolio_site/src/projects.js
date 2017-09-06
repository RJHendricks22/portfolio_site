import React, { Component } from 'react';
import './App.css';
import './animate.css';

export class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [
        {name: "GameShot", imageUrl: "./Images/gameshot.png", description: "GameShot was built using Rails and various Ruby gems.  I implemented Paperclip with AWS for image upload capabilities, and Ransack for user database search to 'Follow' people and see their posts.  This enabled me to create a \"Timeline\" functionality.  I used Devise for user authentication and creation.", github: "https://github.com/RJHendricks22/gaming_instagram", website: "https://gameshot.herokuapp.com/"},
        {name: "Brick Breaker", imageUrl: "./Images/brickbreaker.png", description: "Brick Breaker is built solely with Javascript.  The game is an animation frame canvas element, allowing me to move the ball through animation loop and detect interactions between the objects.  I researched collision detection and created my own detection logic to properly bounce the ball off the blocks, window boundaries and the paddle.", github: "https://github.com/RJHendricks22/rjhendricks22.github.io", website: "https://rjhendricks22.github.io/"},
        {name: "Attr_Reader", imageUrl: "./Images/attrreader.png", description: "Attr_Reader is a group project completed in Rails where a user can request to trade books with other users.  Each user can put books on their virtual shelf that they are willing to trade.  Once a book is requested, an email is sent to the book owner with shipping information to send the book to the requestor.  We used the google books API for a list of books, Ransack, Devise, HTTParty and Action Mailer.", github: "https://github.com/RJHendricks22/Flourish_and_Blotts", website: "http://attrreader3.herokuapp.com/"},
        {name: "MagicTCG Card Builder", imageUrl: "./Images/magiccardbuilder.png", description: "This Express App enables a user to create an account and customize their own magic trading card, which is saved to their account.  I used B-Crypt, Body Parser, Method Override, Multer, Mustache, and PG-Promise.  For the card animation, I used animate.css.  I used MagicTheGathering.io to pull in examples of existing trading cards from the same 2012 Base Set that you can customize from", github: "https://github.com/RJHendricks22/MagicTGCardBuilder", website: "https://github.com/RJHendricks22/MagicTGCardBuilder"},
        {name: "Custom Mad Libs Builder", imageUrl: "./Images/constructionimage.jpg", description: "Still in development, this is a ReactJS app that allows the user to copy and paste a story from anywhere, or even type up their own story which they can then turn into a Mad Lib.  After finishing the story, the app allows you to toggle each word to the part of speech that you desire \(noun, adjective, verb, etc.\).  Once ready, hit the render button and your story renders with input boxes wherever a blank is located with the required part of speech, giving you a digital Mad Lib to fill out with your friends!", github: "https://github.com/RJHendricks22/mad-libs-site", website: "https://github.com/RJHendricks22/mad-libs-site"}
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
    
    
    return (
      <div id="myprojects">
        <h1>Projects</h1>
        <div className="projectsContainer animated fadeIn">
            <h2>{currentProject.name}</h2>
            <img id="leftarrow" className="projectArrows" src={require("./Images/uparrow.png")} onClick={this.clickLeft} />
            <img id="rightarrow" className="projectArrows" src={require("./Images/uparrow.png")} onClick={this.clickRight} />
            <a href={currentProject.website}><img src={require(`${currentProject.imageUrl}`)} className="projectImage"/></a>
            <a href={currentProject.github}><img id="githubproject" src={require("./Images/githubwhite.png")} /></a>
            <a href={currentProject.website}><img id="webproject" src={require("./Images/whiteglobe.png")} /></a>
            <p>{currentProject.description}</p>
        </div>
      </div>
    );
  }
};