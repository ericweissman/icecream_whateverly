import React from 'react';
import Banner from '../Banner';
import { shallow } from 'enzyme';


let wrapper;

describe('Banner', () => {

  beforeEach(() => {
    wrapper = shallow(
      <Banner/>
      )
    });
  })
  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
