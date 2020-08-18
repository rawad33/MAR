import React, { useState, useEffect } from 'react';
import './Todo.css'
import Trash from './img/trash.png'




function Todo() {
  const [todotasks, setTodotasks] = useState([]);
  let lastName = localStorage.getItem("lastName");
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

              <div>
                <p >{elem._id}</p>
                {

                  elem.tasks.map((task, index) => {
                    return (
                      <div>
                             <p> {index+1} {task.taskTitle} </p>
                            <button>sad</button>
                            <img src={Trash} alt="trash"  />
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

}






export default Todo;