import React from 'react';
import ParlorArea from '../ParlorArea';
import { shallow } from 'enzyme';


let wrapper;

describe('ParlorArea', () => {

  beforeEach(() => {
    wrapper = shallow(
      <ParlorArea ParlorArea={ParlorArea} />
      )
    });
  })
  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
