import React, { Component } from 'react';
import App from './App.js'

class Search extends Component {
  constructor() {
    super()
    
  }

  render() {
    return (
      <div className='search'>
        <input type='text' onChange={this.props.searchFor}></input>
      </div>
    )
  }
}


export default Search;