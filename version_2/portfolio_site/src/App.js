import React, { Component } from 'react';
import './App.css';
import { Titleblock } from './titleblock';
import { Projects } from './projects';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      centerView: "0"
    }
    this.centerViewPanel = this.centerViewPanel.bind(this);
  };
  
  centerViewPanel(action){
    this.state.centerView = action.target.value
  }
  
  render() {
    
    
    let renderCenter = [<Titleblock />, <Projects />]
    
    return (
      <div className="App">
        <Titleblock />
        <ul className="Navbar1">
          <li onClick={this.centerViewPanel} value="1" >Skills </li>
          <li onClick={this.centerViewPanel} value="2" >Projects</li>
          <li onClick={this.centerViewPanel} value="3" >About Me</li>
          <li onClick={this.centerViewPanel} value="0" >Home</li>
        </ul>
        <Projects />
      </div>
    );
  }
}

export default App;
