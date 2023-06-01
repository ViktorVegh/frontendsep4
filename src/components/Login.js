import React, { useState } from "react";
import { loginUser } from "../api"; // adjust this import to match your actual file structure

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(username, password);

      if (response.data.token) {
        // handle the response here. For example, you might save the auth token in local storage:
        localStorage.setItem("authToken", response.data.token);
      } else {
        throw new Error("No token in response");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
