import React, { Component } from 'react';
import './css/Banner.scss';

const Banner = () => {
    return (
      <div className='Banner'>
        <div className='banner-center'>
          <img src="http://purepng.com/public/uploads/large/purepng.com-ice-cream-conefood-ice-cream-ice-cream-cone-cone-scoop-vanilla-ice-941524636426f7rep.png"
         className='cones-img'/>
          <p className='banner-text'>Our mission is to show you the craziest, most interesting, new ice cream flavors on the block around Denver and Aurora. You can use the search bar to locate your favorite ice cream or just browse our homepage to see the coolest new flavors!</p>
        </div>
      </div>
    )
  }

export default Banner;