import React, { Component } from 'react';
import App from './App.js';
import './css/Main.scss';
import { uid } from 'react-uid';
import Card from './Card.js';
import Search from './Search.js';


class Header extends Component {
  constructor() {
    super();
    }
    render() {
      return (
        <header className="header">
          <div className="header-svg-cont">
            <img className="header-svg" src={require('./css/images/ice-cream.svg')}/>
          </div>
          <div className="header-search-cont">
            <Search searchFor={this.props.searchFor}/>
          </div>
        </header>
      );
    }
  }



export default Header;