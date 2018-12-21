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
          <h1>Home</h1>
          <Search searchFor={this.props.searchFor}/>
        </header>
      );
    }
  }



export default Header;