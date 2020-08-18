import React, { useState, useEffect } from 'react';
import './Todo.css'



function Todo() {
  let lastName = localStorage.getItem("lastName");
  console.log(lastName);
  useEffect(() => {
  fetch('/api/todo', {  
    method: 'POST',
    body: JSON.stringify({ lastName }),
    headers: {
      'Content-Type': 'application/json'
    }

  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  })
  return (
    <div className="todo">
      <h1>TO-DO</h1>
      <button > get data</button>
    </div>
  )


 



}






export default Todo;