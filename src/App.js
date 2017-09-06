import React, { Component } from 'react';
import './App.css';
import './animate.css';
import { Titleblock } from './titleblock';
import { Projects } from './projects';
import { MySkills } from './myskills';
import { AboutMe } from './aboutme';
import { Homepage } from './homepage';
import { Contact } from './contact';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      centerView: 0
    }
    this.centerViewPanel = this.centerViewPanel.bind(this);
  };
  
  centerViewPanel(action){
    this.setState({
      centerView: action.target.value
    });
  }
  
  render() {
    let centerPanels = [<Homepage />, <MySkills />, <Projects />, <AboutMe />, <Contact />];
    
    let renderCenter = centerPanels[this.state.centerView];
    
    return (
      <div className="App">
        <Titleblock />
        <div className="navbarcontainer">
        <ul className="Navbar1">
          <li onClick={this.centerViewPanel} value="1" >Skills </li>
          <li onClick={this.centerViewPanel} value="2" >Projects</li>
          <li onClick={this.centerViewPanel} value="3" >About Me</li>
          <li onClick={this.centerViewPanel} value="4" >Contact</li>
        </ul>
          </div>
        <div>{renderCenter}</div>
      </div>
    );
  }
}

export default App;
