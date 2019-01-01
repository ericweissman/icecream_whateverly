import React, { Component } from 'react';
<<<<<<< HEAD
import App from './App.js';
=======
>>>>>>> 2a92d4c6f21b849ce00ce5bacc1c8b106ee21560
import './css/Main.scss';

const SearchByParlor = (props) => {
    let parlors = props.parlors
    return (
        <div className="SearchByParlor">
            <select className="search-parlor" onChange={props.searchParlor}>
<<<<<<< HEAD
                <option value="" selected disabled hidden>Select Parlor</option>
=======
                <option value="" selected disabled hidden>Select parlor</option>
>>>>>>> 2a92d4c6f21b849ce00ce5bacc1c8b106ee21560
                <option value="show all">Show All Parlors</option>
                {parlors.map((parlor) => {
                    return (
                        <option value={parlor.parlorName}>{parlor.parlorName}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SearchByParlor;