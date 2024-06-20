import React, { useEffect, useRef, useState } from "react";
import Player from "./components/Ref/Player";
import TimerChallenge from "./components/Ref/TimerChallenge";

const App = () => {
    return (
        <>
            <Player />
            <div id="challenges">
                <TimerChallenge title={"EASY"} targetTime={1} />
                <TimerChallenge title={"NOT EASY"} targetTime={5}/>
                <TimerChallenge title={"GETTING TOUGH"} targetTime={10}/>
                <TimerChallenge title={"PROS ONLY"} targetTime={15}/>
            </div>
        </>
    );
};

export default App;
