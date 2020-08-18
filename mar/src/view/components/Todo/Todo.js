import React from 'react';
import './Todo.css'



function Todo() {
  let userLastName = localStorage.getItem("UserLastname");
  console.log(userLastName);
  return (
    <div className="todo">
      <h1>TO-DO</h1>
      <button onClick={ongetToDo}> get data</button>




    </div>
  )

   function ongetToDo() {
    fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ userLastName }),
      headers: {
        'Content-Type': 'application/json'
      }
  
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
   }

}






export default Todo;