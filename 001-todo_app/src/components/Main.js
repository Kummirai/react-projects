import React from 'react';
import { useState } from 'react';

const Main = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    if (newTask !== "") {
      setTask(oldTasks => [...oldTasks, newTask]);
      setNewTask("");
    }
  }


  return (
    <div className='container'>
    <input 
      type='text'
      value ={newTask}
      placeholder='Enter task'
      onChange={handleChange}
      />
      <button onClick={addTask}>Add</button>
      <ol>
        {task.map((item, index)=>{
          return(
          <li key={index}>{item}
            <button>Complete</button>
            <button>Delete</button>
          </li>
          )
        })
      }
      </ol>
  </div>
  )
}

export default Main;