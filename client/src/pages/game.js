import React from 'react';
import GameColorBox from "@/components/color-box"
import Timer from '@/components/timer';

function GamePage() {

    const selectColor = (color) => {
        console.log(color)
    }
    return (
        <div>
            <h3>Gamne page</h3>
            <Timer />
            <div style={{ display: 'flex' }}>
                <GameColorBox color="Red" onClick={() => selectColor(props.color)} />
                <GameColorBox color="Green" onClick={() => selectColor(props.color)} />
                <GameColorBox color="Purple" onClick={() => selectColor(props.color)} />
            </div>
        </div>
    )
}

export default GamePage