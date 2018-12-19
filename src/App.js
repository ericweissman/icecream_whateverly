import React, { Component } from 'react';
import Card from './Card.js'
import logo from './logo.svg';
// import { parlors, icecream } from './dataset.js'
import { uid } from 'react-uid'

// import './App.css';
import Search from './Search.js'

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      parlors: [],
      icecream: {},
      page: "HOME"
      }
      // descriptions: Object.values(icecream).map((flavor) => {
      //   return flavor.description
      // }),
      // parlor_names: parlors.map((parlor) => {
      //   return parlor.parlorName
      // }),

    
  }
  componentDidMount() {
    fetch("https://whateverly-datasets.herokuapp.com/api/v1/parlors")
      .then(results => results.json())
      .then((result) => {
        this.setState({
          parlors: result
        })
      })
    fetch("https://whateverly-datasets.herokuapp.com/api/v1/flavors")
      .then(results => results.json())
      .then((result) => {
        this.setState({
          icecream: result.flavors
        })
      })
  }

  render() {
    console.log('this.state.icecream', this.state.icecream)
    console.log('this.state.parlors', this.state.parlors)
    return (
      <div className="App">
        <Card parlors = {this.state.parlors} 
              icecream = {this.state.icecream}/>
      </div>
    );
  }
}

export default App;