import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm({ login, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="LoginDiv">
      <h1>???</h1>
      <form onSubmit={handleSubmit} className="LoginForm">
        <h1>Log in</h1>
        <label>Username</label>
        <input
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder=""
        />
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
        <input type="submit" value="Login" className="LoginButton" />
        <p>Don't have a login?</p>
        <Link to="/signup">Sign up!</Link>
      </form>
    </div>
  );
}
