import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Navbar from "./components/Navbar";
import { VideoContext } from "./context/VideoContext";
import { useState } from "react";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
    console.log(1);
  };

  return (
    <VideoContext.Provider
      value={{ openSidebar, setOpenSidebar, handleOpenSidebar }}
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
