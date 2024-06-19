import React, { useContext } from "react";
import { MdDelete, MdDone } from "react-icons/md";

import "./scss/TodoItem.scss";
import TodoContext from "../../store/todo-context";

const TodoItem = ({ item }) => {
    const { removeItem, checkItem, todoList } = useContext(TodoContext);
    const removeHandler = () => {
        removeItem(item.id);
    };
    const checkBoxHandler = (e) => {
        if (!e.target.matches(".check-cricle")) {
            e.target = e.target.closest(".check-circle");
        }

        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
            e.target.nextElementSibling.classList.remove("finish");
        } else {
            e.target.classList.add("active");
            e.target.nextElementSibling.classList.add("finish");
        }
        checkItem(item.id);
    };

    return (
        <li className="todo-list-item">
            <div className="check-circle" onClick={checkBoxHandler}>
                <MdDone />
            </div>
            <span className="text">{item.text}</span>
            <div className="remove" onClick={removeHandler}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;
