import React, { useState, useRef } from "react";
import FifthBackground from "../Images/FifthBackground";
import SixthPage from "./SixthPage";
import * as tf from "@tensorflow/tfjs";
import * as faceMesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { drawMesh } from "../FaceUtilities";
export default function FifthPage({ logout, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLogin] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  //load faceMesh
  const runFaceMesh = async () => {
    const net = await faceMesh.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });
    setInterval(() => {
      detect(net);
    }, 100);
  };
  //detect faceMesh function
  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // set video properties

      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // set video width

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // set canvas width

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // make detections

      const face = await net.estimateFaces(video);
      console.log(face);
      const ctx = canvasRef.current.getContext("2d");
      drawMesh(face, ctx);

      // get canvas context for drawing
    }
  };
  runFaceMesh();

  return (
    <>
      {loggedIn ? (
        <SixthPage user={user} logout={logout} />
      ) : (
        <div className="FifthPage">
          <FifthBackground />
          <div className="Webcam">
            <Webcam
              ref={webcamRef}
              style={{
                position: "absolute",
                marginTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 400,
                textAlign: "center",
                zIndex: 9,
                width: 640,
                height: 480,
              }}
            />
            <canvas
              ref={canvasRef}
              className="Canvas"
              style={{
                position: "absolute",
                marginTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 400,
                textAlign: "center",
                zIndex: 9,
                width: 640,
                height: 480,
              }}
            />
          </div>

          <form onSubmit={handleSubmit} className="FifthLogin">
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
