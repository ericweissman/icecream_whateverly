import React from 'react';
import './css/Main.scss';
import Search from './Search.js';
import SearchByParlor from './SearchByParlor';


const Header = (props) => {
    return (
      <header className="header">
        <div className="header-search-cont">
          <img src={require('./css/images/ice-cream.svg')}/>
          <h1>iScream</h1>
          <Search searchFor={props.searchFor}/>
          <SearchByParlor parlors={props.parlors} searchParlor={props.searchParlor}/>
        </div>
      </header>
    );
  }

export default Header;