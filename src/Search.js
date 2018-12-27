import React, { Component } from 'react';
import App from './App.js';
import './css/Main.scss';

class Search extends Component {
  constructor() {
    super()
  }

  scrollDown() {
    window.scrollTo(0, 1200);
  }

  render() {
    return (
      <div className='search'>
        <i className="fas fa-search">
          <input type='text' placeholder="Search flavors" className='search-input' onChange={this.props.searchFor}></input>
        </i>
      </div>

    )
  }
}


export default Search;