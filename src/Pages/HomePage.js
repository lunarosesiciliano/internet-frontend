import React, { useState } from "react";
import HomeBackground from "../Images/HomeBackground";
import { Route, Switch, Link, withRouter } from "react-router-dom";
function HomePage({ logout, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="HomePage">
      <HomeBackground />
      <h1 className="HomeHeader">Welcome to the Internet!</h1>
      <form className="HomeLogin">
        <h2 className="HomeHeader">please log in</h2>
        <label className="HomeLabel">username</label>
        <input
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label className="HomeLabel">password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder=""
        />
        <Link to="/cosine">
          {" "}
          <input type="submit" value="Login" className="LoginButton" />
        </Link>
      </form>
    </div>
  );
}

export default withRouter(HomePage);
