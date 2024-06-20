import React, { useRef, useState } from "react";

const Player = () => {
    const [enteredName, setEnteredName] = useState("anonymous");

    const $nameInputRef = useRef();

    const nameChangeHandler = (e) => {
        setEnteredName($nameInputRef.current.value);
        $nameInputRef.current.value = '';
    };

    const enterHandler = e => {
      if(e.key !== "Enter") return;
      nameChangeHandler();
    }

    return (
        <section id="player">
            <h2>Welcome {enteredName}!</h2>
            <p>
                <input onKeyUp={enterHandler} ref={$nameInputRef} type="text" />
                <button onClick={nameChangeHandler}>Set Name</button>
            </p>
        </section>
    );
};

export default Player;
