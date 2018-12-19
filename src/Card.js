import React, { Component } from 'react';
import App from './App.js'

class Card extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <p>{this.props.flavor}</p>
        <p>{this.props.descriptions}</p>
      </div>
    )
  }


}
export default Card;
