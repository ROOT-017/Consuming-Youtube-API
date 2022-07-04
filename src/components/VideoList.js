import React from "react";
import VideoItems from "./VideoItems";

const VideoList = ({videos}) => {
  const videosItems = videos.map((video) => {
    return <VideoItems />;
  });
  return <div>{videosItems}</div>;
};

export default VideoList;
