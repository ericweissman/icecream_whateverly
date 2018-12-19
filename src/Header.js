import React, { Component } from 'react';
import App from './App.js';
import './css/Card.css';
import { uid } from 'react-uid';
import Card from './Card.js';
import Search from './Search.js';

class Header extends Component {
  constructor() {
    super();
    }
    render() {
      return (
        <header class="header">
          <h1>Home</h1>
          <Search/>
        </header>


      );

      
    }


  }



export default Header;