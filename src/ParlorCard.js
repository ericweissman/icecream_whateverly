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
            <p className='parlor-name'>{this.props.parlor.parlorName}</p>
            <p>{this.props.parlor.address}</p>
            <button className="parlor-details" onClick={this.getParlorDetails}>Parlor Details</button>
          </div>
      )
    } else {
      return (
          <div className='parlor-card'>
            <button className='back-to-all-parlors' onClick={this.props.getParlorDetails}>Back to All Parlors</button>
            <ParlorDetail parlor={this.props.parlor} getParlorDetails={this.getParlorDetails}/>
          </div>
      )
    }
  }

}
export default ParlorCard;