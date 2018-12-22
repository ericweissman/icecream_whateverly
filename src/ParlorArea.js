import React, { Component } from 'react';
import App from './App.js';
import { uid } from 'react-uid';
import './css/Main.scss';
import Card from './Card.js';
import ParlorCard from './ParlorCard.js';

class ParlorArea extends Component {
  constructor(props) {
    super(props)

  };

  render() {
    return ( 
      <div className="parlor-area">
        <div className="parlor-list">
          {
            this.props.parlors.filter((parlor) => {
              return parlor.flavors.includes(parseInt(this.props.id))
            })
            .map((parlor) => {
              return (
                <ParlorCard parlor={parlor}
                />
                )
              })
            } 
        </div>
            <button onClick={this.props.getMoreInfo} className="back-to-all-flavors">Back To All Flavors</button>
      </div>
      )
    };
  }
  

export default ParlorArea