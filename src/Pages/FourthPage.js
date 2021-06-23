import React, { useState } from "react";
import FourthBackground from "../Images/FourthBackground";
import U4iaHome from "../u4ia/U4iaHome";
import { Link } from "react-router-dom";

export default function FourthPage({ logout, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="FourthPage">
      <FourthBackground />
      <U4iaHome user={user} logout={logout} />
      <form className="FourthLogin">
        <h2>☻</h2>
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
        <Link to="/chatroom">
          <input type="submit" value="☺︎☻☺︎" className="LoginButton" />
        </Link>
      </form>
    </div>
  );
}
