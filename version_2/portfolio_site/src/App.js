import React, { Component } from 'react';
import './App.css';
import { Titleblock } from './titleblock';
import { Projects } from './projects';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  
  render() {
    return (
      <div className="App">
        <Titleblock />
        <Projects />
      </div>
    );
  }
}

export default App;
