import React, { Component } from 'react';
import App from './App.js';
import './css/Card.css'
import { uid } from 'react-uid'

// import images from './images/';

class Card extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div class='ice-cream-card'>
          <img class="flavor-img" src={`./images/Flavors/${this.props.img}.jpg`}/>
          <h1 class="ice-cream-name">{this.props.flavor}</h1>
        <button class=".more-info-btn">More Info</button>
      </div>

    )
  }


}
export default Card;