import React from 'react';
import './css/Main.scss';

const SearchByParlor = (props) => {
    let parlors = props.parlors
    return (
        <div className="SearchByParlor">
            <select className="search-parlor" onChange={props.searchParlor}>
                <option value="" disabled hidden>Select parlor</option>
                <option value="show all">Show All Parlors</option>
                {parlors.map((parlor) => {
                    return (
                        <option 
                            value={parlor.parlorName}
                            key={parlor.parlorName}>{parlor.parlorName}
                        </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SearchByParlor;