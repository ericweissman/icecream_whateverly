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
    const keys = Object.keys(this.props.icecream);
    return (
      <div class="card-container">
      {
        keys.map((key) => {
          let filePath = `./images/Flavors/${key}.jpg`
          return(
            <div class='ice-cream-card'>
              <img class="flavor-img" src={filePath}/>
              <h1 class="ice-cream-name">{this.props.icecream[key].name}</h1>
              <button class="ice-cream-info-btn">More Info</button>
            </div>
          )
        })
    }
      </div>
  
    )
  }


}
export default Card;