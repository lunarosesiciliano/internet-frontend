import React, { useState } from "react";
import ThirdBackground from "../Images/ThirdBackground";
import FourthPage from "./FourthPage";

export default function HomePage({ login, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLogin] = useState(false);
  console.log(user, username, password);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
  };
  return (
    <div className="ThirdPage">
      {loggedIn ? (
        <FourthPage />
      ) : (
        <>
          <ThirdBackground />
          <form onSubmit={handleSubmit} className="ThirdLogin">
            <h2>3 </h2>
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
        </>
      )}
    </div>
  );
}
