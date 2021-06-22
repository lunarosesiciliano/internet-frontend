import React, { useState } from "react";
import PageTwoBackground from "../Images/PageTwoBackground";
import { Link } from "react-router-dom";

export default function SecondPage({ user, logout }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="SecondPage">
      <PageTwoBackground />
      <form className="SecondLogin">
        <h2>please log in ☺︎</h2>
        <label>username</label>
        <input
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder=""
        />
        <Link to="/void">
          <input type="submit" value="Login" className="LoginButton" />
        </Link>
      </form>
    </div>
  );
}
