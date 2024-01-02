import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Navbar from "./components/Navbar";
import { VideoContext } from "./context/VideoContext";
import { useState } from "react";
import { videoData } from "./fakedata/data";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [videos, setVideos] = useState(videoData);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
    console.log(1);
  };

  return (
    <VideoContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        handleOpenSidebar,
        videos,
        setVideos,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </VideoContext.Provider>
  );
}

export default App;
