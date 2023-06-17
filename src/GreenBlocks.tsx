import React from 'react';

interface IGreenBlocksProp {
    
}

function GreenBlocks(props: {text: string}) {
    return (
        <div>
            зеленый квадрат {props.text}
        </div>
    );
}

export default GreenBlocks;