import types from '../constants';

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };

    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            const newTodo = todo;
            newTodo.deleted = newTodo.id === action.id;
            return newTodo;
          }),
        ],
      };


    case types.UNDELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            const newTodo = todo;
            newTodo.deleted = newTodo.id !== action.id;
            return newTodo;
          }),
        ],
      };

    default:
      return state;
  }
};

export default reducer;
