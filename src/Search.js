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
<<<<<<< HEAD
        <input type='text' placeholder="search flavors" className='search-input' onChange={this.props.searchFor}></input></i>
=======
          <input type='text' placeholder="Search flavors" className='search-input' onChange={this.props.searchFor}></input>
        </i>
>>>>>>> 2a92d4c6f21b849ce00ce5bacc1c8b106ee21560
      </div>
    )
  }
}

export default Search;