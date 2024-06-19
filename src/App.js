import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoTemplate from "./components/Todo/TodoTemplate";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoContext from "./store/todo-context";

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [size, setSize] = useState(todoList.filter(item => !item.complete).length);
    const addTodoItem = (todoItem) => {
        setTodoList([...todoList, todoItem]);
        setSize(todoList.filter(item => !item.complete).length + 1);
    };
    const removeItem = (id) => {
        if(todoList.filter((item) => item.id === id)[0].complete) {
            setSize(todoList.filter(item => !item.complete).length);
        } else {
            setSize(todoList.filter(item => !item.complete).length - 1);
        }
        setTodoList(todoList.filter((item) => item.id !== id));
    };

    const checkItem = (id) => {
        setTodoList(
            todoList.map((item) => {
                // console.log("before: ", item.complete);
                if (item.id === id) {
                    item.complete = !item.complete;
                }
                // console.log("after: ", item.complete);
                return item;
            })
        
        );
        setSize(todoList.filter(item => !item.complete).length);
    };


    return (
        <TodoContext.Provider
            value={{
                todoList: todoList,
                addTodoItem: addTodoItem,
                removeItem: removeItem,
                checkItem: checkItem,
                size: size,
                setSize: setSize,
            }}
        >
            <TodoTemplate></TodoTemplate>
        </TodoContext.Provider>
    );
};

export default App;
