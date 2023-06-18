import React from 'react';
import { useSelector } from 'react-redux';
import { findTimeStamps } from './helpers/findTimeStamps';
import { RootState } from './redux/store';
import s from "./greenBlocks.module.scss"

interface IGreenBlocksProp {
    text: string
}

function GreenBlocks(props: IGreenBlocksProp) {
    const state = useSelector((state: RootState)=> state.timestamps)

    
    let currentTimeStamps = findTimeStamps(state.currentVideoTime, state.timeStamps)
  
    if (currentTimeStamps.length > 0) {
        return <div className={s.greenWrapper}>
        {currentTimeStamps.map(el=> {
            const position = {
                top: `${el.zone.top}px`,
                left: `${el.zone.left}px`,
                width: `${el.zone.width}px`,
                height: `${el.zone.height}px`,
            }
            return <div key={el.id} style={position} className={s.greenBlock}></div>
        })}
        </div>
    }
  
    else {
        return null
    }
}

export default GreenBlocks;