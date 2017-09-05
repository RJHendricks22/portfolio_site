import React, { Component } from 'react';
import './App.css';
import { Titleblock } from './titleblock';
import { Projects } from './projects';
import { MySkills } from './myskills';
import { AboutMe } from './aboutme';

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
    let centerPanels = ["", <MySkills />, <Projects />, <AboutMe />]
    let renderCenter = centerPanels[this.state.centerView]
    return (
      <div className="App">
        <Titleblock />
        <ul className="Navbar1">
          <li onClick={this.centerViewPanel} value="1" >Skills </li>
          <li onClick={this.centerViewPanel} value="2" >Projects</li>
          <li onClick={this.centerViewPanel} value="3" >About Me</li>
          <li onClick={this.centerViewPanel} value="0" >Home</li>
        </ul>
        <div>{renderCenter}</div>
      </div>
    );
  }
}

export default App;
