/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '.';

describe('TodoList component', () => {
  const component = shallow(<TodoList />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
});
