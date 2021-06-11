import React, { useState } from "react";
import PageTwoBackground from "../Images/PageTwoBackground";
import ThirdPage from "./ThirdPage";

export default function SecondPage({ login, user }) {
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
        <ThirdPage user={user} />
      ) : (
        <div className="SecondPage">
          <PageTwoBackground />
          <form onSubmit={handleSubmit} className="SecondLogin">
            <h2>please log in ☺︎</h2>
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
            <input type="submit" value="Login" className="LoginButton" />
          </form>
        </div>
      )}
    </>
  );
}
