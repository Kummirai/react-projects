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
  <div className="outer-container">
    <div className='container'>
    <div className="input-add">
    <input 
      type='text'
      value ={newTask}
      placeholder='Enter task'
      onChange={handleChange}
      />
      <button onClick={addTask} className="add">Add</button>
      </div>
      <ol>
        {task.map((item, index)=>{
          return(
          <li key={index}><span>{item}</span>
            <button className="complete" >In Progress</button>
            <button className="delete" onClick={()=>deleteTask(index)}>Delete</button>
          </li>
          )
        })
      }
      </ol>
    </div>
  </div>
  )
}

export default Main;