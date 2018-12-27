import React, { Component } from 'react';
import App from './App.js';
import './css/Main.scss';
import { uid } from 'react-uid'
import Card from './Card.js'

class CardContainer extends Component {
  constructor(props) {
    super(props)
  };

  

  render() {
    const keys = Object.keys(this.props.icecream);
    return (
      <div className="card-container">
        {
          keys.map((key) => {
            const flavor = this.props.icecream[key].name.toLowerCase()
            if (flavor.includes(this.props.search.toLowerCase())) {
              return (
                <Card 
                  id={key}
                  img={key}
                  flavor={this.props.icecream[key].name}
                  info={this.props.icecream[key].description}
                  parlors={this.props.parlors}
                />
            )}
          })
        }
      </div>
    )
  }
}
export default CardContainer;