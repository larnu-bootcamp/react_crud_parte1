import React, { useState } from "react";


function EditTodo(params) {

const [value, setValue] = useState(params.item.name);

  function onChange(e) {
    setValue(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    params.onSubmitEdit({ id:params.item.id, name: value });
  }

  return <>
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={value} onChange={onChange} />
      <button type="submit">Edit</button>
    </form>
    <button onClick={params.onCancel}>Cancel</button>
  </>
}

export default EditTodo;