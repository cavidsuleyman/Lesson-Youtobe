import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Navbar from "./components/Navbar";
import { VideoContext } from "./context/VideoContext";
import { useRef, useState } from "react";
import { videoData } from "./fakedata/data";
import WatchLater from "./page/WatchLater";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [videos, setVideos] = useState(videoData);
  const [isMute, setIsMute] = useState(false);

  const videoRef = useRef(null);
  const bufferRef = useRef(null);
  const progressRef = useRef(null);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
    console.log(1);
  };

  const toggleMute = () => {
    setIsMute(!isMute)
    videoRef.current.muted = !isMute
  }

  const blockVideo = (i) => {
    videos[i].status = false;
    setVideos([...videos])
  }

  const unBlockVideo = (i) => {
    videos[i].status = true;
    setVideos([...videos])
  }

  return (
    <VideoContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        handleOpenSidebar,
        videos,
        setVideos,
        isMute,
        setIsMute,
        videoRef,
        bufferRef,
        progressRef,
        toggleMute,
        blockVideo,
        unBlockVideo
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/watchlater" element={<WatchLater />} />
        </Routes>
      </BrowserRouter>
    </VideoContext.Provider>
  );
}

export default App;
