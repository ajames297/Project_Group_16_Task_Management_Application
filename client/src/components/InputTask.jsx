import React, {useState} from "react";
import axios from "axios";

function InputTask() {
    const [task, setTask] = useState({
      body: "",
    });

    function handleChange(event) {
      console.log(event.target.value);
      setTask(event.target.value);
    }

//these can be found in the Week 9 "6. React Forms"
    const handleClick = async (event) => {
      event.preventDefault();
      //prevents the default Next behavior of the event
      //in this case it prevents the <form> from refreshing the page
       try {
           const response = await axios.post("http://localhost:5000/new", {task});
      console.log(response.data)
       } catch (error) {
        console.error("Failed to make request:", error.message);
        }
        };

    return (
              <form onSubmit={handleClick}>
                <div>
                <input
                onChange={handleChange}
                type="text"
                placeholder="Input Task"
                
                />
                </div>
                <button  type="submit">Add Task</button>
              </form>
    )};

export default InputTask;