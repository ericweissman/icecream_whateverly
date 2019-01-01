import React, { Component } from 'react';
import './css/Main.scss';
import ParlorDetail from './ParlorDetail.js'

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
            <p className='parlor-name bold'>{this.props.parlor.parlorName}</p>
            <p>{this.props.parlor.address}</p>
            <button className="parlor-details" onClick={this.getParlorDetails}>Parlor Details</button>
          </div>
      )
    } else {
      return (
          <div className='parlor-card'>
            <ParlorDetail parlor={this.props.parlor} getParlorDetails={this.getParlorDetails}/>
            <button className='back-to-all-parlors' onClick={this.props.getParlorDetails}>Back to All Parlors</button>
          </div>
      )
    }
  }
}

export default ParlorCard;