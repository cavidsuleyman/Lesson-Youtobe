import React, { useContext, useState } from "react";
import "../style/sidebar.css";
import {
  linkdata1,
  linkdata2,
  linkdata3,
  linkdata4,
  linkdata5,
  linkdata6,
} from "../fakedata/data";
import { BsChevronDown } from "react-icons/bs";
import { VideoContext } from "../context/VideoContext";

const Sidebar = () => {
  const [link1, setLink1] = useState(linkdata1);
  const [link2, setLink2] = useState(linkdata2);
  const [link3, setLink3] = useState(linkdata3);
  const [link4, setLink4] = useState(linkdata4);
  const [link5, setLink5] = useState(linkdata5);
  const [link6, setLink6] = useState(linkdata6);


  const {openSidebar} = useContext(VideoContext)

  return (
    <div className={openSidebar ? "res-sidebar" : "sidebar" }>
      <ul className="sidebar-links">
        <div className="border-side">
          {link1.map((v, i) => (
            <li key={i}>
              {v.icon1}
              <span>{v.title1}</span>
            </li>
          ))}
        </div>
        
        <div style={{display: openSidebar ? "none" : 'block'}} className="border-side">
          {link2.map((v, i) => (
            <li key={i}>
              {v.icon2}
              <span>{v.title2}</span>
            </li>
          ))}
        </div>
       
        <div style={{display: openSidebar ? "none" : 'block'}} className="border-side">
         <p>Subscriptions</p>
          {link3.map((v, i) => (
            <li key={i}>
              <img src={v.img} alt="" />
              <span>{v.title3}</span>
            </li>
          ))}
          <li>
                <BsChevronDown fontSize={18}/>
                <span>Show more</span>
          </li>
        </div>

        <div style={{display: openSidebar ? "none" : 'block'}} className="border-side">
        <p>Explore</p>
          {link4.map((v, i) => (
            <li key={i}>
              {v.icon3}
              <span>{v.title4}</span>
            </li>
          ))}
        </div>

        <div style={{display: openSidebar ? "none" : 'block'}} className="border-side">
        <p>More from YouTube</p>
          {link5.map((v, i) => (
            <li key={i}>
              {v.icon5}
              <span>{v.title5}</span>
            </li>
          ))}
        </div>

        <div style={{display: openSidebar ? "none" : 'block'}} className="border-side">
          {link6.map((v, i) => (
            <li key={i}>
              {v.icon6}
              <span>{v.title6}</span>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
