import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Link } from "react-router-dom";

function Earth() {
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={(1, 1, 1)} />
      <meshPhongMaterial attach="material" color="lightblue" alphaTest="0.3" />
    </mesh>
  );
}

export default function SixthPage({ user, logout }) {
  return (
    <div className="Universe">
      <Link to="/login" onClick={logout}>
        LOGOUT
      </Link>
      <Canvas style={{ width: `100vw`, height: `100vh` }}>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 10, 10]} angle={0.3} />
        <Earth />
      </Canvas>
    </div>
  );
}
