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
  
  const deleteTask = (index) =>{
      const updatedTasks = task.filter((_, item ) => item !== index);
      setTask(updatedTasks);
  } 


  return (
    <div className='container'>
    <input 
      type='text'
      value ={newTask}
      placeholder='Enter task'
      onChange={handleChange}
      />
      <button onClick={addTask} className="add">Add</button>
      <ol>
        {task.map((item, index)=>{
          return(
          <li key={index}>{item}
            <button className="complete" >Complete</button>
            <button className="delete" onClick={()=>deleteTask(index)}>Delete</button>
          </li>
          )
        })
      }
      </ol>
  </div>
  )
}

export default Main;