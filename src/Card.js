import React, { Component } from 'react';
import App from './App.js';
import './css/Main.scss';
import { uid } from 'react-uid'
import ParlorArea from './ParlorArea.js';
// import images from './images/';

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      moreInfo: false,
    }
  }

  getMoreInfo = () => {
    this.setState({
      moreInfo: !this.state.moreInfo
    })
  }

  render() {
    if (this.state.moreInfo === false) {
      return (
        <div className='ice-cream-card' id={this.props.id}>
          <h1 className="ice-cream-name">{this.props.flavor}</h1>
          <img className="flavor-img" src={`./images/Flavors/${this.props.img}.jpg`} />
          <button onClick={this.getMoreInfo} className="more-info-btn">More Info</button>
        </div>
      );
    } else {
      return (
          <div className='parlor-popup'>
            <div className="parlor-details">
            <img className="popup-flavor-img" src={`./images/Flavors/${this.props.img}.jpg`} />
            <h1 className="big-ice-cream-name">{this.props.flavor}</h1>
            </div>
            <ParlorArea parlors={this.props.parlors} id={this.props.id} getMoreInfo={this.getMoreInfo}/>
          </div>
      );
    }
  }
}
export default Card;

