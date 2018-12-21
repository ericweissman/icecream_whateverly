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
      <div className="parlor-area">
      hello there
      {
        this.props.parlors.filter((parlor) => {
          return parlor.flavors.includes(parseInt(this.props.id))
        })
        .map((parlor) => {
          return (
            <ParlorCard name={parlor.parlorName}/>
          )
        })
        // this.props.parlors.filter((parlor) => {
        //   return parlor.flavors.includes(this.props.id)
          
        // }).map((parlor) => {
        //   return (
        //     <ParlorCard 
        //         name={parlor.parlorName}
                // description={parlor.description}
                // address={parlor.address} 
          //       />
          // )
        // })
      }
      </div>    
      )
    }
  }
  

export default ParlorArea