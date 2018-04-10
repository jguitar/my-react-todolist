/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  it('Should render successfully', () => {
    const component = shallow(<AddTodo />);
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    const component = shallow(<AddTodo />);
    expect(component.find('.todo-input').length).toEqual(1);
  });

  describe('Add todo button', () => {
    it('Should exist', () => {
      const component = shallow(<AddTodo />);
      expect(component.find('.todo-submit').length).toEqual(1);
    });
  });
});
