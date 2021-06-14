import React from "react";
import VoidCSS from "./Void.module.css";

function VoidCard(props) {
  const handleDelete = (e) => {
    props.delete(props.voids);
  };

  return (
    <div className={VoidCSS.voidCard}>
      <ul>
        <li>
          <strong>name:</strong> {props.voids.name}
        </li>
        <li>
          <strong>message:</strong>
          {props.voids.message}
        </li>
        <li>
          <strong>current mood:</strong> {props.voids.mood.feeling}
        </li>
      </ul>
      <button className={VoidCSS.deleteButton} onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default VoidCard;
