import {useEffect, useState} from "react";
import './Timer.scss';

export default function Timer() {
    const [seconds, setSeconds] = useState(600);
    const [isTimerPaused, setIsTimerPaused] = useState(true);

    useEffect(() => {
        if (isTimerPaused) return;
        if (seconds === 0) {
            setIsTimerPaused(true);
            setSeconds(600);
            alert('Your timer ended!');
        }
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isTimerPaused, seconds]);

    return (
        <span className="timer" onClick={toggleTimer}>{Math.floor(seconds / 60)}:{seconds % 60}</span>
    )

    function toggleTimer() {
        setIsTimerPaused(prevState => !prevState);
    }
}