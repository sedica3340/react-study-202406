import React, { useContext, useState } from "react";
import "./scss/TodoHeader.scss";
import TodoContext from "../../store/todo-context";

const TodoHeader = () => {
    const { todoList, size } = useContext(TodoContext);
    const date = new Date();

    const [day, setDay] = useState(date.getDay());
    const dayList = {
        0: "일",
        1: "월",
        2: "화",
        3: "수",
        4: "목",
        5: "금",
        6: "토",
    };
    return (
        <header>
            <h1>
                {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}
                일
            </h1>
            <div className="day">{dayList[day]}요일</div>
            <div className="tasks-left">할 일 {size}개 남음</div>
        </header>
    );
};

export default TodoHeader;
