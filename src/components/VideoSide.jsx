import React, { useContext } from "react";
import "../style/videoside.css";
import { VideoContext } from "../context/VideoContext";
import HoverVideoPlayer from "react-hover-video-player";
import HoverOverlay from "./HoverOverlay";
import { ImBlocked } from "react-icons/im";

const VideoSide = () => {
  const { videos, isMute, videoRef, blockVideo } = useContext(VideoContext);

  return (
    <div className="video-side-main">
      {videos.map((item, i) => item.status && (
        <div key={i} className="videos-box">
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
              muted={isMute}
              videoRef={videoRef}
            />
          </div>

          <div className="videos-title">
              <div className="videos-title-channel">
                  <img src={item.poster} alt="" />
              </div>
              <div className="videos-title-desc">
                <h2>{item.video_name}</h2>
                <p>{item.category}</p>
                <span>{item.viewers} views - {item.time}</span>
              </div>
              <div className="videos-title-block">
                  <button onClick={() => blockVideo(i)}>
                    <ImBlocked fontSize={17}/>
                  </button>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoSide;
