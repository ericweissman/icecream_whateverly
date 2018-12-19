import React, { Component } from 'react';
import Card from './Card.js'
import logo from './logo.svg';
import { parlors, icecream } from './dataset.js'

// import './App.css';
import Search from './Search.js'

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      parlors: parlors,
      icecream: icecream,
      }
      // descriptions: Object.values(icecream).map((flavor) => {
      //   return flavor.description
      // }),
      // parlor_names: parlors.map((parlor) => {
      //   return parlor.parlorName
      // }),

    
  }
  render() {
    return (
      <div className="App">
        <Card parlors = {this.state.parlors} 
              icecream = {this.state.icecream}/>
      </div>
    );
  }
}

export default App;