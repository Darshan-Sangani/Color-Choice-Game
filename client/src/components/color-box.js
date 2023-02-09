import React from 'react';
function GameColorBox(props) {
    const selectColor = (color) => {
        console.log(color)
    }
    return (
        <>
            <div style={{ backgroundColor: `${props.color}`, height: '27px', width: '80px', border: '2px solid black', textAlign: 'center', paddingTop: '5px', borderRadius: '5px', color: 'white', marginRight: '10px' }}>
                {`Join ${props.color}`}
            </div>
        </>
    )
}

export default GameColorBox