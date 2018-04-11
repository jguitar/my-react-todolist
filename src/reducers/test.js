/* global expect, it, describe */

import types from '../constants'
import { reducer, initialState } from '.'

describe('Reducer', () => {
  const todoText = 'A todo'

  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  describe('Submit todo', () => {
    it('Should return the correct state', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText
      }

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText
          }
        ],
        deleted: {},
        disableAddTodo: true
      }

      expect(reducer(undefined, action)).toEqual(expectedState)
    })
  })

  describe('Delete todo', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText
          }
        ]
      }

      const action = {
        type: types.DELETE_TODO,
        id: 1
      }

      const expectedState = {
        todos: [],
        deleted: {
          id: 1,
          text: todoText
        }
      }

      expect(reducer(startingState, action)).toEqual(expectedState)
    })
  })

  describe('Undelete todo', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [],
        deleted: {
          id: 1,
          text: todoText
        },
        disableAddTodo: false
      }

      const action = {
        type: types.UNDELETE_TODO
      }

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText
          }
        ],
        deleted: {},
        disableAddTodo: false
      }

      expect(reducer(startingState, action)).toEqual(expectedState)
    })
  })

  describe('Input change', () => {
    it('Should return the correct state when no value entered', () => {
      const action = {
        type: types.INPUT_CHANGED,
        inputText: ''
      }

      const expectedState = {
        todos: [],
        deleted: {},
        disableAddTodo: true
      }

      expect(reducer(undefined, action)).toEqual(expectedState)
    })

    it('Should return the correct state when a value is entered', () => {
      const action = {
        type: types.INPUT_CHANGED,
        inputText: todoText
      }

      const expectedState = {
        todos: [],
        deleted: {},
        disableAddTodo: false
      }

      expect(reducer(undefined, action)).toEqual(expectedState)
    })
  })
})
