import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import "../node_modules/video-react/dist/video-react.css"; // import css
import { Player, PlayerReference } from 'video-react';
import './App.css';
import GreenBlocks from './GreenBlocks';
import TimeStamps from './TimeStamps';

function App() {

  let videoRef = useRef<PlayerReference>(null!)
  let [videoState, changeVideoState] = useState({})

  let playFunc = () => {
    // let video = videoRef.current
    // video.play()
    // console.dir(videoRef.current)
  }

  let setVideoTime =() => {
    videoRef.current.seek(16)
  }

  useEffect(()=>{
    videoRef.current.subscribeToStateChange((state)=>{console.log(state)})
  }, [])


  return (<>  
    <div onClick={()=>{playFunc()}}>

      <Player
        playsInline
        preload="auto"
        poster="/assets/poster.png"
        fluid={false}
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        <GreenBlocks text="lol" />
        <TimeStamps playFunc={setVideoTime} />
      </div>
      </>
  );
}

export default App;
