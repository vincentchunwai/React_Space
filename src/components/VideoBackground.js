import React from 'react';
import ReactPlayer from 'react-player';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        className="react-player"
        url="/6033597_Space Effect Particles Dust_By_Alejandro_Campollo_Artlist_HD.mp4"  
        playing
        loop
        muted
        
      />
    </div>
  );
};

export default VideoBackground;