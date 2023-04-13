import React from 'react';
import video from '../src/video1.mp4';

function App() {
  return (
    <>
      <video src={video} autoPlay loop muted />
    </>
  );
}

export default App;
