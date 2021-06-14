import React from "react";
import VoidCSS from "./Void.module.css";

const Header = () => {
  return (
    <div className={VoidCSS.header}>
      <img
        src="https://i.imgur.com/lQ3b1As.gif"
        width="500"
        alt="welcome to the void"
      ></img>
    </div>
  );
};

export default Header;
