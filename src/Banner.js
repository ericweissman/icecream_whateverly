import React from 'react';
import './css/Banner.scss';

const Banner = () => {
    return (
      <div className='Banner'>
        <div className='banner-center'>
          <img src="http://purepng.com/public/uploads/large/purepng.com-ice-cream-conefood-ice-cream-ice-cream-cone-cone-scoop-vanilla-ice-941524636426f7rep.png"
            className='cones-img'/>
          <p className='banner-text'>Our mission is to show you the craziest, most interesting, new ice cream flavors around Denver and Aurora. Use the search bar to find your favorite flavor, filter by your local parlor or just browse our app to see the coolest new flavors!</p>
        </div>
      </div>
    )
  }

export default Banner;