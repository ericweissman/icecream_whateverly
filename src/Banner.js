import React, { Component } from 'react';
import App from './App.js';
import './css/Banner.scss';

const Banner = () => {
    return (
      <div className='Banner'>
        <div className='banner-center'>
          <img src='./images/icecreams.jpg' className='cones-img'/>
          <p className='banner-text'>Our mission is to show you the craziest, most interesting, new ice cream flavors on the block around Denver and Aurora. You can use the search bar to locate your favorite ice cream or just browse our homepage to see the coolest new flavors!</p>
        </div>
      </div>
    )
  }

export default Banner;