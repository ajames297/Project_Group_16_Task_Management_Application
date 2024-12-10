import React, { useState } from 'react';
import './App.css';

import TaskList from './components/TaskList';
import InputTask from './components/InputTask';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [taskAdded, setTaskAdded] = useState(false);

  const handleLogin = (status) => 
    {
      setIsAuthenticated(status);
    };

  const handleTaskAdded = () => 
    {
      setTaskAdded(taskAdded);
    };

  return (
    <div className="App">
      {!isAuthenticated ? 
      (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <InputTask onTaskAdded={handleTaskAdded} />
          <TaskList key={taskAdded} />
        </>
      )}
    </div>
  );
}

export default App;
