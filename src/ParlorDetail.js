import React, { Component } from 'react';
import './css/Main.scss';

class ParlorDetail extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
        <div className="parlor-detail-card">
            <img src={`./images/Parlors/${this.props.parlor.parlorName}.png`}/>
            <a href={this.props.parlor.website} target="_blank">{this.props.parlor.parlorName}</a>
            <p className='italic'>{this.props.parlor.address}</p>
            <p>{this.props.parlor.phoneNumber}</p>
            <ul>
                <li className='bold'>HOURS</li>
                    {
                        this.props.parlor.daysOpen.map((day) => {
                            return (
                                <div>
                                    <li>{day.day}: {day.open} - {day.close}</li>
                                </div>
                            )
                        })
                    }
            </ul>
            <p>Rating: {this.props.parlor.review}</p>
            <p>Number of Flavors: {this.props.parlor.numberOfFlavors}</p>
            <button className="back-to-parlors-btn" onClick={this.props.getParlorDetails}>Back To Parlors</button>
        
        </div>
        )
    }
}
export default ParlorDetail;