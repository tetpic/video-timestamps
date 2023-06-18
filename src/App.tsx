import { useEffect, useRef } from 'react';
import "../node_modules/video-react/dist/video-react.css"; // import css
import { Player, PlayerReference } from 'video-react';
import './App.css';
import GreenBlocks from './components/green_blocks/GreenBlocks';
import TimeStamps from './components/time_stamps/TimeStamps';
import { useDispatch } from 'react-redux';
import { getTimestamps, setCurrentTime } from './redux/timeStampsSlice';
import s from "./app.module.scss"

function App() {

  let videoRef = useRef<PlayerReference>(null!)


  let setVideoTime =(time: number) => {
    videoRef.current.seek(time)
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    videoRef.current.subscribeToStateChange((state)=>{dispatch(setCurrentTime(state.currentTime))})    
    dispatch(getTimestamps())
  }, [dispatch])


  return (
  <div className={s.mainWrapper} data-testid={"mainWrapperApp"}>  
    <div className={s.videoWrapper} >

      <Player
        playsInline
        preload="auto"
        poster="/assets/poster.png"
        fluid={false}
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        <GreenBlocks/>
    </div>
    <p>Временные отметки</p>
    <TimeStamps playFunc={setVideoTime} />
  </div>
  );
}

export default App;
