import React from "react";

const VideoDetail = ({ video }) => {
  return <div className="item-selected">
    <div className="item-playing">
        <video src="#"></video>
    </div>
    <div className="item-name">{video.snippet.title}</div>
    <div className="item-discription">
        {video.snippet.discription}
    </div>
  </div>;
};

export default VideoDetail;
