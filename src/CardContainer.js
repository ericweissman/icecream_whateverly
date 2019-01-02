import React, { Component } from 'react';
import './css/Main.scss';
import Card from './Card.js';

class CardContainer extends Component {
  constructor(props) {
    super(props)
  };

  allFlavors() {
    return Object.keys(this.props.icecream);
  }

  parlorFlavorsToRender() {
    const foundParlor = this.props.parlors.find((parlor) => {
      return parlor.parlorName === this.props.searchByParlor
    });

    if (foundParlor) {
      return foundParlor.flavors;
    }
    return [];
  }

  render() {
    let flavorsToRender = this.allFlavors();
    if(this.props.searchByParlor && this.props.searchByParlor !== "show all") {
      flavorsToRender = this.parlorFlavorsToRender();
    }
    return (
      <div className="card-container">
       {flavorsToRender.map((flavor) => {
          const flavorName = this.props.icecream[flavor].name.toLowerCase()
          if (flavorName.includes(this.props.search.toLowerCase())) {
            return (
              <Card
                id={flavor}
                key={flavor}
                img={flavor} 
                flavor={this.props.icecream[flavor].name}
                info={this.props.icecream[flavor].description}
                parlors={this.props.parlors}
              />
            )
          } 
          //  else if (!flavorName.includes(this.props.search.toLowerCase())) {
          // }
       })
      }
      </div>
    )
  }
}
export default CardContainer;