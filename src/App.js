import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="gray-backgroud">
        <img src={logo} lat = "logo"/>
        <h2>Let's develope management system</h2>
      </div>
    );
  }
}

export default App;
