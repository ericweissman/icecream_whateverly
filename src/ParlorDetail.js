import React, { Component } from 'react';
import App from './App.js';
// import './css/ParlorDetail.css';
import ParlorArea from './ParlorArea.js';
import ParlorCard from './ParlorCard.js';

class ParlorDetail extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <div>
            <p>{this.props.parlor.parlorName}</p>
            <img src="public/images/Parlors.Snowlab.png"/>
            <p>{this.props.parlor.address}</p>
            {
                this.props.parlor.daysOpen.map((day) => {
                    return (
                        <div>
                            <p>{day.day}: {day.open} - {day.close}</p>
                        </div>
                    )
                })
            }  
            <p>{this.props.parlor.phoneNumber}</p> 
            <a href={this.props.parlor.website}>{this.props.parlor.parlorName}</a>
            <p>{this.props.parlor.review}</p> 
            <p>{this.props.parlor.numberOfFlavors}</p>
        </div>
        )
    }
}
export default ParlorDetail;