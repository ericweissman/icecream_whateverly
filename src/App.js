import React, { Component } from 'react';
import Card from './Card.js'
import logo from './logo.svg';
import { parlors, icecream } from './dataset.js'

// import './App.css';
import Search from './Search.js'

class App extends Component {
  constructor() {
    super();
    console.log(Object.values(icecream).map((flavor) => {
      return flavor.name
    }))
    this.state = {
      flavors: Object.values(icecream).map((flavor) => {
        return flavor.name
      }),
      descriptions: Object.values(icecream).map((flavor) => {
        return flavor.description
      }),
      parlor_names: parlors.map((parlor) => {
        return parlor.parlorName
      }),

    }
  }
  render() {
    return (
      <div className="App">
      {
        this.state.flavors.map((flavor) => {
          return (<Card {...flavor}/>)
        })
      }
        <Card flavors={this.state.flavors} descriptions={this.state.descriptions} />
      </div>
    );
  }
}

export default App;
