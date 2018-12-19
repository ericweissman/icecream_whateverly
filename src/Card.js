import React, { Component } from 'react';
import App from './App.js'

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
            return(
              <div>
                <img src="./public/images/Flavors/1.jpg"></img>
              </div>
            )
          })
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