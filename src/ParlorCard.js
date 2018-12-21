import React, { Component } from 'react';
import App from './App.js';
import './css/Main.scss';
import { uid } from 'react-uid';
import ParlorDetail from './ParlorDetail.js'

// import images from './images/';

class ParlorCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      details: false,
    }
  }

  getParlorDetails = () =>{
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
            <button className="parlor-details" onClick={this.getParlorDetails}>Parlor Details</button>
          </div>
      )
    } else {
      return (
          <div className='parlor-card'>
            <ParlorDetail parlor={this.props.parlor}/>
            <button className='parlor-details' onClick={this.getParlorDetails}>Back to All Parlors</button>
          </div>
      )
    }
  }

}
export default ParlorCard;