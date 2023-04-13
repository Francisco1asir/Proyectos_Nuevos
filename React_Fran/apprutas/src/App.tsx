import React from 'react';
import ReactPlayer from 'react-player';
// import video1 from '../src/video1.mp4'

function VideoPlayer() {
  return (
    <ReactPlayer
      url={require('../src/video1.mp4')}
      playing={true}
      loop={true}
      muted={true}
      width='100%'
      height='100%'
    />
  );
}
export default VideoPlayer;
