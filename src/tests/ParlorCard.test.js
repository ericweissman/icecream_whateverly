import React from 'react';
import ParlorCard from '../ParlorCard';
import { shallow } from 'enzyme';

let parlor = {
    "parlorName": "Little Man Ice Cream",
    "description": "Quirky shop for exotic ice cream",
    "address": "2620 16th St, Denver, CO 80211",
    "daysOpen": [
      {
        "day": "Sunday",
        "open": "11 AM",
        "close": "10 PM"
      },
      {
        "day": "Monday",
        "open": "11 AM",
        "close": "10 PM"
      },
      {
        "day": "Tuesday",
        "open": "11 AM",
        "close": "10 PM"
      },
      {
        "day": "Wednesday",
        "open": "11 AM",
        "close": "10 PM"
      },
      {
        "day": "Thursday",
        "open": "11 AM",
        "close": "10 PM"
      },
      {
        "day": "Friday",
        "open": "11 AM",
        "close": "11 PM"
      },
      {
        "day": "Saturday",
        "open": "11 AM",
        "close": "11 PM"
      }
    ],
    "phoneNumber": "303-455-3811",
    "website": "http://www.littlemanicecream.com/latest-scoop/menu/",
    "flavors": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    "numberOfFlavors": 27,
    "priceRange": "$",
    "review": 4.7
  }

describe('ParlorCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ParlorCard parlor={parlor} />
    )
  })

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({ details: false });
  });


  it('should change ParlorCard details state to true when the getParlorDetails method is called', () => {
      wrapper.find('.parlor-details').simulate('click', { details: false})
      expect(wrapper.state('details')).toEqual(true)
  })

})