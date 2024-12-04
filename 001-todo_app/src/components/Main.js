import React from 'react';
import { useState } from 'react';

const Main = () => {
  const [task, setTask] = useState(["Clean", "Eat"]);
  const [newTask, setNewTask]= useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  
  
  const addTask = ()=>{
    setTask(oldTasks => [...oldTasks, newTask]);
    setNewTask("");
  }
  
  return (
    <div className='container'>
    <input 
      type='text'
      placeholder='Enter task'
      onChange={handleChange}
      />
      <button onClick={addTask}>Add</button>
      <ol>
        {task.map((item, index)=>{
          return(
          <li key={index}>{item}</li>
          )
        })
      }
      </ol>
  </div>
  )
}

export default Main;