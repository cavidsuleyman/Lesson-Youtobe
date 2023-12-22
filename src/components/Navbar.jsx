import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { IoSearchOutline, IoNotificationsOutline  } from "react-icons/io5";
import { GoDeviceCameraVideo } from "react-icons/go";
import logo from '../assets/logo.png'
import '../style/navbar.css'
import { MdKeyboardVoice } from "react-icons/md";
import { VideoContext } from "../context/VideoContext";



const Navbar = () => {

  const {handleOpenSidebar} = useContext(VideoContext)

  return (
    <nav>
      <div className="nav-left">
        <button onClick={handleOpenSidebar}>
          <FaBars />
        </button>
        <img src={logo} alt="" />
      </div>
      <div className="nav-center">
        <div className="nav-search">
            <input type="text" placeholder="Search"/>
            <button>
                <IoSearchOutline/>
            </button>
        </div>
        <button className="nav-voice-btn">
            <MdKeyboardVoice/>
        </button>
      </div>
      <div className="nav-right">
        <button>
            <GoDeviceCameraVideo/>
        </button>
        <button>
            <IoNotificationsOutline />
        </button>
        <div className="nav-user">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
