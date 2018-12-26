import React from 'react';
import Card from '../Card.js';
import { shallow } from 'enzyme';

let id = "1";
let img = "1";
let flavor = "Vanilla";
let info = "Some stuff";
let parlors = [
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

    describe('Card', () => {
      let wrapper;

      beforeEach(() => {
          wrapper = shallow(
              <Card id={id}
              img={img}
              flavor={flavor}
              info={info}
              parlors={parlors}
              />
          )
      });

    it('should have the proper default state', () => {
        expect(wrapper.state()).toEqual({ moreInfo: false });
        });

    it('should change Card moreInfo state to true when the getParlorDetails method is called', () => {
        wrapper.find('.more-info-btn').simulate('click', { moreInfo: false})
        expect(wrapper.state('moreInfo')).toEqual(true)
        });
    })