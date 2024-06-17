import React, { useRef, useState } from "react";
import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

const App = () => {
    const [userList, setUserList] = useState([]);
    const count = useRef(1);

    const addUserHandler = (user) => {
        count.current++;

        console.log('count: ', count.current);

        console.log(user);
        setUserList((prev) => [
            ...prev,
            { ...user, id: Math.random().toString() },
        ]);
    };
    return (
        <>
            <AddUsers onAddUser={addUserHandler} />
            <UserList users={userList} />
        </>
    );
};

export default App;
