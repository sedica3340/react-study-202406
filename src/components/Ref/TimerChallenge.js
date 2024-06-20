import React, { useState } from "react";

const TimerChallenge = ({ title, targetTime }) => {
    const [timerStared, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const startHandler = (e) => {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    };
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={startHandler}>
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
