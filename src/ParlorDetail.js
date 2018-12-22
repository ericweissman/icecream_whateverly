import React, { Component } from 'react';
import App from './App.js';
import './css/Main.scss';
import ParlorCard from './ParlorCard.js';

class ParlorDetail extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     showParlorDetails: false;
        // }
    }
    
    render() {
        return (
        <div className="parlor-detail-card">
            <div className="parlor-detail-photo">
                <img src= "public/images/Little Man Ice Cream.png" />
            </div>
            <div className="parlor-detail-info">
                <p>{this.props.parlor.parlorName}</p>
                <p>{this.props.parlor.address}</p>
                {
                    this.props.parlor.daysOpen.map((day) => {
                        return (
                            <div className="parlor-detail-hours">
                                <p>{day.day}: {day.open} - {day.close}</p>
                            </div>
                        )
                    })
                }
                <p>{this.props.parlor.phoneNumber}</p>
                <a href={this.props.parlor.website}>{this.props.parlor.parlorName}</a>
                <p>Rating: {this.props.parlor.review}</p>
                <p>Number of Flavors: {this.props.parlor.numberOfFlavors}</p>
                <button className="back-to-parlors-btn" onClick={this.props.getParlorDetails}>Back To Parlors</button>
            </div>
        </div>
        )
    }
}
export default ParlorDetail;