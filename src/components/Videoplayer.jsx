import React, { useState, useEffect, useRef } from "react";

const VideoPlayer = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef();

  useEffect(() => {
    // Play the first video when the component mounts
    videoRef.current.play();
  }, []);

  const handleVideoEnd = () => {
    // Switch to the next video when the current video ends
    setCurrentVideoIndex(currentVideoIndex + 1);
  };

  const currentVideo = videos[currentVideoIndex % videos.length];

  return (
    <video
      muted="true"
      playsinline=""
      className="mp4"
      loop=""
      autoplay="true"
      ref={videoRef}
      src={currentVideo}
      onEnded={handleVideoEnd}
    />
  );
};

export default VideoPlayer;
