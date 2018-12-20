import React, { Component } from 'react';
import App from './App.js';
import { uid } from 'react-uid'
import Card from './Card.js'
import ParlorCard from './ParlorCard.js'

class ParlorArea extends Component {
  constructor(props) {
    super(props)

  };

  render() {



    return (
      <div class="parlor-area">
      {
        this.props.parlors.map((parlor) => {
          return (
            <ParlorCard 
                name={parlor.name}
                // description={parlor.description}
                // address={parlor.address} 
                />
          )
        })
      }
      </div>    
      )
    }
  }
  

  
 






export default ParlorArea