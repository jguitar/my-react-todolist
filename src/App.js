import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddTodo from './components/addTodo/'
import TodoList from './components/todoList/'
import actions from './actions'

export const App = ({ submitTodo, todos, deleteTodo, undeleteTodo, deleted, inputChanged, disableAddTodo }) => (
  <div>
    <h1>Todo List</h1>
    <AddTodo submitTodo={submitTodo} inputChanged={inputChanged} disableAddTodo={disableAddTodo} />
    <TodoList todos={todos} deleteTodo={deleteTodo} undeleteTodo={undeleteTodo} deleted={deleted} />
  </div>
)

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
  deleted: PropTypes.object.isRequired,
  inputChanged: PropTypes.func.isRequired,
  disableAddTodo: PropTypes.bool.isRequired
}

const mapStateToProps = state => state.todoListApp

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text))
    }
  },

  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id))
  },

  undeleteTodo: () => {
    dispatch(actions.undeleteTodo())
  },

  inputChanged: (inputText) => {
    dispatch(actions.inputChanged(inputText))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
