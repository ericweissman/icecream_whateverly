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
      value: ''
      }
    
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

  searchFor = (event) => {
    this.setState({value: event.target.value})
  }


  render() {
    return (
      <div className="App">
        <div>
          <Header searchFor={this.searchFor}/>
          <CardContainer parlors={this.state.parlors} 
                        icecream={this.state.icecream}
                        search={this.state.value}/>
        </div>
      </div>
    );
  }
} 

export default App;