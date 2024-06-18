import React, { useRef, useState } from 'react';
import './App.css';
import MainHeader from './components/SideEffect/MainHeader';
import Login from './components/SideEffect/Login';
import Home from './components/SideEffect/Home';


const App = () => {

  return (
    <>
      <MainHeader />
      <main>
        <Home />
        {/* <Login/> */}
      </main>
    </>
  );
};

export default App;
