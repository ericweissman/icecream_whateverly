import React, { Component } from 'react';
import App from './App.js';
import './css/Card.css';
import ParlorArea from './ParlorArea.js';


class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      moreInfo : false,
    }
  }

  getMoreInfo = () =>{
    this.setState({
      moreInfo: !this.state.moreInfo
    })
  }

  render() {
    if (this.state.moreInfo === false) {
      return (
      <div className='ice-cream-card' id={this.props.id}>
        <img className="flavor-img" src={`./images/Flavors/${this.props.img}.jpg`}/>
        <h1 className="ice-cream-name">{this.props.flavor}</h1>
        <button onClick={this.getMoreInfo}className="ice-cream-info-btn">More Info</button>
      </div>
      );
    } else {
        return (
          <div className='ice-cream-card'>
            <img className="flavor-img" src={`./images/Flavors/${this.props.img}.jpg`}/>
            <h1 className="ice-cream-name">{this.props.flavor}</h1>
            <button onClick={this.getMoreInfo}className="ice-cream-info-btn">Less Info</button>
            <ParlorArea parlors={this.props.parlors} id={this.props.id} />
          </div>
        );
      }
    }
}
export default Card;