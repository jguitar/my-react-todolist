/* global expect, it, describe, jest, beforeEach */

import React from 'react'
import { shallow, mount } from 'enzyme'
import AddTodo from '.'

describe('AddTodo component', () => {
  let component
  const submitMock = jest.fn()

  beforeEach(() => {
    component = shallow(<AddTodo
      submitTodo={submitMock}
      inputChanged={submitMock}
      disableAddTodo
    />)
  })

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true)
  })

  it('Should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1)
  })

  describe('Add todo button', () => {
    it('Should exist', () => {
      expect(component.find('.todo-submit').length).toEqual(1)
    })

    it('Should be disabled when there is no text in the input', () => {
      component = shallow(<AddTodo
        submitTodo={submitMock}
        inputChanged={submitMock}
        disableAddTodo
      />)
      expect(component.find('.todo-submit').prop('disabled')).toBeTruthy()
    })

    it('Should be enabled when there is a text in the input', () => {
      component = shallow(<AddTodo
        submitTodo={submitMock}
        inputChanged={submitMock}
        disableAddTodo={false}
      />)
      expect(component.find('.todo-submit').prop('disabled')).toBeFalsy()
    })

    it('Should call the submitTodo function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} inputChanged={submitMock} disableAddTodo />)

      expect(submitMock).not.toHaveBeenCalled()
      component.find('form').simulate('submit')
      expect(submitMock).toHaveBeenCalled()
    })
  })
})
