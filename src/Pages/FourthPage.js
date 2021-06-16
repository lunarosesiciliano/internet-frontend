import React, { useState } from "react";
import FifthPage from "./FifthPage";
import FourthBackground from "../Images/FourthBackground";
import U4iaHome from "../u4ia/U4iaHome";

export default function FourthPage({ logout, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLogin] = useState(false);
  console.log(user, username, password);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
  };
  return (
    <>
      {loggedIn ? (
        <FifthPage user={user} logout={logout} />
      ) : (
        <div className="FourthPage">
          <FourthBackground />
          <U4iaHome user={user} logout={logout} />
          <form onSubmit={handleSubmit} className="FourthLogin">
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
            <input type="submit" value="Help Me" className="LoginButton" />
          </form>
        </div>
      )}
    </>
  );
}
