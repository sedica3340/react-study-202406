import React, { useContext, useState } from "react";
import { MdAdd } from "react-icons/md";

import "./scss/TodoInput.scss";
import TodoContext from "../../store/todo-context";

const TodoInput = () => {
    const { addTodoItem, todoList, setSize } = useContext(TodoContext);
    const [flag, setFlag] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value);
    };
    const btnHandler = (e) => {
        if (!e.target.matches(".insert-btn")) {
            e.target = e.target.closest(".insert-btn");
        }

        if (!e.target.classList.contains("open")) {
            e.target.classList.add("open");
            setFlag(true);
        } else {
            e.target.classList.remove("open");
            setFlag(false);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        addTodoItem({
            text: inputValue,
            id: Math.random().toString(),
            complete: false,
            
        });
        setInputValue("");
    };
    const formContainer = (
        <div className="form-wrapper">
            <form className="insert-form" onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="할 일을 입력 후, 엔터를 누르세요!"
                    value={inputValue}
                    onChange={inputChangeHandler}
                />
            </form>
        </div>
    );
    return (
        <>
            {flag ? formContainer : <></>}
            <button className="insert-btn" onClick={btnHandler}>
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;
