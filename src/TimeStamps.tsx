import React from 'react';
import PropTypes from 'prop-types';

interface ITimeStampsProps {
    playFunc: ()=> void
};

function TimeStamps(props: ITimeStampsProps) {
    let timeStampHandler = () => {
        props.playFunc()
    }

    return (
        <div onClick={timeStampHandler}>
            нажми меня
        </div>
    );
}

export default TimeStamps;