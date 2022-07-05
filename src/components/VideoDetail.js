import React from "react";
import loadingImage from "../assets/loading.png";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="intro-container">
        <div className="loading image">
          <img className="ui medium rounded image" src={loadingImage} />
        </div>
        <div>
          Illustration by{" "}
          <a href="https://icons8.com/illustrations/author/GrbQqWBEhaDS">
            Liam Moore
          </a>{" "}
          from <a href="https://icons8.com/illustrations">Ouch!</a>
        </div>
      </div>
    );
  }
  return (
    <div className="ui segment">
      <div className="item-playing ui embed">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="item-name ui header">{video.snippet.title}</h4>
        <p className="item-discription">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
