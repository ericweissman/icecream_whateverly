import React, { Component } from 'react';
import './css/Main.scss';

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
            <img src={`./images/Parlors/${this.props.parlor.parlorName}.png`}/>
<<<<<<< HEAD
            <a href={this.props.parlor.website}>{this.props.parlor.parlorName}</a>
            <p className='parlor-address'>{this.props.parlor.address}</p>
=======
            <a href={this.props.parlor.website} className='bold'>{this.props.parlor.parlorName}</a>
            <p className='italic'>{this.props.parlor.address}</p>
>>>>>>> 2a92d4c6f21b849ce00ce5bacc1c8b106ee21560
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
<<<<<<< HEAD
            <button className="back-to-parlors-btn" onClick={this.props.getParlorDetails}>Back To Parlors</button>
=======
            <button onClick={this.props.getParlorDetails}>Back To Parlors</button>
>>>>>>> 2a92d4c6f21b849ce00ce5bacc1c8b106ee21560
        
        </div>
        )
    }
}
export default ParlorDetail;