import React, { useState } from "react";
import SecondPage from "./SecondPage";
import HomeBackground from "../Images/HomeBackground";
export default function HomePage({ logout, user }) {
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
        <SecondPage user={user} logout={logout} />
      ) : (
        <div className="HomePage">
          <HomeBackground />
          <h1 className="HomeHeader">Welcome to the Internet!</h1>
          <form onSubmit={handleSubmit} className="HomeLogin">
            <h2 className="HomeHeader">please log in ☺︎</h2>
            <label className="HomeLabel">username</label>
            <input
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label className="HomeLabel">Password</label>
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
