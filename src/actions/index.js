import types from '../constants/index';

let todoId = 0;

const nextId = () => {
  todoId += 1;
  return todoId;
};

const actions = {
  submitTodo(text) {
    return {
      type: types.SUBMIT_TODO,
      id: nextId(),
      text,
    };
  },
  deleteTodo(id) {
    return {
      type: types.DELETE_TODO,
      id,
    };
  },
  undeleteTodo() {
    return {
      type: types.UNDELETE_TODO,
    };
  },
};

export default actions;
