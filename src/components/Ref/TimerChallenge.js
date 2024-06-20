import React, { useRef, useState } from "react";



const TimerChallenge = ({ title, targetTime }) => {
    const [timerStared, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef();
   
    const startHandler = (e) => {
        setTimerExpired(false);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    };
    const stopHandler = (e) => {
        clearTimeout(timer.current);
        setTimerStarted(false);
    };
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerStared ? stopHandler : startHandler}>
                    {timerStared ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerStared ? "active" : undefined}>
                {timerStared ? "Time is running..." : "Timer inactive"}
            </p>
        </section>
    );
};

export default TimerChallenge;
