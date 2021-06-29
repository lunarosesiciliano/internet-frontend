# The Internet

The Internet was created as an experimental piece for my capstone project at Flatiron. I first started coding after a year of isolation due to COVID. As a trained artist, I knew that whatever I went "back" to had to be a creative pursuit. Little did I understand that code WAS art.

# Auth

The core functionality of The Internet is authentication and logging in, both inside and outside of this project. I wanted to heavily exaggerate component of logging in while focusing on the experience of a digital space as art. I want the user to use the login form as a means of traveling to other spaces on the internet.

# Tech

The Internet was created with a React front and and a Ruby on Rails back end. Full authentication was achieved through JWT and styling was done using vanilla CSS, p5.js and react-three-fiber.js. Facial recognition and machine learning was created with Tensorflow.js.

# Code Example

Using TensorFlow to create facial recognition 

```
const webcamRef = useRef(null);
  const canvasRef = useRef(null);

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
      // console.log(face);
      const ctx = canvasRef.current.getContext("2d");
      drawMesh(face, ctx);

      // get canvas context for drawing
    }
  };
```

# Demo

# Contact

email: joannsiciliano.dev@gmail.com


linkdin: https://www.linkedin.com/in/joannsiciliano/
