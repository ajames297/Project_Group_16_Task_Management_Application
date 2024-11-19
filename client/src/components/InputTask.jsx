import React, {useEffect, useState} from "react";
import axios from "axios";

function InputTask() {
    const [tasks, setTaskList] = useState([]);

    const inputTasks = async () => {
        try {
          const response = await axios.post("http://localhost:5000/new",tasks);
          //parse json data
          const result = response.data;
          //put data inside the useState, this changes the state.
          setTaskList(result);
          
        } catch (error) {
          console.error("Failed to make request:", error.message);
        }
        };

    useEffect(() => {
        inputTasks();
    },[]);

    return (
    <div className="container">
            <h1>
            Task List
            </h1>
              <form>
                <label for="title">Title:</label>
                <input name="title" type="text" value={tasks.title}
                //onChange={}
                />

                <label for="body">Body:</label>
                <input name="body" type="text" value={tasks.body}
                //onChange={}
                />

                <label for="creator_name">Name:</label>
                <input name="name"type="text" value={tasks.creator_name}
                //onChange={}
                />

                <button type="submit">Add Task</button>
              </form>
        </div>
    )};

export default InputTask;