import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import CategoryBar from "../components/CategoryBar";
import { VideoContext } from "../context/VideoContext";
import HoverVideoPlayer from "react-hover-video-player";
import HoverOverlay from "../components/HoverOverlay";
import { BiAddToQueue } from "react-icons/bi";

const WatchLater = () => {
  const { videos, isMute, videoRef, unBlockVideo } = useContext(VideoContext);

  return (
    <div className="main">
      <Sidebar />
      <div className="container-video">
        <CategoryBar />
        <div className="video-side-main">
          {videos.map(
            (item, i) =>
              !item.status && (
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
                      hoverOverlay={<HoverOverlay />}
                      volume={1}
                      style={{ cursor: "pointer" }}
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
                      <span>
                        {item.viewers} views - {item.time}
                      </span>
                    </div>
                    <div className="videos-title-block">
                      <button onClick={() => unBlockVideo(i)}>
                        <BiAddToQueue />
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
