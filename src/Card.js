import React, { Component } from 'react';
import App from './App.js'

class Card extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        {
        Object.values(this.props.icecream).map((type) => {
          return(
            <div>
              <h1>{type.name}</h1>
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