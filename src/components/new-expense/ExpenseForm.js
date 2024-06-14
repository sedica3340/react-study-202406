import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onAdd}) => {
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState(0);
    // const [date, setDate] = useState(null);

    // 입력칸에 있는 3개의 값을 하나의 상태값으로 관리
    const [userInput, setUserInput] = useState({
        title: "",
        price: "",
        date: "",
    });

    // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해줌
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    // 폼 전송 이벤트 핸들러
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("폼미쳤다");

        // 지출 내역 객체를 생성
        // const newExpense = {
        //     title,
        //     price,
        //     date,
        // };
        onAdd({
            ...userInput,
            date: new Date(userInput.date)
        });

        setUserInput({
            title: "",
            price: "",
            date: "",
        });
    };
    const titleChangeHandler = (e) => {
        // 객체나 배열상태로 관리되는 상태값은
        // 상태 변경시 새로운 객체나 배열을 setter에 전달해야함

        setUserInput(prevUserInput => ({
            ...prevUserInput,
            title: e.target.value,
        }));
    };
    const priceChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            price: +e.target.value,
        });
    };
    const dateChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            date: e.target.value,
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        onChange={titleChangeHandler}
                        type="text"
                        value={userInput.title}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input
                        onChange={priceChangeHandler}
                        type="number"
                        min="100"
                        step="100"
                        value={userInput.price}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        onChange={dateChangeHandler}
                        type="date"
                        min="2019-01-01"
                        max={getTodayDate()}
                        value={userInput.date}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
