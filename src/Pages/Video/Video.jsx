import React from 'react'
import '../Video/Video.css'
import PlayVideo from '../../Compnent/PlayVideo/PlayVideo'
import Recommend from '../../Compnent/RecommendVideo/Recommend'


function Video() {
  return (
    <div className='play-container'>

      <PlayVideo />
      <Recommend/>
      
    </div>
  )
}

export default Video