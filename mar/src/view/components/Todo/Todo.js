import React, { useState, useEffect } from 'react';
import './Todo.css'
import Trash from './img/trash.png'




function Todo() {
  const [todotasks, setTodotasks] = useState([]);
  let lastName = localStorage.getItem("lastName");
<<<<<<< HEAD
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
=======
  console.log(todotasks[0])

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
        // console.log(data)
        // console.log(data[0])
        // console.log(data[0]._id)
        setTodotasks(data);


      })

  }, [])

  return (
    <div className="todo">

      <div id="tasks">
        {
          todotasks.map((elem, index) => {
            return (
>>>>>>> dev

              <div id="taskcard"> 
                <h2 >{elem._id}</h2>
                {

<<<<<<< HEAD
 


=======
                  elem.tasks.map((task, index) => {
                    return (
                      <div id="task-data">
                             <p  onClick={opentask}> {index+1} {task.taskTitle} </p>
                         
                            <img src={Trash} alt="trash" />
                              <input type="checkbox" />       
                       </div>
                              
                    )
                                
                              })}
                  
              </div>

            )
          })
        }
      </div>
    </div>



  )




  //  function ongetToDo() {

  //  }
>>>>>>> dev

}






export default Todo;