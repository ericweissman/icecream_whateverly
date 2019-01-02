import React, { Component } from 'react';
import './css/Main.scss';
import ParlorArea from './ParlorArea.js';

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
          <h1>{this.props.flavor}</h1>
          <img src={`./images/Flavors/${this.props.img}.jpg`} />
          <button onClick={this.getMoreInfo} className="more-info-btn">More Info</button>
        </div>
      );
    } else {
      return (
          <div className='parlor-popup'>
            <img src={`./images/Flavors/${this.props.img}.jpg`} />
            <h1 className="big-ice-cream-name">{this.props.flavor}</h1>
            <p className='icecream-description'>{this.props.info}</p>
            <ParlorArea parlors={this.props.parlors} id={this.props.id} getMoreInfo={this.getMoreInfo}/>
          </div>
      );
    }
  }
}
export default Card;

