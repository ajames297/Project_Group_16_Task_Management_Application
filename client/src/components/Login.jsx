import React, {useState}  from "react";
import axios from "axios";

function LoginTasks () {

    const [userName, setUsername] = useState([]);
    const [passWord, setPassword] = useState([]);

    function handleUsernameChange(event) {
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        console.log(event.target.value);
        setPassword(event.target.value);
      }

//these can be found in the Week 9 "6. React Forms"
    const handleClick = async (event) => {

      event.preventDefault();
      //prevents the default Next behavior of the event
      //in this case it prevents the <form> from refreshing the page
      console.log(userName);
      console.log(passWord);

      try {
        const response = await axios.get("http://localhost:5000/login");
        //parse json data
        //console.log(response.data[0]);
        const result = response.data[0];
        //console.log(result);
        const storedPassword = result.password;
        console.log(storedPassword);
        if (response.data.length > 0) {
          
          if (passWord === storedPassword) {
            console.log("You're In!!");
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

    return (
              <form onSubmit={handleClick}>
                <div>
                <input
                onChange={handleUsernameChange}
                type="text"
                placeholder="Input Username"
                value={userName}
                //keeps a single source of truth
                />

                <input
                onChange={handlePasswordChange}
                type="text"
                placeholder="Input Password"
                value={passWord}
                />
                </div>
                <button type="submit">Login</button>
              </form>
    )};

export default LoginTasks;