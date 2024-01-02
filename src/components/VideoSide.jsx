import React, { useContext } from "react";
import "../style/videoside.css";
import { VideoContext } from "../context/VideoContext";
import HoverVideoPlayer from "react-hover-video-player";
import HoverOverlay from "./HoverOverlay";

const VideoSide = () => {
  const { videos } = useContext(VideoContext);

  return (
    <div className="video-side-main">
      {videos.map((item) => (
        <div key={item.id} className="videos-box">
          <div className="videos-side">
            <HoverVideoPlayer
              
              videoSrc={item.video}
              pausedOverlay={
                <>
                <img
                  src={item.poster}
                  alt=""
                  className="video-poster"
                />
                <p className="video-current-time">15:23</p>
                </>
              }
              hoverOverlay={
                <HoverOverlay/>
              }

              volume={1}
              style={{cursor: "pointer"}}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoSide;
