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
        <input type='text' className='search-input' onChange={this.props.searchFor}></input>
      </div>
    )
  }
}


export default Search;