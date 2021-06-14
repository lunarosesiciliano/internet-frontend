import React from "react";
import VoidCard from "./VoidCard";
import VoidCSS from "./Void.module.css";

function VoidContainer(props) {
  const displayVoids = () => {
    return props.voids.map((voids) => {
      console.log(voids);
      return <VoidCard key={voids.id} voids={voids} delete={props.delete} />;
    });
  };

  return <div className={VoidCSS.voidContainer}>{displayVoids()}</div>;
}

export default VoidContainer;
