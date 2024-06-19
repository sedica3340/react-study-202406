import React, { useContext, useState } from "react";

import "./scss/TodoMain.scss";
import TodoItem from "./TodoItem";
import TodoContext from "../../store/todo-context";

const TodoMain = () => {
    const { todoList } = useContext(TodoContext);
    // const [todoItems, setTodoItems] = useState(todoList);
    return (
        <ul className="todo-list">
            {todoList.map((item) => {
                return <TodoItem key={item.id} item={item} />;
            })}
        </ul>
    );
};

export default TodoMain;
