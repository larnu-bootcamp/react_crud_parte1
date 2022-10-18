import React from "react";
import './TodoList.css';

function TodoList(params) {
  return <>
    <div>
      {
        params.todos.map(todo => {
          return <div key={todo.id} className="item"> 
            <p> {todo.name} </p>
            <button onClick={() => params.onDelete(todo.id)}>Delete</button>
            <button onClick={() => params.onEdit(todo)}>Edit</button>
            </div>
        })
      }
    </div>
  </>
}

export default TodoList;