import React, { Component } from 'react';
import App from './App.js';
import './css/Card.css'
import { uid } from 'react-uid'
import Card from './Card.js'

class CardContainer extends Component {
  constructor(props) {
    super(props)

  };

  render() {
    const keys = Object.keys(this.props.icecream);
    return (
        <div>
          <Card parlors = {this.props.parlors}
                icecream = {this.props.icecream} />
        </div>
    )
  }


}
export default CardContainer;