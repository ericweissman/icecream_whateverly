import React, { Component } from 'react';
import App from './App.js';
import ParlorCard from './ParlorCard.js';

class ParlorDetail extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <div className="parlor-detail-card">
            <div className="parlor-detail-photo">
                <img src="public/images/Parlors.Snowlab.png" />
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
                <p>{this.props.parlor.review}</p>
                <p>{this.props.parlor.numberOfFlavors}</p>
            </div>
        </div>
        )
    }
}
export default ParlorDetail;