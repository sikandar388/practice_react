import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handelSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
      <h2>Context API Login</h2>
      <input
        type="text"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {"     "}
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {"   "}
      <button onClick={handelSubmit}>Login</button>
    </div>
  );
}

export default Login;
