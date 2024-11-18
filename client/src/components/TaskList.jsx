import React, {useEffect, useState} from "react";
import axios from "axios";

function TaskList() {
  //default state is an empty array
  const [tasks, setTaskList] = useState([]);

  const getTasks = async () => {
  try {
    const response = await axios.get("http://localhost:5000");
    //parse json data
    const result = response.data;
    //put data inside the useState, this changes the state.
    setTaskList(result);
    
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
  };
  
  //makes a request everytime the component is rendered
  useEffect(() => {
    getTasks();
  },[]);

return (
<div className="container">
    <h1>Get Stuff Done</h1>
    <a id="newTaskBtn" href="/new">New Task</a>
    <ul id="taskList">
      {tasks.map(task => (
          <li>
            <h2>
              {task.title}
            </h2>
          <small>
              {task.date_created} 
          </small>
          <p>
              {task.body}
          </p>
          <small>By:{task.creator_name}</small>
      </li>
    ))}  
    </ul>
</div>
)};

export default TaskList;