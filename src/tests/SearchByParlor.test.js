import React from 'react';
import SearchByParlor from '../SearchByParlor';
import { shallow } from 'enzyme';

const parlors = [
  {
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
  }]

const searchParlorMock = jest.fn();

describe('SearchByParlor', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchByParlor parlors={parlors} 
                      searchParlor={searchParlorMock} />
    )
  })

  it('should call searchParlor when the dropdown is manipulated', () => {
    wrapper.find('.search-parlor').simulate('change', { target: { value: '' } });
    expect(searchParlorMock).toBeCalled();
  })
})