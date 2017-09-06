import React, { Component } from 'react';
import './App.css';
import './animate.css';

export class Titleblock extends Component {
  
  render(){
    return (
      <div className="titleBlock">
        <img src={require('./Images/nameplate.png')} />
        <br />
        <img src={require('./Images/titleblock.png')} />
      </div>
    );
  }
};

