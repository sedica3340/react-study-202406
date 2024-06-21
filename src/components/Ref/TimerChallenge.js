import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
    const [timerStared, setTimerStarted] = useState(false);
    const timer = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const dialog = useRef();
    const startHandler = (e) => {
        timer.current = setInterval(() => {
          setTimeRemaining((prev) => {
                if (prev < 0) {
                    dialog.current.showModal(); 
                }
                return prev - 10;
            });
        }, 10);

        setTimerStarted(true);
    };
    const stopHandler = (e) => {
        clearInterval(timer.current);
        dialog.current.showModal();
        setTimerStarted(false);
    };
    const resetTimer = (e) => {
        setTimeRemaining(targetTime * 1000);
        setTimerStarted(false);
        clearInterval(timer.current);
    };
    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                result={timeRemaining >= 0}
                remainingTime={timeRemaining}
                onResetTimer={resetTimer}
            />
            <section className="challenge">
                <h2>{title}</h2>
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
        </>
    );
};

export default TimerChallenge;
