import React, { Component } from 'react';
import App from './App.js';
import './css/Main.scss';
import { uid } from 'react-uid';
import Card from './Card.js';
import Search from './Search.js';
import SearchByParlor from './SearchByParlor';


class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header className="header">

        <div className="header-search-cont">
          <img className="header-svg" src={require('./css/images/ice-cream.svg')}/>
        <header className="title">iScream</header>
  
          <Search searchFor={this.props.searchFor}/>
          <SearchByParlor parlors={this.props.parlors} searchParlor={this.props.searchParlor}/>

        </div>
      </header>
    );
  }
}



export default Header;