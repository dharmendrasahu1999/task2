import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  };

    return (  
    <div className="App">
      <h1>github</h1>
      <button className="btn1" onClick={loadUsers}>Get Users</button>

      <h2>Users:</h2>
      <ul>
        {users.map(({ id, login, avatar_url }) => (
          <li key={id}>
            Name: {login} Avator: {avatar_url}
          </li>
        ))}
      </ul>
    </div>
    )
        }


export default App;