import React, { Component } from 'react';
import App from './App.js';
import './css/Banner.scss';

const Banner = () => {
    return (
      <div className='Banner'>
          {/* <h2>Interesting ideas that set your mind in motion</h2> */}
        <div className='banner-center'>
          <img src='images/icecreams.jpg' className='cones-img'/>
          <p>Hear directly from the people who know it best. From tech to politics to creativity and more — whatever your interest, we’ve got you covered.</p>
        </div>
      </div>
    )
  }

export default Banner;