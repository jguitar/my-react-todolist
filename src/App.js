import React from 'react';
import './App.css';
import AddTodo from './components/addTodo/';

const App = () => (
  <div>
    <h1>Todo List</h1>
    <AddTodo submitTodo={() => {}} />
  </div>
);

export default App;
