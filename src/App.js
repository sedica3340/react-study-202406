import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import MainHeader from "./components/SideEffect/MainHeader";
import Login from "./components/SideEffect/Login";
import Home from "./components/SideEffect/Home";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        localStorage.setItem("login-flag", "1");
        setIsLoggedIn(true);
    };
    // side effect 처리를 위한 함수
    useEffect(() => {
        const storedLoginFlag = localStorage.getItem("login-flag");
        if(storedLoginFlag === '1') {
            setIsLoggedIn(true);
        }
        
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem("login-flag");
        setIsLoggedIn(false);
    }

    return (
        <>
            <MainHeader onLogout={logoutHandler} />
            <main>
                {isLoggedIn && <Home />}
                {!isLoggedIn && <Login onLogin={loginHandler} />}
            </main>
        </>
    );
};

export default App;
