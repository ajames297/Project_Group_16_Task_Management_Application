import React from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import InputTask from "./components/InputTask";
//import InputTask from "./components/InputTask";

function App() {
  return (
    <div>
      <InputTask />
      <TaskList />
    </div>
  )
}

export default App;