import React from 'react';
import Search from '../Search';
import { shallow } from 'enzyme';

const searchForMock = jest.fn();

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Search searchFor={searchForMock} />
    )
  })

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call searchFor when input is changed', () => {
    wrapper.find('.search-input').simulate('change', { target: {value : ''}});
    expect(searchForMock).toBeCalled();
  });
})