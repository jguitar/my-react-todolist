/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  it('Should render successfully', () => {
    const component = shallow(<AddTodo />);
    expect(component.exists()).toEqual(true);
  });
});
