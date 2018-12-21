import React, { Component } from 'react';
import App from './App.js';
import { uid } from 'react-uid';
import ParlorDetail from './ParlorDetail.js'

// import images from './images/';

class ParlorCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      details : false,
    }
  }

  getMoreInfo = () =>{
    this.setState({
      details: !this.state.details
    })
  }

  render() {
    if (this.state.details === false) {
      return (
        <div className='parlor-card'>
          <p>{this.props.parlor.parlorName}</p>
          <p>{this.props.parlor.address}</p>
          <button onClick={this.getMoreInfo}>Parlor Details</button>
       </div>
      )
    } else {
      return (
        <div className='parlor-card'>
          <ParlorDetail parlor={this.props.parlor}/>
          <button onClick={this.getMoreInfo}>Show Less</button>
       </div>
      )
    }
  }

}
export default ParlorCard;