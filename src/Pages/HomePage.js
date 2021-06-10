import React, { useState } from "react";

export default function HomePage({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };
  return (
    <div className="HomePage">
      <h1>hi</h1>
      <form onSubmit={handleSubmit} className="SecondLogin">
        <h1>log in 🙂</h1>
        <label>username</label>
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
        {/* {error ? <p style={{ color: "red" }}>{error}</p> : null} */}
        <input type="submit" value="Login" className="LoginButton" />
      </form>
    </div>
  );
}
