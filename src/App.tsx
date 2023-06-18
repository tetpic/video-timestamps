import { useEffect, useRef } from 'react';
import "../node_modules/video-react/dist/video-react.css"; // import css
import { Player, PlayerReference } from 'video-react';
import './App.css';
import GreenBlocks from './GreenBlocks';
import TimeStamps from './TimeStamps';
import { useDispatch, useSelector } from 'react-redux';
import { getTimestamps, setCurrentTime } from './redux/timeStampsSlice';
import { RootState } from './redux/store';
import s from "./app.module.scss"

function App() {

  let videoRef = useRef<PlayerReference>(null!)

  

  let playFunc = () => {
    // let video = videoRef.current
    // video.play()
    // console.dir(videoRef.current)
  }

  let setVideoTime =(time: number) => {
    videoRef.current.seek(time)
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    videoRef.current.subscribeToStateChange((state)=>{dispatch(setCurrentTime(state.currentTime))})
    videoRef.current.play()
    dispatch(getTimestamps())
  }, [dispatch])


  return (
  <div className={s.mainWrapper}>  
    <div className={s.videoWrapper} onClick={()=>{playFunc()}}>

      <Player
        playsInline
        preload="auto"
        poster="/assets/poster.png"
        fluid={false}
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        <GreenBlocks text="lol" />
    </div>
    <p>Временные отметки</p>
    <TimeStamps playFunc={setVideoTime} />
  </div>
  );
}

export default App;
