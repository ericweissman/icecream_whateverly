import React, { Component } from 'react';
import App from './App.js';
import './css/Card.css';
import { uid } from 'react-uid';
import ParlorArea from './ParlorArea.js';

// import images from './images/';

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
      <div class='ice-cream-card'>
      <img class="flavor-img" src={`./images/Flavors/${this.props.img}.jpg`}/>
      <h1 class="ice-cream-name">{this.props.flavor}</h1>
      <button onClick={this.getMoreInfo}class="ice-cream-info-btn">More Info</button>
      </div>
  
    )
  } else {
  return (
    

    <div class='ice-cream-card'>
      <img class="flavor-img" src={`./images/Flavors/${this.props.img}.jpg`}/>
      <h1 class="ice-cream-name">{this.props.flavor}</h1>
      <ParlorArea parlors={this.props.parlors} />
      <button onClick={this.getMoreInfo}class="ice-cream-info-btn">Less Info</button>
    </div>

  )

  }
  }


}
export default Card;