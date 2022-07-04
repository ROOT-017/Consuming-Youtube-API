import VideoItemCard from "../components/styles/VideoItemCard.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="video-item item "
      onClick={() => onVideoSelect(video)}
      id={video.id.videoId}
    >
      <div className="ui ">
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
        ></img>
      </div>
      <div className="content">
        <div>
          <a className="author">{video.snippet.channelTitle}</a>
        </div>
        <div className="header">{video.snippet.title}</div>
        <div>{video.snippet.publishedAt}</div>
      </div>
    </div>
  );
};
export default VideoItem;
