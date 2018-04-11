import types from '../constants'

export const initialState = {
  todos: [],
  deleted: {},
  disableAddTodo: true
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text
          }
        ]
      }

    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => (
            todo.id !== action.id
          ))
        ],
        deleted: state.todos.filter(todo => todo.id === action.id)[0]
      }

    case types.UNDELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          state.deleted
        ],
        deleted: {}
      }

    case types.INPUT_CHANGED:
      if (action.inputText) {
        return {
          ...state,
          disableAddTodo: false
        }
      }
      return {
        ...state
      }

    default:
      return state
  }
}

export default reducer
