import React from 'react';
import './css/Main.scss';

const ParlorDetail = (props) => {
    return (
        <div className="parlor-detail-card">
            <img src={`./images/Parlors/${props.parlor.parlorName}.png`} alt="Ice Cream Parlor Name"/>
            <a href={props.parlor.website} target="_blank">{props.parlor.parlorName}</a>
            <p className='italic'>{props.parlor.address}</p>
            <p>{props.parlor.phoneNumber}</p>
            <ul>
                <li className='bold'>HOURS</li>
                    {
                        props.parlor.daysOpen.map((day) => {
                            return (
                                <div>
                                    <li>{day.day}: {day.open} - {day.close}</li>
                                </div>
                            )
                        })
                    }
            </ul>
            <p>Rating: {props.parlor.review}</p>
            <p>Number of Flavors: {props.parlor.numberOfFlavors}</p>
            <button className="back-to-parlors-btn" onClick={props.getParlorDetails}>Back To Parlors</button>
        
        </div>
        )
}
export default ParlorDetail;