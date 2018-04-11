/* global describe, it, expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '.'

describe('TodoList component', () => {
  const deleteMock = jest.fn()
  const undeleteMock = jest.fn()

  const props = {
    todos: [
      {
        id: 1,
        text: 'A todo'
      }
    ],
    deleteTodo: deleteMock,
    undeleteTodo: undeleteMock,
    deleted: {}
  }

  const component = shallow(<TodoList {...props} />)

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true)
  })

  it('Should display a todo when passed in as a prop', () => {
    expect(component.find('.todo-text').text()).toEqual(props.todos[0].text)
  })

  it('Should call the deleteTodo function when Delete button is clicked', () => {
    component.find('.todo-delete').simulate('click')
    expect(deleteMock).toHaveBeenCalled()
  })

  it('Should call the undeleteTodo function when Undelete button is clicked', () => {
    component.find('.todo-undelete').simulate('click')
    expect(undeleteMock).toHaveBeenCalled()
  })

  it('Should be disabled the Undelete button by default', () => {
    expect(component.find('.todo-undelete').prop('disabled')).toBeTruthy()
  })

  it('Should be enabled the Undelete button when there is a deleted', () => {
    const propsWithDeleted = {
      ...props,
      deleted: {
        id: 1,
        text: 'A todo'
      }
    }
    const component = shallow(<TodoList {...propsWithDeleted} />)
    expect(component.find('.todo-undelete').prop('disabled')).toBeFalsy()
  })
})
