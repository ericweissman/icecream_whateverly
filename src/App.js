import React, { Component } from 'react';
import CardContainer from './CardContainer.js';
import Header from './Header';
import Banner from './Banner';
import './css/Main.scss';
import SearchByParlor from './SearchByParlor';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      parlors: [],
      icecream: {},
      value: '',
      searchByParlor: ''
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
      .catch(err => {
        this.setState({error: err})
      })

    fetch("https://whateverly-datasets.herokuapp.com/api/v1/flavors")
      .then(results => results.json())
      .then((result) => {
        this.setState({
          icecream: result.flavors
        })
      })
      .catch(err => {
        this.setState({error: err})
      })
  }

  searchFor = (event) => {
    this.setState({value: event.target.value})
  }

  searchParlor = (event) => {
    this.setState({searchByParlor: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header 
            searchFor={this.searchFor}
            searchParlor={this.searchParlor} 
            parlors={this.state.parlors}
          />
          <Banner />
          <CardContainer parlors={this.state.parlors} 
                        icecream={this.state.icecream}
                        search={this.state.value}
                        searchByParlor={this.state.searchByParlor}/>
          {/* <ErrorMessage /> */}
        </div>
      </div>
    );
  }
} 

export default App;