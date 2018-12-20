import React, { Component } from 'react';
import App from './App.js';
import { uid } from 'react-uid'

// import images from './images/';

class ParlorCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      details : false,
    }

  }

  // // getMoreInfo = () =>{
  // //   this.setState({
  // //     moreInfo: !this.state.moreInfo
  // //   })

  // }

  render() {
    if (this.state.details === false) {
    return (
      <div class='ice-cream-card'>
      <h1>{this.props.name}</h1>
      <h1></h1>
      <h1></h1>
      <button onClick={this.getMoreInfo}class="ice-cream-info-btn">More Info</button>
      </div>
  
    )
  // } else {
  // return (
    

  //   <div class='ice-cream-card'>
  //     <img class="flavor-img" src={`./images/Flavors/${this.props.img}.jpg`}/>
  //     <h1 class="ice-cream-name">{this.props.flavor}</h1>
  //     <ParlorArea parlors = {this.props.parlors}/>
  //     <button onClick={this.getMoreInfo}class="ice-cream-info-btn">Less Info</button>
  //   </div>

  // )

  // }
  }
  }

}
export default ParlorCard;