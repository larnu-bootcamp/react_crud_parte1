import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList.js';
import AddTodo from './components/AddTodo.js';

import EditTodo from "./components/EditTodo"


function App() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);//2
  const [editTodo, setEditTodo] = useState(false);//2

  function onDelete(id) {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  function onSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    setTodos(prev => [...prev, { id: prev.length + 1, name}]);
    e.target.reset();
  }

  function onEdit(todo) { //2
    setEdit(true);
    setEditTodo(todo);
  }

  function onSubmitEdit(editedTodo) {//2

    const newTodos = todos.map(todo => {
      if (editedTodo.id === todo.id) {
        return { ...todo, name: editedTodo.name };
      }
      return todo;
    });
    setTodos(newTodos);
    setEdit(false);
    setEditTodo({});
  }
  
  return (
    <div className="App">
    <TodoList todos={todos} onDelete={onDelete} onEdit={onEdit} />
      { edit ? 
        <EditTodo item={editTodo} onSubmitEdit={onSubmitEdit} onCancel={() => setEdit(false)} /> 
      : <AddTodo onSubmit={onSubmit} /> }
  </div>
  );
}
export default App;