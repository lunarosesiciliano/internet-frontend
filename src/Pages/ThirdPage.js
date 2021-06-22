import React, { useState } from "react";
import ThirdBackground from "../Images/ThirdBackground";
import VoidsPage from "../Void/VoidsPage";
import { Link } from "react-router-dom";

export default function HomePage({ user, logout }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="ThirdPage">
      <ThirdBackground />
      <VoidsPage />
      <form className="ThirdLogin">
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
        <Link to="/u4ia">
          <input
            type="submit"
            value="Login... :)"
            className="ThirdLoginButton"
          />
        </Link>
      </form>
    </div>
  );
}
