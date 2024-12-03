import React, { useState } from 'react';
import axios from 'axios';

function InputTask({ onTaskAdded }) 
{
  const [task, setTask] = useState('');

  const handleInputChange = (e) => 
  {
    setTask(e.target.value);
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    
    try {
      const name = {task};
      //console.log({task});
      const newTask = name.task;
      //console.log(newTask);
    await axios.post("http://localhost:5000/new", {newTask});
        setTask('');
        onTaskAdded();
    }
      catch (error)
      {
        console.error('Error adding task:', error);
      };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default InputTask;
