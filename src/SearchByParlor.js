import React, { Component } from 'react';
import App from './App.js';
import './css/Main.scss';
import { arch } from 'os';

const SearchByParlor = (props) => {
    let parlors = props.parlors
    return (
        <div className="SearchByParlor">
            <select onChange={props.searchParlor}>
                <option value="" selected disabled hidden>Select Parlor</option>
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