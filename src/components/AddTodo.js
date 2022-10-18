import React from "react";


function AddTodo(params) {
  return <>
    <form onSubmit={params.onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Add</button>
    </form>
  </>
}

export default AddTodo;