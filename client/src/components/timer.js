import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(120);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    return (
        <div>
            Time remaining: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
        </div>
    );
};

export default Timer