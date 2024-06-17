import React, { useState } from "react";
import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";
import ErrorModal from "./components/UI/Modal/ErrorModal";

const App = () => {
    const [userList, setUserList] = useState([]);

  const addUserHandler = user => {
    console.log(user);
    setUserList(prev => [...prev, {...user, id: Math.random().toString()}]);
  };
    return (
        <>
            <AddUsers onAddUser={addUserHandler} />
            <UserList users={userList}/>
        </>
    );
};

export default App;
