import "./App.css";
import React, { useState } from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";
const App = () => {
    const expenses = [
        {
            title: "치킨냄새맡음",
            price: 8000,
            date: new Date(2024, 6 - 1, 3),
        },
        {
            title: "김밥라면",
            price: 6000,
            date: new Date(2023, 6 - 1, 7),
        },
        {
            title: "음료수두병마심",
            price: 5000,
            date: new Date(2024, 6 - 1, 12),
        },
        {
            title: "피자먹음",
            price: 38800,
            date: new Date(2022, 3 - 1, 4),
        },
        {
            title: "전기파리채",
            price: 15000,
            date: new Date(2023, 5 - 1, 14),
        },
    ];

    // 배열을 상태변수로 관리
    const [expenseList, setExpenseList] = useState(expenses);

    const onAddExpense = (userInput) => {
        setExpenseList([... expenseList, userInput]);
    }

    return (
        <>
            <NewExpense onSave={onAddExpense}/>
            <ExpenseList expenses={expenseList} />
        </>
    );
};

export default App;
