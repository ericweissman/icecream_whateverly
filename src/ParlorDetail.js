import React, { Component } from 'react';
import App from './App.js';
// import './css/ParlorDetail.css';
import ParlorArea from './ParlorArea.js';
import ParlorCard from './ParlorCard.js';

class ParlorDetail extends Component {
    constructor(props) {
      super(props)

 
    }
    
    render() {
        return (
            <div>
           <p>{this.props.parlor.parlorName}</p>
           <p>{this.props.parlor.address}</p>
           {
               this.props.parlor.daysOpen.map((day) => {
                   return (
                       <div>
                           <p>{day.day}</p>
                           <p>{day.open}</p>
                           <p>{day.close}</p>
                       </div>
                   )
               })
           }  
           <p>{this.props.parlor.phoneNumber}</p>  
           <p>{this.props.parlor.website}</p>
           <p>{this.props.parlor.review}</p> 
           <p>{this.props.parlor.numberOfFlavors}</p> 
         </div>
        )
    }
}
export default ParlorDetail;