import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = ({ date, title, price }) => {
    const formattedPrice = new Intl.NumberFormat("ko-KR").format(price);

    // 이벤트 핸들러 선언

    const clickHandler = (e) => {
        console.log("클릭함!");
        console.log(
            e.target.previousElementSibling.firstElementChild.textContent
        );
    };

    return (
        <Card className="expense-item">
            <ExpenseDate exDate={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{formattedPrice}원</div>
            </div>
            <button id="btn" onClick={clickHandler}>
                버튼1
            </button>
            <button id='btn2' onMouseOver={e => alert('하하')}>버튼2</button>
        </Card>
    );
};

export default ExpenseItem;
