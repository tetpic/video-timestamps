import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import s from "./timeStamps.module.scss"

interface ITimeStampsProps {
    playFunc: (time:number)=> void
};

function TimeStamps(props: ITimeStampsProps) {
    let timeStamps = useSelector((state: RootState)=> state.timestamps.timeStamps)

    let timeStampHandler = (time: number) => {

        props.playFunc(time/1000)
    }

    return (<div className={s.timeStampsWrapper}>
        
        {
            timeStamps.map(el=> {
                return <div key={el.id} className={s.timeStamp} onClick={()=> timeStampHandler(el.timestamp)}>
                {String(~~(~~(el.timestamp / 1000)/60)).padStart(2, "0")}: 
                {String(~~(el.timestamp / 1000)%60).padStart(2, "0")}: 
                {String((el.timestamp%1000)).padStart(3, '0')}
                </div>
            })
        }
        
        
    </div>
    );
}

export default TimeStamps;