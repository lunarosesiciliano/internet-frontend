import React, { useState } from "react";
import ThirdBackground from "../Images/ThirdBackground";
import VoidsPage from "../Void/VoidsPage";
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
    <>
      {loggedIn ? (
        <FourthPage user={user} />
      ) : (
        <div className="ThirdPage">
          <ThirdBackground />
          <VoidsPage />
          <form onSubmit={handleSubmit} className="ThirdLogin">
            {/* <p>...</p> */}
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
            <input
              type="submit"
              value="Login... :)"
              className="ThirdLoginButton"
            />
          </form>
        </div>
      )}
    </>
  );
}
