import React, { useState } from 'react';
import './Todo.css'




function Todo() {
  let lastName = localStorage.getItem("lastName");
  console.log(lastName);
  return (
    <div className="todo">
      <h1>TO-DO</h1>
      <button onClick={ongetToDo}> get data</button>
      





    </div>

  )
  


  const [todotasks , setTodotasks] = useState([]);
  console.log(todotasks);
   function ongetToDo() {
    fetch('/api/todo', {  
      method: 'POST',
      body: JSON.stringify({ lastName }),
      headers: {
        'Content-Type': 'application/json'
      }
  
    })
    .then(res => res.json())
    .then(data => {
      data.map((task,index)=>{
        setTodotasks(task);
      })

    })
   }

}






export default Todo;