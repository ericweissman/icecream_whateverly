import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

const searchForMock = jest.fn();

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Search searchFor={searchForMock} />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
})