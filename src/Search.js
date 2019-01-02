import React from 'react';
import './css/Main.scss';

const Search = (props) => {
    return (
      <div className='search'>
        <i className="fas fa-search">
          <input type='text' placeholder="Search flavors" className='search-input' onChange={props.searchFor}></input>
        </i>
      </div>
    )
}

export default Search;