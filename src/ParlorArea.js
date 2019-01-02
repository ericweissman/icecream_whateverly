import React, { Component } from 'react';
import './css/Main.scss';
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
            <button onClick={this.props.getMoreInfo} className="back-to-all-flavors">Back To All Flavors</button>
        </div>
      </div>
      )
    };
  }
  

export default ParlorArea