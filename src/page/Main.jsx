import React from 'react'
import Sidebar from '../components/Sidebar'
import CategoryBar from '../components/CategoryBar'
import VideoSide from '../components/VideoSide'
import '../style/main.css'

const Main = () => {
  return (
    <div className='main'>
        <Sidebar/>
        <div className='container-video'>
          <CategoryBar/>
          <VideoSide/>
        </div>
    </div>
  )
}

export default Main
