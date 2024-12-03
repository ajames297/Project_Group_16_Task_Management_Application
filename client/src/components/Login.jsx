import React, { useState } from 'react';
import axios from "axios";

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000/login");
      //parse json data
      //console.log(response.data[0]);
      const result = response.data[0];
      //console.log(result);
      const storedPassword = result.password;
      console.log(storedPassword);
      if (response.data.length > 0) {
        
        if (password === storedPassword) {
          onLogin(true);
        } else {
          console.log("Incorrect Password");
        }
      } else {
        console.log("User not found");
     } 
     
    }
    catch (error) {
      console.error("Failed to make request:", error.message);
      }
  };

  // if (username === 'admin' && password === 'password') 
    // { // Example check
    //   onLogin(true);
    //  } 
   // else 
   //  {
    //    alert('Invalid credentials');
    //  }
 // };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
