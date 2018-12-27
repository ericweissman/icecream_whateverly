import React, { Component } from 'react';
import './css/Main.scss';
import Search from './Search.js';
import SearchByParlor from './SearchByParlor';


class Header extends Component {
  constructor() {
    super();
<<<<<<< HEAD
  }
  render() {
    return (
      <header className="header">
        <div className="header-svg-cont">
          <img className="header-svg" src={require('./css/images/ice-cream.svg')}/>
        </div>
        <div className="header-search-cont">
        <header className="title">iScream</header>
          <Search searchFor={this.props.searchFor}/>
          <SearchByParlor parlors={this.props.parlors} searchParlor={this.props.searchParlor}/>
        </div>
      </header>
    );
  }
=======
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
>>>>>>> 2a92d4c6f21b849ce00ce5bacc1c8b106ee21560
}



export default Header;