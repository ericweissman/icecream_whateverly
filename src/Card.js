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
      <div>
        {
          keys.map((key) => {
            let filePath = `./images/Flavors/${key}.jpg`
            return(
              <div>
                <img class="flavor-img" src={filePath}/>
                <h1>{this.props.icecream[key].name}</h1>
              </div>
            )
          })
      }
        {/* <p>{this.props.icecream}</p> */}
      </div>
    )
  }


}
export default Card;