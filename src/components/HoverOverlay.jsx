import React, { useContext } from 'react'
import { VideoContext } from '../context/VideoContext';
import { ImVolumeMedium, ImVolumeMute2 } from 'react-icons/im';

const HoverOverlay = () => {

  const {isMute, toggleMute} = useContext(VideoContext)

  return (
    <>
        {
          isMute ? 
          <button className='video-muted-btn' onClick={toggleMute}>
            <ImVolumeMute2 size={20}/>
          </button>
          :
          <button className='video-muted-btn' onClick={toggleMute}>
            <ImVolumeMedium size={20}/>
          </button>
        }
    </>
  )
}

export default HoverOverlay
