import React, { Component } from 'react';
import App from './App.js';
import './css/Main.scss';

class Search extends Component {
  constructor() {
    super()
    
  }

  render() {
    return (
      <div className='search'>
        <i class="fas fa-search">
        <input type='text' placeholder="search flavors" className='search-input' onChange={this.props.searchFor}></input></i>
      </div>
    )
  }
}


export default Search;