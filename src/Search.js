import React, { Component } from 'react';
import './css/Main.scss';

class Search extends Component {
  constructor() {
    super()
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