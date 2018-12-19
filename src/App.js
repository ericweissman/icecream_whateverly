import React, { Component } from 'react';
import CardContainer from './CardContainer.js'
import logo from './logo.svg';
// import { parlors, icecream } from './dataset.js'
import { uid } from 'react-uid'
import Header from './Header'

import './css/App.css';
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
          parlors: result.parlors
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
    return (
      <div className="App">
        <div>
          <Header/>
          <CardContainer parlors={this.state.parlors} 
                        icecream={this.state.icecream}/>
        </div>
      </div>
    );
  }
} 

export default App;