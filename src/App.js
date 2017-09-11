import React, { Component } from 'react';
import './App.css';
import './animate.css';
import { Titleblock } from './titleblock';
import { Projects } from './projects';
import { MySkills } from './myskills';
import { AboutMe } from './aboutme';
import { Homepage } from './homepage';
import { Contact } from './contact';
import 'babel-polyfill';

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
    
    let confirmationStyle = function(panel, val) {
      if (panel === val){
        return {color: 'deepskyblue', background: 'rgba(100,100,100,.5)'}
      }
    }
    
    return (
      <div className="App">
        <Titleblock />
        <div className="navbarcontainer">
        <ul className="Navbar1">
          <li onClick={this.centerViewPanel} style={confirmationStyle(this.state.centerView, 1)} value="1" >Skills </li>
          <li onClick={this.centerViewPanel} style={confirmationStyle(this.state.centerView, 2)} value="2" >Projects</li>
          <li onClick={this.centerViewPanel} style={confirmationStyle(this.state.centerView, 3)} value="3" >About Me</li>
          <li onClick={this.centerViewPanel} style={confirmationStyle(this.state.centerView, 4)} value="4" >Contact</li>
        </ul>
          </div>
        <div>{renderCenter}</div>
      </div>
    );
  }
}

export default App;
