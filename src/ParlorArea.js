import React from 'react';
import './css/Main.scss';
import ParlorCard from './ParlorCard.js';

const ParlorArea = (props) => {
  return (
      <div className="parlor-area">
        <div className="parlor-list">
          {
            props.parlors.filter((parlor) => {
              return parlor.flavors.includes(parseInt(props.id))
            })
            .map((parlor) => {
              return (
                <ParlorCard parlor={parlor}
                />
                )
              })
            } 
            <button onClick={props.getMoreInfo} className="back-to-all-flavors">Back To All Flavors</button>
        </div>
      </div>
      )
  }
  

export default ParlorArea