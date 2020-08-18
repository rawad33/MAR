import React, { useState } from 'react';
import './Todo.css'




function Todo() {
  const [todotasks , setTodotasks] = useState([]);
  let lastName = localStorage.getItem("lastName");
  // console.log(lastName);
  console.log(todotasks[0])
  
  return (
    <div className="todo">
      <h1>TO-DO</h1>
      <button onClick={ongetToDo}> get data</button>
  
  
 

    </div>

  )
  


 
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
      // console.log(data)
      // console.log(data[0])
      // console.log(data[0]._id)
      setTodotasks(data);


    })
   }

}






export default Todo;