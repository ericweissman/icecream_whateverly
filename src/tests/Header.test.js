import React from 'react';
import Header from '../Header.js';
import { shallow } from 'enzyme';

const searchForMock = jest.fn();

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header searchFor={searchForMock} />
    );
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
})